# 📸 Icons Directory

This directory should contain the extension icons. Create the following PNG files:

## Required Icons:
- `icon16.png` - 16x16 pixels (toolbar display)
- `icon32.png` - 32x32 pixels (extension management)
- `icon48.png` - 48x48 pixels (extension details)
- `icon128.png` - 128x128 pixels (Chrome Web Store)

## Design Guidelines:
- **Style**: Modern, flat design
- **Colors**: Use blue/purple theme (#667eea, #764ba2, #4f46e5)
- **Symbol**: Folder, tabs, or organization icon (🗂️📁📋)
- **Background**: Transparent PNG preferred
- **Visibility**: Ensure icon is clear at all sizes

## Quick Creation Options:

### 1. Online Tools:
- **Favicon.io**: Create from text or emoji
- **RealFaviconGenerator**: Multi-size generation
- **Canva**: Drag-and-drop icon maker

### 2. Simple Placeholder:
Create solid colored squares as temporary icons:
- 16x16: Blue square (#667eea)
- 32x32: Purple square (#764ba2)
- 48x48: Dark blue square (#4f46e5)
- 128x128: Gradient blue to purple

### 3. Text-based Icons:
Use online generators to create icons from text:
- Text: "TM" (Tab Manager)
- Font: Bold, sans-serif
- Colors: White text on blue background

### 4. Emoji-based Icons:
Convert emojis to PNG:
- 🗂️ (Card Index Dividers)
- 📁 (File Folder)
- 📋 (Clipboard)
- 🗃️ (Card File Box)

## SVG Template (convert to PNG):
```svg
<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="20" fill="url(#gradient)"/>
  <rect x="20" y="40" width="88" height="8" rx="4" fill="white" opacity="0.8"/>
  <rect x="20" y="60" width="88" height="8" rx="4" fill="white" opacity="0.6"/>
  <rect x="20" y="80" width="88" height="8" rx="4" fill="white" opacity="0.4"/>
</svg>
```

## After Creating Icons:
1. Save all 4 sizes in this directory
2. Ensure filenames match exactly: `icon16.png`, `icon32.png`, `icon48.png`, `icon128.png`
3. Test the extension loading in Chrome/Edge
4. Verify icons appear correctly in toolbar and extension pages

**Note**: The extension will not load properly without these icon files!



