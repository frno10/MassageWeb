# Deployment Guide - Massage Studio Website

## 🚀 Hosting Options

Your website is a static site, so it can be hosted on many platforms. Here are the best options:

### 🟢 **Recommended: Netlify (Free + Premium Features)**

**Why Netlify?**
- ✅ Free tier with custom domain
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN for fast loading
- ✅ Direct GitHub integration
- ✅ Form handling for contact forms
- ✅ Branch previews for testing

**Setup Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with your GitHub account
3. Click "New site from Git"
4. Choose your private repo
5. Deploy settings:
   - **Build command:** Leave empty
   - **Publish directory:** `.` (root)
6. Click "Deploy site"

**Custom Domain (Optional):**
- In Netlify dashboard → Domain settings
- Add your custom domain (e.g., `masaze-kosice.sk`)
- Follow DNS configuration instructions

---

### 🔷 **Alternative: Vercel (Excellent for Static Sites)**

**Why Vercel?**
- ✅ Extremely fast global CDN
- ✅ Automatic optimizations
- ✅ GitHub integration
- ✅ Free tier

**Setup Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Deploy (automatic)

---

### 🟣 **GitHub Pages (Free with Limitations)**

**Pros:** Completely free, GitHub integrated
**Cons:** Public repos only (but you can make repo private and enable Pages)

**Setup:**
1. In your GitHub repo → Settings → Pages
2. Source: Deploy from branch
3. Branch: `master` or `main`
4. Your site will be at: `https://yourusername.github.io/massage-studio-website`

---

## 🔧 Pre-Deployment Checklist

### ✅ **Before Going Live**
- [ ] Update contact information in `index.html`
- [ ] Replace placeholder email: `info@masaze-kosice.sk`
- [ ] Replace placeholder phone: `+421 901 234 567`  
- [ ] Replace placeholder address: `Hlavná 123, 040 01 Košice`
- [ ] Update business hours if needed
- [ ] Add real Google Analytics ID (if desired)
- [ ] Test all language switching
- [ ] Test all interactive elements

### 🖼️ **Content Updates (Optional)**
- [ ] Replace Unsplash images with real studio photos
- [ ] Update about section with real therapist info
- [ ] Integrate real booking system (replace iframe placeholder)
- [ ] Add Google Maps with real location
- [ ] Add Google Reviews widget

---

## 🌍 **Domain Configuration**

### **For Slovak Domain (.sk)**
If you want `masaze-kosice.sk` or similar:

1. **Buy domain** from Slovak registrar (webglobe.sk, active24.sk)
2. **Configure DNS:**
   ```
   Type: CNAME
   Name: www
   Value: your-netlify-site.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5 (Netlify's IP)
   ```

### **For International Domain**
- Any registrar (Namecheap, GoDaddy, Cloudflare)
- Same DNS configuration as above

---

## 🔒 **Security & Performance**

### **Already Configured:**
- ✅ Security headers in `netlify.toml`
- ✅ Content Security Policy
- ✅ Cache optimization
- ✅ HTTPS/SSL (automatic on Netlify/Vercel)

### **Optional Enhancements:**
- **Google Analytics:** Add GA4 tracking code
- **Facebook Pixel:** For social media marketing
- **Hotjar/Microsoft Clarity:** For user behavior analysis

---

## 📊 **Post-Deployment Testing**

### **Test Checklist:**
- [ ] Website loads on mobile/desktop
- [ ] All language switching works
- [ ] Floating CTA button appears on scroll  
- [ ] All animations work smoothly
- [ ] Contact forms/links work
- [ ] FAQ accordion functions
- [ ] Gallery lightbox works
- [ ] All images load properly

### **Performance Testing:**
- **Google PageSpeed Insights:** Test mobile/desktop performance
- **GTmetrix:** Performance analysis
- **WebPageTest:** Detailed loading analysis

---

## 🚨 **Maintenance**

### **Regular Updates:**
- Update pricing as needed
- Add new testimonials
- Update gallery photos
- Check for broken links
- Monitor site performance

### **Content Management:**
- **Pricing:** Edit `index.html` pricing tables
- **Services:** Update service descriptions
- **Contact:** Modify contact information
- **Languages:** Update translation objects in `js/script.js`

---

## 🆘 **Troubleshooting**

### **Common Issues:**
- **Site not loading:** Check DNS propagation (24-48 hours)
- **Images not showing:** Check image URLs and CSP headers  
- **Language switching broken:** Check JavaScript console for errors
- **Mobile layout issues:** Test on real devices, not just browser resize

### **Contact Form Integration:**
If you want contact forms to work:
1. **Netlify Forms:** Add `data-netlify="true"` to form tags
2. **Formspree:** Alternative form handling service
3. **EmailJS:** Client-side email sending

---

## 📈 **SEO Optimization**

### **Already Implemented:**
- ✅ Semantic HTML structure
- ✅ Meta tags for all languages
- ✅ Alt text for images
- ✅ Proper heading hierarchy
- ✅ Mobile-first responsive design

### **Next Steps:**
- **Google Search Console:** Submit sitemap
- **Google My Business:** Create business listing  
- **Local SEO:** Add schema markup for local business
- **Social Media:** Open Graph tags (already included)

---

**🎯 Recommended Flow:**
1. Deploy to **Netlify** first (easiest)
2. Test everything works
3. Add custom domain if desired  
4. Update with real content
5. Set up analytics and monitoring

Your website is production-ready and will perform excellently on any of these hosting platforms!
