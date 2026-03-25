# Unidoc Transformation Guide

## Overview

Dr. Solv has been transformed into **Unidoc** - an AI-powered healthcare EMR platform. This guide explains the structure, animations, and how to easily update content.

## Key Changes from Dr. Solv to Unidoc

### Branding
- **Name**: Dr. Solv → Unidoc
- **Primary Color**: #1b6a52 (green) with hover state #15544a
- **Logo**: Updated Unidoc logo (3-circle design)
- **Focus**: Hospital management → AI-powered EMR for healthcare professionals

### Content
- **QR Code Content**: REMOVED ✓
- **Message**: "How our EMR software helps manage patient records" instead of hospital focus
- **Features**: 4 EMR modules (Medical Records, Hospital Operations, Clinical Communication, Dashboard)

### Pages Structure
```
Landing Page (/) - Single page with all sections
├── Hero - AI-Powered Healthcare EMR
├── Problem - Healthcare Challenges
├── Features - Sticky Scroll + Interactive Accordion
├── AI Capabilities - 6 AI Features
├── Testimonials - Healthcare Provider Quotes
├── CTA - Call to Action
└── Contact Form - Contact Section

Additional Pages:
/about - About the company, mission, values
/blog - Blog listing with articles
/pricing - Pricing plans and comparison
/contact - Full contact form page
```

## How to Update Content (Centralized Management)

All content is managed in **`/lib/content.ts`**. This is a single file where you can update all text, without touching component code.

### Examples of Dynamic Content

#### Hero Section Content
```typescript
export const heroContent = {
  title: "Healthcare at Your Fingertips",
  titleHighlight: "Intelligent Patient Records",
  subtitle: "AI-powered EMR for modern healthcare delivery",
  description: "Unidoc transforms...",
  cta1: "Explore Features",
  cta1Link: "#features",
  cta2: "Watch Demo",
  cta2Link: "#demo",
  image: "/hero-unidoc-emr.jpg",
}
```

#### EMR Features Content
```typescript
export const emrFeaturesContent = {
  title: "Complete EMR Solution for Healthcare Excellence",
  subtitle: "Every module you need to deliver exceptional patient care",
  features: [
    {
      id: 1,
      title: "Medical Records Management",
      description: "Centralized patient records...",
      highlights: [
        "Lab reports & prescriptions",
        "Discharge summaries",
        // ... more highlights
      ],
      image: "https://...", // screenshot URL
      color: "bg-blue-50",
    },
    // ... more features
  ],
}
```

### To Add/Edit Content:
1. Open `/lib/content.ts`
2. Find the section you want to edit (e.g., `heroContent`, `emrFeaturesContent`)
3. Update the values
4. The changes appear automatically on the site - no need to touch component files!

## Animation System

### GSAP + Accernity UI Animations
The site uses **GSAP (GreenSock Animation Library)** for scroll-triggered animations and **Accernity-style** animated background elements.

### Animation Types Implemented

#### 1. **Scroll Reveal Animations**
- Elements fade in and slide up when scrolled into view
- Used on: Problem cards, AI capabilities, testimonials, features
- Location: Individual component files, `useEffect` hooks

#### 2. **Word-by-Word Animation** (Hero)
- Hero title words animate in staggered sequence
- Creates dramatic entrance effect
- Code: `components/unidoc-hero.tsx`

#### 3. **Sticky Scroll Features**
- Left: Feature list with click/scroll interaction
- Right: Feature image updates based on selection
- Implementation: `components/unidoc-features-sticky.tsx`

#### 4. **Floating Background Orbs**
- Subtle animated gradient orbs in background
- Creates depth and visual interest
- Component: `components/animated-background.tsx`

#### 5. **Interactive Accordion**
- Expandable feature details with smooth animations
- Included in features sticky section
- Toggle: Click to expand/collapse

#### 6. **Hover Effects**
- Cards scale and shadow on hover
- Links have color transitions
- Buttons have transform animations

### Animation Configuration
Add/remove animations by editing the `useEffect` blocks in components:

```typescript
// Example: Scroll reveal animation
gsap.fromTo(
  "[data-problem-card]",
  { opacity: 0, y: 40, scale: 0.95 },  // FROM
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    delay: index * 0.1,
    scrollTrigger: {
      trigger: "[data-problem-card]",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  }, // TO
)
```

## Component Structure (Micro-Components)

Each section is a standalone, reusable component:

```
components/
├── landing/
│   ├── unidoc-hero.tsx              # Hero with animated title
│   ├── unidoc-problem.tsx           # Problem statement section
│   ├── unidoc-features-sticky.tsx   # Sticky scroll + accordion
│   ├── unidoc-ai-capabilities.tsx   # AI features grid
│   ├── unidoc-testimonials.tsx      # Testimonials carousel
│   └── unidoc-cta.tsx               # Call-to-action section
├── animated-background.tsx           # Floating orb animations
├── contact-form.tsx                 # Contact form with validation
├── navigation.tsx                   # Header nav
└── footer.tsx                       # Footer with links
```

