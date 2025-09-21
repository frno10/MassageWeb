# Technical Implementation Guide

## 🏗️ Architecture Overview

This is a static website built with vanilla HTML, CSS, and JavaScript following modern web development practices while maintaining simplicity and performance.

### Technology Stack
- **HTML5:** Semantic markup with accessibility features
- **CSS3:** Custom properties, Grid, Flexbox, advanced animations
- **JavaScript ES6+:** Modular functions, modern syntax
- **No Build Process:** Direct file serving, no compilation required

---

## 📁 File Structure & Organization

```
MassageWeb/
├── index.html                    # Single-page application structure
├── css/
│   └── style.css                # Complete styling system
├── js/
│   └── script.js                # All interactive functionality  
├── images/                      # Placeholder for real images
├── languages/                   # Reserved for future translation files
├── README.md                    # Basic project info
├── PROJECT_DOCUMENTATION.md     # Comprehensive project docs
├── CHANGELOG.md                 # Version history
└── TECHNICAL_GUIDE.md          # This file
```

---

## 🎨 CSS Architecture

### Custom Properties System

```css
:root {
  /* Color System - Luxury Spa Palette */
  --primary: #7a9471;          /* Deep sage */
  --primary-light: #a4c4a0;    /* Soft sage */
  --primary-dark: #5a7052;     /* Forest sage */
  --gold: #c9a96e;             /* Warm gold accent */
  --accent: #b08d7d;           /* Terracotta */
  
  /* Typography */
  --font-primary: 'Poppins', sans-serif;
  --font-secondary: 'Playfair Display', serif;
  
  /* Spacing Scale */
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */  
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */
  --spacing-xxl: 4rem;    /* 64px */
  
  /* Effects & Gradients */
  --gradient-hero: linear-gradient(135deg, rgba(122, 148, 113, 0.95) 0%, ...);
  --box-shadow-glow: 0 0 40px var(--shadow-glow);
  --glass-effect: backdrop-filter: blur(20px) saturate(180%);
}
```

### Responsive Breakpoint Strategy

```css
/* Mobile-First Approach */
/* Base styles: Mobile (default) */

@media (max-width: 768px) {
  /* Tablet adjustments */
}

@media (max-width: 480px) {
  /* Mobile refinements */  
}
```

### Component-Based CSS Organization

```css
/* 1. CSS Reset & Base Styles */
/* 2. Custom Properties */
/* 3. Utility Classes */
/* 4. Component Styles */
  /* Navigation */
  /* Hero Section */
  /* About Section */
  /* Services Section */
  /* Gallery Section */
  /* Pricing Section */
  /* Testimonials Section */
  /* FAQ Section */
  /* Contact Section */
  /* Footer */
/* 5. Animations */  
/* 6. Responsive Media Queries */
```

### Animation System

```css
/* Keyframe Animations */
@keyframes floatingOrbs {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
}

@keyframes gentleFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Performance-optimized animations */
.animated-element {
  will-change: transform;
  transform: translateZ(0); /* Force GPU acceleration */
}
```

---

## 🧩 JavaScript Architecture

### Modular Function Design

```javascript
// Main initialization pattern
document.addEventListener('DOMContentLoaded', () => {
    // Language system
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'sk';
    setLanguage(savedLanguage);
    
    // Initialize all modules
    initializeNavigation();
    initializeSmoothScrolling();
    initializeActiveNavigation();
    initializeFAQ();
    initializeScrollAnimations();
    initializeNavbarScroll();
    initializeFloatingCTA();
    initializeFormHandling();
    initializeGallery();
    initializePerformanceOptimizations();
    initializeAccessibility();
});
```

### Performance Optimization Patterns

```javascript
// Throttled scroll events for 60fps performance
function initializeFloatingCTA() {
    let isThrottled = false;
    window.addEventListener('scroll', () => {
        if (!isThrottled) {
            toggleFloatingCTA();
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;
            }, 16); // ~60fps
        }
    });
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
```

### Translation System Architecture

