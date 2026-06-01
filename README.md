# Insert Solutions Website

A modern, enterprise-grade company website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Premium SaaS-style design with glassmorphism effects
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered animations throughout
- **SEO Optimized**: Comprehensive SEO implementation with meta tags, structured data, and sitemap
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Reusable Components**: Well-structured, maintainable component architecture
- **Performance**: Fast loading with optimized build and code splitting

## 🔍 SEO Features

This website includes comprehensive search engine optimization:

- ✅ **Meta Tags**: Complete meta tags including title, description, keywords
- ✅ **Open Graph**: Social media optimization for Facebook, LinkedIn
- ✅ **Twitter Cards**: Enhanced Twitter preview with images
- ✅ **Structured Data**: JSON-LD schema for Organization, WebSite, and Products
- ✅ **Semantic HTML**: Proper use of `<header>`, `<main>`, `<footer>` elements
- ✅ **Sitemap.xml**: XML sitemap for search engine crawlers
- ✅ **Robots.txt**: Crawler instructions and sitemap reference
- ✅ **Security Headers**: SEO-friendly security and caching headers
- ✅ **Mobile-First**: Responsive design optimized for all devices
- ✅ **Fast Loading**: Optimized performance with Vite build

**See [SEO-GUIDE.md](SEO-GUIDE.md) for detailed SEO documentation and checklist.**

## 📋 Sections

1. **Sticky Navbar** - Smooth scroll navigation with mobile menu
2. **Hero Section** - Eye-catching landing with CTA buttons and floating elements
3. **About Section** - Company highlights and mission/vision/values
4. **Services Section** - Healthcare, Development, Cloud, and Integration services
5. **Products Section** - Cureline, Tibbiq, and Invex POS showcases
6. **Industries Section** - Industries served with animated cards
7. **Why Choose Us** - Animated counters and key differentiators
8. **Development Process** - Interactive timeline of project stages
9. **Technology Stack** - Technologies and frameworks we use
10. **Testimonials** - Client testimonials carousel
11. **Contact Section** - Contact form and information
12. **Footer** - Company links, newsletter, and social media

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 🎨 Color Palette

- **Primary**: #0F4C81 (Blue)
- **Secondary**: #00A3E0 (Cyan)
- **Accent**: #22C55E (Green)
- **Text**: #1F2937 (Gray)
- **Background**: #FFFFFF (White)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd insert-solutions-website
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. **Configure EmailJS** (for contact form functionality):
   - Copy `.env.example` to `.env`
   - Follow the [EMAILJS-SETUP.md](EMAILJS-SETUP.md) guide to get your credentials
   - Add your EmailJS credentials to `.env`

5. Open your browser and visit: `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🧪 Preview Production Build

```bash
npm run preview
```

## 📧 Contact Form Setup

The contact form uses **EmailJS** to send emails without a backend server.

### Quick Setup:

1. Copy the environment file:
   ```bash
   cp .env.example .env
   ```

2. Follow the detailed guide: **[EMAILJS-SETUP.md](EMAILJS-SETUP.md)**

3. Add your credentials to `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Restart your dev server

**Free Tier**: 200 emails/month (no credit card required)

For production deployment, add these environment variables to your hosting platform (Netlify, Vercel, etc.).

## 📁 Project Structure

```
insert-solutions-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Products.tsx
│   │   ├── Industries.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── DevelopmentProcess.tsx
│   │   ├── TechnologyStack.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 🎯 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0F4C81',
      secondary: '#00A3E0',
      accent: '#22C55E',
    },
  },
},
```

### Content

Update the component files in `src/components/` to modify:
- Company information
- Services and products
- Contact details
- Testimonials

### Animations

Customize animations in individual components using Framer Motion:

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Your content */}
</motion.div>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact:
- Email: info@insertsolutions.com
- Website: [Insert Solutions](https://insertsolutions.com)

---

Built with ❤️ by Insert Solutions
