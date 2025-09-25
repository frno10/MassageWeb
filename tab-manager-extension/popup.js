class TabManager {
    constructor() {
        this.tabs = [];
        this.suspendedTabs = new Set();
        this.currentView = 'list';
        this.searchTerm = '';
        
        this.init();
    }

    async init() {
        await this.loadTabs();
        await this.loadSettings();
        this.setupEventListeners();
        this.render();
    }

    async loadTabs() {
        try {
            this.tabs = await chrome.tabs.query({});
            await this.loadSuspendedTabs();
            this.updateStats();
        } catch (error) {
            console.error('Error loading tabs:', error);
        }
    }

    async loadSuspendedTabs() {
        try {
            const result = await chrome.storage.local.get(['suspendedTabs']);
            this.suspendedTabs = new Set(result.suspendedTabs || []);
        } catch (error) {
            console.error('Error loading suspended tabs:', error);
        }
    }

    async loadSettings() {
        try {
            const result = await chrome.storage.sync.get({
                autoSuspendTime: 30, // minutes
                maxTabs: 50,
                autoCloseDuplicates: false,
                showFavicons: true
            });
            this.settings = result;
        } catch (error) {
            console.error('Error loading settings:', error);
            this.settings = {};
        }
    }

    setupEventListeners() {
        // Search functionality
        document.getElementById('searchTabs').addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.render();
        });

        // Quick actions
        document.getElementById('closeDuplicates').addEventListener('click', () => {
            this.closeDuplicateTabs();
        });

        document.getElementById('suspendTabs').addEventListener('click', () => {
            this.suspendInactiveTabs();
        });

        document.getElementById('groupSimilar').addEventListener('click', () => {
            this.groupSimilarTabs();
        });

        document.getElementById('saveSession').addEventListener('click', () => {
            this.saveCurrentSession();
        });

        // View options
        document.getElementById('viewList').addEventListener('click', () => {
            this.switchView('list');
        });

        document.getElementById('viewGroups').addEventListener('click', () => {
            this.switchView('groups');
        });

        // Settings
        document.getElementById('openSettings').addEventListener('click', () => {
            chrome.runtime.openOptionsPage();
        });
    }

    switchView(view) {
        this.currentView = view;
        
        // Update active button
        document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`view${view.charAt(0).toUpperCase() + view.slice(1)}`).classList.add('active');
        
        // Show/hide appropriate sections
        document.getElementById('tabsList').classList.toggle('hidden', view !== 'list');
        document.getElementById('tabsGroups').classList.toggle('hidden', view !== 'groups');
        
        this.render();
    }

    async closeDuplicateTabs() {
        const duplicates = this.findDuplicateTabs();
        if (duplicates.length === 0) {
            this.showNotification('No duplicate tabs found', 'info');
            return;
        }

        try {
            await chrome.tabs.remove(duplicates);
            this.showNotification(`Closed ${duplicates.length} duplicate tabs`, 'success');
            await this.loadTabs();
            this.render();
        } catch (error) {
            console.error('Error closing duplicates:', error);
            this.showNotification('Error closing duplicate tabs', 'error');
        }
    }

    findDuplicateTabs() {
        const urlMap = new Map();
        const duplicates = [];

        this.tabs.forEach(tab => {
            const url = this.normalizeUrl(tab.url);
            if (urlMap.has(url)) {
                duplicates.push(tab.id);
            } else {
                urlMap.set(url, tab.id);
            }
        });

        return duplicates;
    }

    normalizeUrl(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.origin + urlObj.pathname;
        } catch {
            return url;
        }
    }

    async suspendInactiveTabs() {
        const activeTabId = (await chrome.tabs.query({ active: true, currentWindow: true }))[0]?.id;
        const inactiveTabs = this.tabs.filter(tab => 
            tab.id !== activeTabId && 
            !this.suspendedTabs.has(tab.id) && 
            !tab.pinned
        );

        if (inactiveTabs.length === 0) {
            this.showNotification('No inactive tabs to suspend', 'info');
            return;
        }

        try {
            for (const tab of inactiveTabs) {
                await this.suspendTab(tab.id);
            }
            this.showNotification(`Suspended ${inactiveTabs.length} inactive tabs`, 'success');
            await this.loadTabs();
            this.render();
        } catch (error) {
            console.error('Error suspending tabs:', error);
            this.showNotification('Error suspending tabs', 'error');
        }
    }

    async suspendTab(tabId) {
        try {
            const tab = this.tabs.find(t => t.id === tabId);
            if (!tab) return;

            // Store tab data for restoration
            const tabData = {
                url: tab.url,
                title: tab.title,
                favIconUrl: tab.favIconUrl,
                suspendedAt: Date.now()
            };

            await chrome.storage.local.set({
                [`suspended_${tabId}`]: tabData
            });

            this.suspendedTabs.add(tabId);
            await chrome.storage.local.set({
                suspendedTabs: Array.from(this.suspendedTabs)
            });

            // Replace tab content with suspension page
            await chrome.tabs.update(tabId, {
                url: `data:text/html,<html><head><title>💤 ${tab.title}</title></head><body style="font-family:Arial,sans-serif;text-align:center;padding:50px;background:#f5f5f5;"><h1>💤 Tab Suspended</h1><p>This tab has been suspended to save memory</p><p><strong>${tab.title}</strong></p><button onclick="window.location.href='${tab.url}'">Restore Tab</button></body></html>`
            });
        } catch (error) {
            console.error('Error suspending tab:', error);
        }
    }

    async groupSimilarTabs() {
        try {
            const groups = this.categorizeTabsByDomain();
            
            for (const [domain, tabIds] of Object.entries(groups)) {
                if (tabIds.length > 1) {
                    const groupId = await chrome.tabs.group({ tabIds });
                    await chrome.tabGroups.update(groupId, {
                        title: this.getDomainDisplayName(domain),
                        color: this.getColorForDomain(domain)
                    });
                }
            }
            
            this.showNotification('Similar tabs have been grouped', 'success');
            await this.loadTabs();
            this.render();
        } catch (error) {
            console.error('Error grouping tabs:', error);
            this.showNotification('Error grouping tabs', 'error');
        }
    }

    categorizeTabsByDomain() {
        const groups = {};
        
        this.tabs.forEach(tab => {
            try {
                const domain = new URL(tab.url).hostname;
                if (!groups[domain]) {
                    groups[domain] = [];
                }
                groups[domain].push(tab.id);
            } catch (error) {
                // Handle invalid URLs
            }
        });
        
        return groups;
    }

    getDomainDisplayName(domain) {
        const parts = domain.split('.');
        return parts.length > 1 ? parts[parts.length - 2] : domain;
    }

    getColorForDomain(domain) {
        const colors = ['blue', 'red', 'yellow', 'green', 'pink', 'purple', 'cyan', 'orange'];
        const hash = domain.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        return colors[hash % colors.length];
    }

    async saveCurrentSession() {
        try {
            const sessionData = {
                tabs: this.tabs.map(tab => ({
                    url: tab.url,
                    title: tab.title,
                    favIconUrl: tab.favIconUrl,
                    pinned: tab.pinned
                })),
                timestamp: Date.now(),
                name: `Session ${new Date().toLocaleString()}`
            };

            const sessions = await chrome.storage.local.get(['savedSessions']) || { savedSessions: [] };
            sessions.savedSessions.unshift(sessionData);
            
            // Keep only last 10 sessions
            if (sessions.savedSessions.length > 10) {
                sessions.savedSessions = sessions.savedSessions.slice(0, 10);
            }

            await chrome.storage.local.set(sessions);
            this.showNotification('Session saved successfully', 'success');
        } catch (error) {
            console.error('Error saving session:', error);
            this.showNotification('Error saving session', 'error');
        }
    }

    updateStats() {
        document.getElementById('tabCount').textContent = this.tabs.length;
        document.getElementById('suspendedCount').textContent = this.suspendedTabs.size;
        
        // Estimate memory usage (rough calculation)
        const avgMemoryPerTab = 50; // MB
        const estimatedMemory = this.tabs.length * avgMemoryPerTab;
        document.getElementById('memoryUsage').textContent = `~${estimatedMemory}MB`;
    }

    getFilteredTabs() {
        if (!this.searchTerm) {
            return this.tabs;
        }

        return this.tabs.filter(tab => 
            tab.title.toLowerCase().includes(this.searchTerm) ||
            tab.url.toLowerCase().includes(this.searchTerm)
        );
    }

    render() {
        if (this.currentView === 'list') {
            this.renderTabsList();
        } else {
            this.renderTabsGroups();
        }
        this.updateStats();
    }

    renderTabsList() {
        const container = document.getElementById('tabsList');
        const filteredTabs = this.getFilteredTabs();

        if (filteredTabs.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>No tabs found</h3>
                    <p>Try adjusting your search terms</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filteredTabs.map(tab => this.renderTabItem(tab)).join('');
        
        // Add event listeners to tab items
        container.querySelectorAll('.tab-item').forEach(item => {
            const tabId = parseInt(item.dataset.tabId);
            
            item.addEventListener('click', (e) => {
                if (!e.target.classList.contains('tab-action')) {
                    chrome.tabs.update(tabId, { active: true });
                    window.close();
                }
            });
        });

        // Add event listeners to tab actions
        container.querySelectorAll('.tab-close').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.stopPropagation();
                const tabId = parseInt(btn.closest('.tab-item').dataset.tabId);
                try {
                    await chrome.tabs.remove(tabId);
                    await this.loadTabs();
                    this.render();
                } catch (error) {
                    console.error('Error closing tab:', error);
                }
            });
        });

        container.querySelectorAll('.tab-suspend').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.stopPropagation();
                const tabId = parseInt(btn.closest('.tab-item').dataset.tabId);
                await this.suspendTab(tabId);
                await this.loadTabs();
                this.render();
            });
        });
    }

    renderTabItem(tab) {
        const isActive = tab.active;
        const isSuspended = this.suspendedTabs.has(tab.id);
        const favicon = tab.favIconUrl || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="%23f3f4f6"/></svg>';
        
        return `
            <div class="tab-item ${isActive ? 'active' : ''} ${isSuspended ? 'suspended' : ''}" data-tab-id="${tab.id}">
                <img src="${favicon}" class="tab-favicon" onerror="this.src='data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 16 16&quot;><rect width=&quot;16&quot; height=&quot;16&quot; fill=&quot;%23f3f4f6&quot;/></svg>'">
                <div class="tab-info">
                    <div class="tab-title">${this.escapeHtml(tab.title)}</div>
                    <div class="tab-url">${this.escapeHtml(this.shortenUrl(tab.url))}</div>
                </div>
                <div class="tab-actions">
                    ${!isSuspended ? '<button class="tab-action tab-suspend" title="Suspend">💤</button>' : ''}
                    <button class="tab-action tab-close" title="Close">✕</button>
                </div>
            </div>
        `;
    }

    renderTabsGroups() {
        const container = document.getElementById('tabsGroups');
        const groups = this.categorizeTabsByDomain();
        const filteredTabs = this.getFilteredTabs();

        const html = Object.entries(groups)
            .filter(([domain, tabIds]) => {
                return tabIds.some(id => filteredTabs.find(tab => tab.id === id));
            })
            .map(([domain, tabIds]) => {
                const groupTabs = tabIds
                    .map(id => this.tabs.find(tab => tab.id === id))
                    .filter(tab => tab && filteredTabs.includes(tab));

                if (groupTabs.length === 0) return '';

                return `
                    <div class="tab-group">
                        <div class="group-header">
                            <span>${this.getDomainDisplayName(domain)}</span>
                            <span class="group-count">${groupTabs.length}</span>
                        </div>
                        ${groupTabs.map(tab => this.renderTabItem(tab)).join('')}
                    </div>
                `;
            }).join('');

        container.innerHTML = html || `
            <div class="empty-state">
                <h3>No grouped tabs found</h3>
                <p>Try grouping similar tabs first</p>
            </div>
        `;
    }

    shortenUrl(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.hostname + (urlObj.pathname !== '/' ? urlObj.pathname : '');
        } catch {
            return url;
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '10px',
            right: '10px',
            padding: '12px 16px',
            borderRadius: '6px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            minWidth: '200px',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });

        // Set background color based on type
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        notification.style.backgroundColor = colors[type] || colors.info;

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Initialize the tab manager when the popup loads
document.addEventListener('DOMContentLoaded', () => {
    new TabManager();
});

