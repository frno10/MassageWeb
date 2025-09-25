# 📦 Installation Guide

## Prerequisites
- Google Chrome, Microsoft Edge, or other Chromium-based browser
- Basic familiarity with browser extensions

## 🚀 Quick Installation (Developer Mode)

### Step 1: Prepare the Extension
1. Ensure all extension files are in the `tab-manager-extension` folder
2. **IMPORTANT**: Add icon files to the `icons/` directory:
   - `icon16.png` (16x16 pixels)
   - `icon32.png` (32x32 pixels) 
   - `icon48.png` (48x48 pixels)
   - `icon128.png` (128x128 pixels)

### Step 2: Create Icon Directory
```bash
mkdir tab-manager-extension/icons
```

**Icon Requirements:**
- Format: PNG (recommended) or JPG
- Sizes: 16x16, 32x32, 48x48, 128x128 pixels
- Design: Simple, recognizable folder/tab icon
- Background: Transparent (PNG) or solid color

**Suggested Icon Design:**
- Use a folder icon (🗂️) or tab organization symbol
- Colors: Blue/purple gradient or professional colors
- Style: Modern, flat design
- Ensure visibility at all sizes

### Step 3: Load Extension in Browser

#### Chrome/Edge/Chromium:
1. Open your browser
2. Navigate to `chrome://extensions/` (or `edge://extensions/` for Edge)
3. Enable "Developer mode" toggle in the top right
4. Click "Load unpacked"
5. Select the `tab-manager-extension` folder
6. Extension should appear in your toolbar

#### Firefox (if adapting):
1. Navigate to `about:debugging`
2. Click "This Firefox"
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file

### Step 4: Verify Installation
1. Look for the tab manager icon in your browser toolbar
2. Click the icon to open the popup
3. Try basic features like viewing tabs and closing duplicates
4. Check settings by clicking the gear icon

## 🎨 Creating Icons (Optional)

If you need to create icons, here are some options:

### Online Icon Generators:
- **Favicon.io** - Generate from text or image
- **RealFaviconGenerator** - Multi-size icon generation
- **IconKitchen** - Android-style icon maker

### Design Tools:
- **Figma** (free) - Professional design tool
- **Canva** (free tier) - Easy drag-and-drop
- **GIMP** (free) - Open source image editor
- **Adobe Illustrator** (paid) - Professional vector graphics

### Icon Design Tips:
```css
/* Suggested color palette */
Primary: #667eea
Secondary: #764ba2
Accent: #4f46e5
Background: #ffffff (transparent)
```

### Quick Icon Template:
1. Create 128x128 canvas
2. Add folder or tab symbol
3. Use gradient background
4. Export as PNG with transparency
5. Resize to create smaller versions (48px, 32px, 16px)

## 🔧 Troubleshooting Installation

### Common Issues:

**"Manifest file is missing or unreadable"**
- Verify `manifest.json` exists in the root folder
- Check file permissions (should be readable)
- Ensure JSON syntax is valid

**Icons don't display**
- Create placeholder icons if missing
- Check icon file paths in manifest.json
- Use absolute paths in icon references

**Extension doesn't load**
- Check browser console for error messages
- Verify all required files are present
- Try reloading the extension

**Permissions errors**  
- Grant all requested permissions during installation
- Check if browser security settings block extensions

### Creating Placeholder Icons:
If you don't have icons yet, create simple colored squares:

```html
<!-- Create using HTML Canvas or online tools -->
16x16: Solid blue square (#667eea)
32x32: Solid purple square (#764ba2)  
48x48: Solid blue square (#4f46e5)
128x128: Gradient square (blue to purple)
```

## 📋 File Checklist

Ensure these files exist before loading:

### Required Files:
- [ ] `manifest.json`
- [ ] `popup.html`
- [ ] `popup.css`
- [ ] `popup.js`
- [ ] `background.js`
- [ ] `options.html`
- [ ] `options.css`
- [ ] `options.js`

### Icon Files:
- [ ] `icons/icon16.png`
- [ ] `icons/icon32.png`
- [ ] `icons/icon48.png`
- [ ] `icons/icon128.png`

### Documentation:
- [ ] `README.md`
- [ ] `INSTALLATION.md` (this file)

## 🚀 Next Steps

After successful installation:

1. **Configure Settings**
   - Click the extension icon → gear icon
   - Set your preferred auto-suspend time
   - Configure tab limits and notifications
   - Customize appearance options

2. **Test Core Features**
   - Open multiple tabs
   - Try duplicate detection
   - Test tab grouping
   - Save a session

3. **Set Keyboard Shortcuts**
   - Go to `chrome://extensions/shortcuts`
   - Find "Advanced Tab Manager"
   - Assign your preferred key combinations

4. **Backup Settings**
   - Open settings page
   - Click "Export Settings"
   - Save the file for future use

## 🆘 Getting Help

If you encounter issues:

1. Check browser console for error messages
2. Verify all files are present and readable
3. Try reloading the extension
4. Restart the browser
5. Check the troubleshooting section in README.md

## 🔄 Updating the Extension

To update after making changes:
1. Go to `chrome://extensions/`
2. Find "Advanced Tab Manager"
3. Click the refresh icon
4. Test your changes

---

**Happy tab managing! 🎉**