```javascript
const translations = {
    sk: { /* Slovak translations */ },
    en: { /* English translations */ },
    hu: { /* Hungarian translations */ }
};

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update document language attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-key attributes
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update meta tags
    updateMetaTags(lang);
}
```

---

## 📱 Mobile-First Implementation

### Responsive Design Strategy

```css
/* 1. Base styles (mobile-first) */
.service-item {
    grid-template-columns: 1fr;
    text-align: center;
}

/* 2. Tablet improvements */
@media (min-width: 769px) {
    .service-item {
        grid-template-columns: 1fr 1fr;
        text-align: left;
    }
}

/* 3. Desktop enhancements */
@media (min-width: 1024px) {
    .service-item:hover {
        transform: translateY(-4px);
    }
}
```

### Touch-Friendly Interactions

```css
/* Minimum touch targets */
.nav-link, .cta-button {
    min-height: 44px;
    min-width: 44px;
    padding: var(--spacing-md);
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
    .hover-effects {
        /* Disable hover effects on touch devices */
    }
}
```

---

## ⚡ Performance Optimizations

### CSS Performance

```css
/* GPU acceleration for animations */
.animated-element {
    transform: translateZ(0);
    will-change: transform;
}

/* Efficient selectors */
.component__element--modifier {} /* BEM methodology */

/* Optimized animations */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

### JavaScript Performance

```javascript
// Debounced resize handler
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 250);
});

// Efficient DOM queries
const cachedElements = {
    navbar: document.querySelector('.navbar'),
    floatingCTA: document.getElementById('floating-cta'),
    heroSection: document.getElementById('home')
};

// Lazy loading preparation
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(handleImageLoad);
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
```

---

## 🌍 Multilingual System Implementation

### HTML Structure

```html
<!-- Language switcher -->
<div class="language-switcher">
    <button class="lang-btn active" data-lang="sk">SK</button>
    <button class="lang-btn" data-lang="en">EN</button>
    <button class="lang-btn" data-lang="hu">HU</button>
</div>

<!-- Translatable content -->
<h1 data-key="hero.title.line1">Relaxujte.</h1>
<p data-key="hero.subtitle">Vítajte v útulnom priestore...</p>
```

### Translation Management

```javascript
// Adding new language
const translations = {
    // Existing languages...
    de: {
        'hero.title.line1': 'Entspannen Sie.',
        'hero.subtitle': 'Willkommen in einem gemütlichen Raum...'
        // Add all translation keys
    }
};

// Dynamic content update
function updateContent(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}
```

---

## 🎭 Animation System

### CSS Animation Architecture

```css
/* Base animation classes */
.fade-in {
    opacity: 0;
    animation: fadeIn 0.6s ease forwards;
}

.slide-up {
    transform: translateY(30px);
    animation: slideUp 0.8s ease forwards;
}

/* Staggered animations */
.service-item:nth-child(1) { animation-delay: 0.2s; }
.service-item:nth-child(2) { animation-delay: 0.4s; }
.service-item:nth-child(3) { animation-delay: 0.6s; }
```

### JavaScript Animation Control

```javascript
// Scroll-triggered animations
function initializeScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => observer.observe(el));
}
```

---

## 🔧 Component Implementation Examples

### Floating CTA Button

```css
.floating-cta {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1001;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.floating-cta.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
```

```javascript
function initializeFloatingCTA() {
    const floatingCTA = document.getElementById('floating-cta');
    const heroSection = document.getElementById('home');
    
    function toggleFloatingCTA() {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition > heroHeight * 0.7) {
            floatingCTA.classList.add('show');
        } else {
            floatingCTA.classList.remove('show');
        }
    }
    
    // Performance-optimized scroll listening
    let isThrottled = false;
    window.addEventListener('scroll', () => {
        if (!isThrottled) {
            toggleFloatingCTA();
            isThrottled = true;
            setTimeout(() => isThrottled = false, 16);
        }
    });
}
```

### FAQ Accordion

```javascript
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}
```

---

## 🛡️ Security & Best Practices

### Content Security Policy Ready

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               img-src 'self' https://images.unsplash.com https://placehold.co; 
               font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;">
```