### Benefits of This Structure
- ✅ Easy to find and edit specific sections
- ✅ Each component manages its own animations
- ✅ Content is externalized to `/lib/content.ts`
- ✅ Reusable patterns for consistency

## Customization Examples

### 1. Change Primary Color
Edit in multiple places:
- `/lib/content.ts`: `primaryColor: "#newcolor"`
- `app/globals.css`: Update color variables
- Component classNames: `bg-[#newcolor]`, `hover:bg-[#newhovercolor]`

### 2. Add a New Feature
In `/lib/content.ts`:
```typescript
export const emrFeaturesContent = {
  features: [
    // ... existing features
    {
      id: 5,
      title: "New Feature Name",
      description: "Feature description",
      highlights: ["Benefit 1", "Benefit 2"],
      image: "https://image-url.jpg",
      color: "bg-new-color-50",
    },
  ],
}
```

### 3. Update Testimonials
In `/lib/content.ts`:
```typescript
export const testimonialsContent = {
  testimonials: [
    {
      name: "Dr. New Name",
      role: "New Role",
      hospital: "Hospital Name",
      quote: "New testimonial quote...",
      image: "/testimonial-image.jpg",
    },
  ],
}
```

### 4. Modify Navigation Links
In `/lib/content.ts`:
```typescript
export const siteConfig = {
  // ... other config
}
// Or update in `components/navigation.tsx` directly
```

## SEO & Meta Tags

Update SEO in `/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Unidoc - AI-Powered Healthcare EMR Platform",
  description: "Transform healthcare delivery with Unidoc's intelligent EMR...",
  // ... more meta tags
}
```

## Color System

**Primary Green**: #1b6a52 (hover: #15544a)
**Neutrals**: White, grays, off-white backgrounds
**Accents**: Used sparingly for buttons and highlights

Uses semantic design tokens:
- `bg-[#1b6a52]` for primary
- `text-gray-900` for dark text
- `bg-green-50` for light backgrounds

## Image Assets

All images referenced in content.ts:
- **Hero Image**: `/public/hero-unidoc.jpg` (auto-generated)
- **Feature Screenshots**: Stored at Vercel blob URLs
- **Logo**: `/public/logo-unidoc.png`
- **Testimonials**: `/public/testimonial-*.jpg`

Update image URLs in `/lib/content.ts` without touching components.

## Blog & About Pages

### Blog Page (`/app/blog/page.tsx`)
- Grid of blog posts with images and meta
- Posts are hardcoded in the component
- To add posts: Add to `blogPosts` array in component

### About Page (`/app/about/page.tsx`)
- Company story, mission, values
- Team information
- Impact statistics
- Content is in the component JSX

### Blog Post Template (`/app/blog/[slug]/page.tsx`)
- Create for individual post views
- Use dynamic routing for custom content

## Performance Optimizations

- ✅ **GSAP ScrollTrigger**: Only animates visible elements
- ✅ **Image Optimization**: Using Next.js Image component
- ✅ **Lazy Loading**: Animations trigger on scroll
- ✅ **Code Splitting**: Each page loads independently

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (tested on all screen sizes)
- Smooth animations on all devices

## Common Tasks

### Update Hero Title
1. Go to `/lib/content.ts`
2. Edit `heroContent.title`
3. Done! Auto-updates on site

### Change Feature Images
1. Upload new screenshots
2. Get URLs (from Vercel blob storage or CDN)
3. Update in `emrFeaturesContent.features[].image`
4. Save - updates automatically

### Add Testimonial
1. Edit `testimonialsContent.testimonials` array
2. Add new testimonial object
3. New quote appears in testimonials section

### Modify CTA Button Text
1. Edit `ctaContent.buttonText` in `/lib/content.ts`
2. Or edit `heroContent.cta1` for hero buttons
3. Changes apply instantly

## Deployment

Deploy to Vercel:
```bash
git add .
git commit -m "Update Unidoc content"
git push origin main
```

Vercel auto-deploys on push. Site goes live in ~1 minute.

## Troubleshooting

### Animations Not Working?
- Clear browser cache
- Check console for JS errors
- Ensure GSAP is imported in component
- Verify `data-*` attributes exist in JSX

### Images Not Loading?
- Check URL is correct and public
- Verify image format is supported (jpg, png, webp)
- Use absolute URLs, not relative paths

### Content Not Updating?
- Ensure changes are in `/lib/content.ts` (not components)
- Clear site cache and rebuild
- Check for typos in object keys

## Resources

- **GSAP Docs**: https://greensock.com/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Next.js**: https://nextjs.org
- **Accernity UI**: https://ui.aceternity.com

---

**Last Updated**: March 2026
**Version**: Unidoc 1.0
**Status**: Production Ready
