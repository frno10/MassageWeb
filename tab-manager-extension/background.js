class BackgroundTabManager {
    constructor() {
        this.settings = {
            autoSuspendTime: 30, // minutes
            maxTabs: 50,
            autoCloseDuplicates: false,
            autoGroupSimilar: false
        };
        
        this.suspendedTabs = new Set();
        this.tabActivity = new Map(); // Track last activity time
        
        this.init();
    }

    async init() {
        await this.loadSettings();
        await this.loadSuspendedTabs();
        this.setupEventListeners();
        this.startPeriodicTasks();
    }

    async loadSettings() {
        try {
            const result = await chrome.storage.sync.get({
                autoSuspendTime: 30,
                maxTabs: 50,
                autoCloseDuplicates: false,
                autoGroupSimilar: false,
                enableNotifications: true
            });
            this.settings = result;
        } catch (error) {
            console.error('Error loading settings:', error);
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

    setupEventListeners() {
        // Handle tab activation
        chrome.tabs.onActivated.addListener((activeInfo) => {
            this.updateTabActivity(activeInfo.tabId);
        });

        // Handle tab updates
        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if (changeInfo.status === 'complete') {
                this.updateTabActivity(tabId);
                this.checkForDuplicates();
            }
        });

        // Handle tab creation
        chrome.tabs.onCreated.addListener((tab) => {
            this.updateTabActivity(tab.id);
            this.checkTabLimit();
        });

        // Handle tab removal
        chrome.tabs.onRemoved.addListener((tabId) => {
            this.tabActivity.delete(tabId);
            this.suspendedTabs.delete(tabId);
            this.saveSuspendedTabs();
        });

        // Handle keyboard shortcuts
        chrome.commands.onCommand.addListener((command) => {
            this.handleCommand(command);
        });

        // Handle extension icon click
        chrome.action.onClicked.addListener(() => {
            chrome.action.openPopup();
        });

        // Handle messages from popup
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            this.handleMessage(message, sender, sendResponse);
            return true; // Keep message channel open for async response
        });
    }

    updateTabActivity(tabId) {
        this.tabActivity.set(tabId, Date.now());
    }

    async handleCommand(command) {
        switch (command) {
            case 'close-duplicates':
                await this.closeDuplicateTabs();
                break;
            case 'suspend-tabs':
                await this.suspendInactiveTabs();
                break;
        }
    }

    async handleMessage(message, sender, sendResponse) {
        try {
            switch (message.type) {
                case 'get-stats':
                    const stats = await this.getTabStats();
                    sendResponse(stats);
                    break;
                case 'suspend-tab':
                    await this.suspendTab(message.tabId);
                    sendResponse({ success: true });
                    break;
                case 'restore-tab':
                    await this.restoreTab(message.tabId);
                    sendResponse({ success: true });
                    break;
                default:
                    sendResponse({ error: 'Unknown message type' });
            }
        } catch (error) {
            console.error('Error handling message:', error);
            sendResponse({ error: error.message });
        }
    }

    startPeriodicTasks() {
        // Run cleanup tasks every 5 minutes
        setInterval(() => {
            this.performPeriodicTasks();
        }, 5 * 60 * 1000);

        // Initial run after 1 minute
        setTimeout(() => {
            this.performPeriodicTasks();
        }, 60 * 1000);
    }

    async performPeriodicTasks() {
        try {
            await this.autoSuspendOldTabs();
            
            if (this.settings.autoCloseDuplicates) {
                await this.closeDuplicateTabs();
            }
            
            if (this.settings.autoGroupSimilar) {
                await this.autoGroupSimilarTabs();
            }
            
            await this.checkTabLimit();
        } catch (error) {
            console.error('Error performing periodic tasks:', error);
        }
    }

    async autoSuspendOldTabs() {
        if (this.settings.autoSuspendTime <= 0) return;

        const tabs = await chrome.tabs.query({});
        const now = Date.now();
        const suspendThreshold = this.settings.autoSuspendTime * 60 * 1000;

        for (const tab of tabs) {
            // Don't suspend active, pinned, or already suspended tabs
            if (tab.active || tab.pinned || this.suspendedTabs.has(tab.id)) {
                continue;
            }

            const lastActivity = this.tabActivity.get(tab.id) || tab.lastAccessed || now;
            
            if (now - lastActivity > suspendThreshold) {
                await this.suspendTab(tab.id);
            }
        }
    }

    async suspendTab(tabId) {
        try {
            const tab = await chrome.tabs.get(tabId);
            if (!tab || tab.active || tab.pinned) return;

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
            await this.saveSuspendedTabs();

            // Create suspended page content
            const suspendedContent = this.createSuspendedPageContent(tab);
            
            await chrome.tabs.update(tabId, {
                url: `data:text/html;charset=utf-8,${encodeURIComponent(suspendedContent)}`
            });

            this.showNotification(`Tab suspended: ${tab.title}`, 'info');
        } catch (error) {
            console.error('Error suspending tab:', error);
        }
    }

    createSuspendedPageContent(tab) {
        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>💤 ${tab.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            text-align: center;
            max-width: 500px;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        }
        .sleep-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
            animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        h1 {
            margin-bottom: 1rem;
            font-size: 2.5rem;
            font-weight: 300;
        }
        .tab-title {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            background: rgba(255, 255, 255, 0.1);
            padding: 15px 20px;
            border-radius: 10px;
        }
        .restore-btn {
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 15px 30px;
            font-size: 1.1rem;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        .restore-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            border-color: rgba(255, 255, 255, 0.5);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        .info {
            margin-top: 2rem;
            font-size: 0.9rem;
            opacity: 0.7;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="sleep-icon">💤</div>
        <h1>Tab Suspended</h1>
        <div class="tab-title">${this.escapeHtml(tab.title)}</div>
        <a href="${tab.url}" class="restore-btn">🔄 Restore Tab</a>
        <div class="info">
            This tab was suspended to save memory and improve performance
        </div>
    </div>
</body>
</html>`;
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    async restoreTab(tabId) {
        try {
            const tabDataKey = `suspended_${tabId}`;
            const result = await chrome.storage.local.get([tabDataKey]);
            const tabData = result[tabDataKey];

            if (tabData) {
                await chrome.tabs.update(tabId, { url: tabData.url });
                await chrome.storage.local.remove([tabDataKey]);
            }

            this.suspendedTabs.delete(tabId);
            await this.saveSuspendedTabs();
        } catch (error) {
            console.error('Error restoring tab:', error);
        }
    }

    async closeDuplicateTabs() {
        try {
            const tabs = await chrome.tabs.query({});
            const urlMap = new Map();
            const duplicates = [];

            for (const tab of tabs) {
                const normalizedUrl = this.normalizeUrl(tab.url);
                
                if (urlMap.has(normalizedUrl)) {
                    // Keep the more recently accessed tab
                    const existingTab = urlMap.get(normalizedUrl);
                    if (tab.lastAccessed > existingTab.lastAccessed) {
                        duplicates.push(existingTab.id);
                        urlMap.set(normalizedUrl, tab);
                    } else {
                        duplicates.push(tab.id);
                    }
                } else {
                    urlMap.set(normalizedUrl, tab);
                }
            }

            if (duplicates.length > 0) {
                await chrome.tabs.remove(duplicates);
                this.showNotification(`Closed ${duplicates.length} duplicate tabs`, 'success');
            }
        } catch (error) {
            console.error('Error closing duplicates:', error);
        }
    }

    normalizeUrl(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.origin + urlObj.pathname;
        } catch {
            return url;
        }
    }

    async autoGroupSimilarTabs() {
        try {
            const tabs = await chrome.tabs.query({});
            const domainGroups = new Map();

            // Group tabs by domain
            for (const tab of tabs) {
                try {
                    const domain = new URL(tab.url).hostname;
                    if (!domainGroups.has(domain)) {
                        domainGroups.set(domain, []);
                    }
                    domainGroups.get(domain).push(tab.id);
                } catch (error) {
                    // Skip invalid URLs
                }
            }

            // Create groups for domains with multiple tabs
            for (const [domain, tabIds] of domainGroups.entries()) {
                if (tabIds.length > 1) {
                    try {
                        const groupId = await chrome.tabs.group({ tabIds });
                        await chrome.tabGroups.update(groupId, {
                            title: this.getDomainDisplayName(domain),
                            color: this.getColorForDomain(domain)
                        });
                    } catch (error) {
                        // Skip if grouping fails (tabs might already be grouped)
                    }
                }
            }
        } catch (error) {
            console.error('Error auto-grouping tabs:', error);
        }
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

    async checkTabLimit() {
        if (this.settings.maxTabs <= 0) return;

        const tabs = await chrome.tabs.query({});
        
        if (tabs.length > this.settings.maxTabs) {
            // Suspend oldest inactive tabs
            const inactiveTabs = tabs
                .filter(tab => !tab.active && !tab.pinned && !this.suspendedTabs.has(tab.id))
                .sort((a, b) => (this.tabActivity.get(a.id) || 0) - (this.tabActivity.get(b.id) || 0));

            const tabsToSuspend = inactiveTabs.slice(0, tabs.length - this.settings.maxTabs);
            
            for (const tab of tabsToSuspend) {
                await this.suspendTab(tab.id);
            }

            if (tabsToSuspend.length > 0) {
                this.showNotification(`Auto-suspended ${tabsToSuspend.length} tabs to stay under limit`, 'warning');
            }
        }
    }

    async getTabStats() {
        const tabs = await chrome.tabs.query({});
        const domains = new Set();
        let memoryEstimate = 0;

        for (const tab of tabs) {
            try {
                domains.add(new URL(tab.url).hostname);
            } catch (error) {
                // Skip invalid URLs
            }
            memoryEstimate += 50; // Rough estimate: 50MB per tab
        }

        return {
            totalTabs: tabs.length,
            suspendedTabs: this.suspendedTabs.size,
            uniqueDomains: domains.size,
            memoryEstimate: `~${memoryEstimate}MB`
        };
    }

    async saveSuspendedTabs() {
        try {
            await chrome.storage.local.set({
                suspendedTabs: Array.from(this.suspendedTabs)
            });
        } catch (error) {
            console.error('Error saving suspended tabs:', error);
        }
    }

    async showNotification(message, type = 'info') {
        if (!this.settings.enableNotifications) return;

        try {
            const iconMap = {
                success: 'icons/icon48.png',
                error: 'icons/icon48.png',
                warning: 'icons/icon48.png',
                info: 'icons/icon48.png'
            };

            await chrome.notifications.create({
                type: 'basic',
                iconUrl: iconMap[type],
                title: 'Tab Manager',
                message: message,
                priority: type === 'error' ? 2 : 1
            });
        } catch (error) {
            console.error('Error showing notification:', error);
        }
    }
}

// Initialize background manager when extension starts
const backgroundManager = new BackgroundTabManager();

// Handle extension installation/update
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        chrome.tabs.create({
            url: chrome.runtime.getURL('options.html')
        });
    }
});

