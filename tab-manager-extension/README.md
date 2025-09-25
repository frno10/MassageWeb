# 🗂️ Advanced Tab Manager

A comprehensive browser extension to help you manage tab overload with intelligent automation, organization, and memory optimization features.

## ✨ Features

### 🎯 Core Tab Management
- **Smart Tab Overview** - Visual list of all open tabs with search and filtering
- **One-Click Actions** - Close, suspend, group, or bookmark tabs instantly  
- **Duplicate Detection** - Automatically find and close duplicate tabs
- **Tab Grouping** - Organize similar tabs by domain automatically
- **Session Management** - Save and restore browsing sessions

### 💤 Memory Optimization
- **Auto-Suspension** - Automatically suspend inactive tabs to save memory
- **Intelligent Thresholds** - Set custom time limits for tab suspension
- **Memory Estimation** - Track estimated memory usage and savings
- **Performance Monitoring** - Keep track of tab management statistics

### 🤖 Automation Features
- **Auto-Close Duplicates** - Automatically remove duplicate tabs as they're created
- **Auto-Group Similar** - Group tabs by domain automatically
- **Tab Limits** - Set maximum tab limits with automatic cleanup
- **Background Monitoring** - Continuous tab management even when popup is closed

### ⚡ Power User Features
- **Keyboard Shortcuts** - Quick actions with customizable hotkeys
- **Advanced Search** - Search tabs by title, URL, or domain
- **Bulk Operations** - Perform actions on multiple tabs at once
- **Settings Export/Import** - Backup and sync your preferences

## 🚀 Installation

### Method 1: Chrome Web Store (Recommended)
1. Visit the Chrome Web Store (link will be added once published)
2. Click "Add to Chrome"
3. Grant necessary permissions

### Method 2: Developer Mode (For Testing)
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the `tab-manager-extension` folder
5. The extension should now appear in your toolbar

## 🎮 How to Use

### Quick Start
1. Click the tab manager icon in your toolbar
2. View all your open tabs in the popup
3. Use quick action buttons for common tasks:
   - 🗑️ Close Duplicates
   - 💤 Suspend Inactive
   - 📁 Group Similar  
   - 💾 Save Session

### Advanced Usage

#### Tab Search and Filtering
- Type in the search box to find specific tabs
- Search by title, URL, or domain name
- Use the list/groups view toggle for different perspectives

#### Automatic Tab Suspension
1. Click the settings gear icon
2. Set "Auto-suspend tabs after" to your preferred time (e.g., 30 minutes)
3. Inactive tabs will automatically suspend to save memory
4. Click suspended tabs to restore them instantly

#### Tab Grouping
- Use "Group Similar" to automatically organize tabs by domain
- Groups are color-coded and labeled by website
- Groups help keep related tabs together

#### Session Management
- Click "Save Session" to bookmark your current tab set
- Restore previous sessions from the options page
- Automatically saves sessions at configured intervals

## ⚙️ Settings & Configuration

Access settings by clicking the gear icon in the popup or right-clicking the extension icon.

### Key Settings:
- **Auto-suspend time**: How long before inactive tabs are suspended (0 = disabled)
- **Tab limits**: Maximum number of tabs before automatic cleanup
- **Notifications**: Control when you receive notifications
- **Automation**: Enable/disable automatic duplicate closing and grouping
- **Appearance**: Customize the interface and theme

## ⌨️ Keyboard Shortcuts

Default shortcuts (can be customized in Chrome settings):
- `Ctrl+Shift+D` (Windows/Linux) / `Cmd+Shift+D` (Mac): Close duplicate tabs  
- `Ctrl+Shift+S` (Windows/Linux) / `Cmd+Shift+S` (Mac): Suspend inactive tabs

To customize shortcuts:
1. Go to `chrome://extensions/shortcuts`
2. Find "Advanced Tab Manager"
3. Set your preferred key combinations

## 🔐 Permissions Explained

The extension requires these permissions:
- **tabs**: To access and manage your browser tabs
- **storage**: To save your settings and session data  
- **activeTab**: To interact with the currently active tab
- **tabGroups**: To create and manage tab groups

We never collect, transmit, or store any personal data. All data stays on your device.

## 📊 Statistics & Analytics

The extension tracks (locally only):
- Total tabs managed
- Number of tabs suspended  
- Duplicate tabs closed
- Estimated memory saved

All statistics are stored locally and never transmitted anywhere.

## 🛠️ Troubleshooting

### Common Issues:

**Extension doesn't appear in toolbar**
- Check if it's enabled in `chrome://extensions/`
- Look for it in the extensions menu (puzzle piece icon)

**Tabs not suspending automatically**  
- Verify auto-suspend time is set > 0 in settings
- Ensure the tab isn't pinned (pinned tabs aren't suspended by default)
- Check that the tab has been inactive for the set duration

**Keyboard shortcuts not working**
- Verify shortcuts are enabled in settings
- Check for conflicts in `chrome://extensions/shortcuts`
- Ensure the browser window has focus

**Performance issues**
- Try reducing the number of tabs
- Increase auto-suspension frequency
- Disable automatic grouping if not needed

### Reset Extension
If you encounter persistent issues:
1. Open extension settings
2. Click "Reset to Defaults"
3. Restart the browser

## 🤝 Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Development Setup
```bash
git clone <repository-url>
cd tab-manager-extension
# Load as unpacked extension in Chrome
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons from various open source icon libraries
- Inspired by other tab management tools
- Built with modern web technologies

## 📧 Support

For support, feature requests, or bug reports:
- Create an issue on GitHub
- Contact us through the Chrome Web Store
- Email: [your-email@example.com]

---

**Stay organized, save memory, boost productivity! 🚀**