### Accessibility Implementation

```html
<!-- Skip link for keyboard users -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Proper heading hierarchy -->
<h1>Main page title</h1>
<h2>Section titles</h2>
<h3>Subsection titles</h3>

<!-- ARIA labels for interactive elements -->
<button aria-label="Toggle navigation menu" class="nav-toggle">
    <span class="hamburger"></span>
</button>

<!-- Alt text for all images -->
<img src="image.jpg" alt="Descriptive text for screen readers">
```

### Performance Monitoring

```javascript
// Performance measurement
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        console.log('Performance:', entry.name, entry.duration);
    }
});
observer.observe({entryTypes: ['measure']});

// Mark important events
performance.mark('language-switch-start');
setLanguage(newLang);
performance.mark('language-switch-end');
performance.measure('language-switch', 'language-switch-start', 'language-switch-end');
```

---

## 🔌 Integration Points

### Booking System Integration

```html
<!-- Iframe container ready for booking system -->
<div class="booking-iframe">
    <!-- Replace with actual booking system -->
    <iframe src="https://termino.eu/embed/BOOKING_ID" 
            frameborder="0" 
            width="100%" 
            height="400"
            title="Online Booking System">
    </iframe>
</div>
```

### Analytics Integration Points

```javascript
// Event tracking structure
function trackEvent(category, action, label) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', action, {
            category: category,
            label: label
        });
    }
}

// Usage examples
document.querySelector('.cta-button').addEventListener('click', () => {
    trackEvent('CTA', 'click', 'hero-book-massage');
});

document.querySelector('.gift-cards-button').addEventListener('click', () => {
    trackEvent('Gift Cards', 'click', 'pricing-section');
});
```

---

## 🐛 Debugging & Development

### Console Logging System

```javascript
const DEBUG = true; // Set to false in production

function debugLog(category, message, data = null) {
    if (DEBUG) {
        console.group(`🔧 ${category}`);
        console.log(message);
        if (data) console.log(data);
        console.groupEnd();
    }
}

// Usage
debugLog('Language', 'Switching to language:', currentLanguage);
debugLog('Animation', 'Floating CTA state:', floatingCTA.classList.contains('show'));
```

### Development Server

```bash
# Simple HTTP server options
python -m http.server 3000
# or
npx http-server -p 3000 -c-1
# or
php -S localhost:3000
```

### Browser Testing Checklist

```javascript
// Feature detection
const features = {
    intersectionObserver: 'IntersectionObserver' in window,
    customProperties: CSS.supports('color', 'var(--test)'),
    gridSupport: CSS.supports('display', 'grid'),
    backdropFilter: CSS.supports('backdrop-filter', 'blur(10px)')
};

console.table(features);
```

---

## 📊 Code Quality Metrics

### Current Statistics
- **HTML:** 560 lines, semantic structure
- **CSS:** 1,500+ lines, organized in logical sections
- **JavaScript:** 800+ lines, modular functions
- **Translation Keys:** 100+ per language
- **Animations:** 10+ keyframe animations
- **Responsive Breakpoints:** 3 main breakpoints

### Performance Targets
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms

---

## 🚀 Deployment Guide

### Pre-deployment Checklist
- [ ] Replace placeholder images with optimized real photos
- [ ] Update all contact information
- [ ] Test on multiple devices and browsers
- [ ] Validate HTML, CSS, and accessibility
- [ ] Optimize images (WebP format recommended)
- [ ] Set up analytics tracking
- [ ] Configure CSP headers
- [ ] Test multilingual functionality

### Hosting Requirements
- **Type:** Static hosting (Netlify, Vercel, GitHub Pages)
- **HTTPS:** Required for modern features
- **CDN:** Recommended for global performance
- **Gzip:** Enable for text assets compression

---

This technical guide provides the foundation for understanding, maintaining, and extending the massage studio website. The codebase follows modern web development practices while remaining framework-free and performant.
