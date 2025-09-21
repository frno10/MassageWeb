# Massage Studio Website

A modern, mobile-first website for a cozy massage studio, featuring multilingual support (Slovak, English, Hungarian) and beautiful natural design.

## 🌟 Features

### Design & User Experience
- **Mobile-first responsive design** - Perfect on all devices
- **Natural color palette** - Sage green, warm beige, wood tones
- **Modern microanimations** - Smooth transitions and hover effects
- **Accessible design** - WCAG compliant with proper contrast and focus states
- **Fast loading** - Optimized images and minimal dependencies

### Multilingual Support
- **3 Languages**: Slovak (default), English, Hungarian
- **Smart language switching** - Saves user preference
- **SEO optimized** - Proper meta tags for each language
- **Complete translations** - All content translated professionally

### Sections & Content
- **Hero Section** - Compelling headline with call-to-action
- **About Me** - Personal story and qualifications
- **Services** - Classic massages, Maderotherapy, Cupping therapy
- **Gallery** - Studio photos with lightbox viewing
- **Pricing** - Transparent pricing with gift card options
- **Testimonials** - Client reviews and ratings
- **FAQ** - Interactive accordion with common questions
- **Contact** - Booking system, maps, and contact information

### Technical Features
- **Static HTML/CSS/JS** - No frameworks, fast and reliable
- **SEO Optimized** - Meta tags, structured data, semantic HTML
- **Performance Focused** - Lazy loading, optimized assets
- **Cross-browser Compatible** - Works on all modern browsers

## 🚀 Getting Started

### Local Development

1. **Clone or download** the project files
2. **Start a local server**:
   ```bash
   # Using Python
   python -m http.server 3000
   
   # Using Node.js
   npx http-server -p 3000
   
   # Using PHP
   php -S localhost:3000
   ```
3. **Open your browser** and visit `http://localhost:3000`

### File Structure
```
massage-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and responsive design
├── js/
│   └── script.js       # Interactivity and language system
├── images/             # Placeholder for real images
├── languages/          # Translation files (future expansion)
└── README.md           # This file
```

## 🛠️ Customization

### Content Updates
- **Text content**: Edit the `translations` object in `js/script.js`
- **Images**: Replace placeholder URLs with real images
- **Contact info**: Update phone, email, address in HTML
- **Pricing**: Modify pricing tables in HTML

### Design Customization
- **Colors**: Update CSS custom properties in `:root` selector
- **Fonts**: Change Google Fonts imports in HTML head
- **Layout**: Modify grid layouts and spacing variables

### Adding New Languages
1. Add new language object to `translations` in `script.js`
2. Add language button to navigation
3. Update language switcher functionality

## 📱 Responsive Breakpoints

- **Mobile**: Up to 480px
- **Tablet**: 481px to 768px
- **Desktop**: 769px and up

## 🎨 Color Palette

- **Primary**: #8faa8f (Sage green)
- **Secondary**: #d4c4a8 (Warm beige)
- **Accent**: #b5a895 (Wood tone)
- **Text**: #4a4a4a (Charcoal)
- **Background**: #fefefe (Off-white)

## 📈 SEO Features

- Semantic HTML5 structure
- Meta tags for description, keywords, Open Graph
- Proper heading hierarchy (H1-H6)
- Alt text for all images
- Clean, descriptive URLs
- Fast loading times

## ♿ Accessibility Features

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators
- Skip links

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with graceful degradation)

## 📞 Integration Ready

The website is prepared for easy integration of:
- **Booking systems** (Termino.eu or similar)
- **Google Maps** embed
- **Google Reviews** widget
- **Analytics tracking**
- **Social media links**

## 🚀 Deployment

### Static Hosting (Recommended)
- **Netlify**: Drop folder or connect to Git
- **Vercel**: Deploy from Git repository
- **GitHub Pages**: Upload files to repository
- **Traditional hosting**: Upload files via FTP

### Performance Tips
- Compress images before uploading
- Enable gzip compression on server
- Set up proper caching headers
- Consider using a CDN for images

## 📝 License

This project is created as a custom solution for a massage studio. Modify and use as needed for your business.

## 🤝 Support

For customization or support, contact the developer or refer to the inline code comments for guidance.

---

*Built with ❤️ for relaxation and wellness*
