# Unidoc Landing Page - Setup & Customization Guide

## Overview

This is the **Unidoc** - AI-Powered Healthcare EMR Platform landing page. It's been completely transformed from Dr. Solv with:

- ✅ New branding (Unidoc, primary color #1b6a52)
- ✅ Removed all QR code content
- ✅ AI-focused messaging for EMR system
- ✅ Sticky scroll + interactive accordion for features
- ✅ GSAP + Accernity-style animations
- ✅ Centralized dynamic content system
- ✅ Additional pages: Blog, Pricing, About, Contact

## Project Structure

```
/app
  /page.tsx                     # Main landing page
  /about/page.tsx               # About page
  /blog/page.tsx                # Blog listing page
  /pricing/page.tsx             # Pricing page
  /contact/page.tsx             # Contact form page

/components
  /unidoc-hero.tsx              # Hero section with animations
  /unidoc-problem.tsx           # Problem statement section
  /unidoc-features-sticky.tsx   # Sticky scroll + accordion features
  /unidoc-ai-capabilities.tsx   # AI features showcase
  /unidoc-testimonials.tsx      # Testimonials section
  /unidoc-cta.tsx               # Call-to-action section
  /navigation.tsx               # Updated header with Unidoc branding
  /footer.tsx                   # Updated footer

/lib
  /content.ts                   # CENTRALIZED CONTENT CONFIG
```

## Dynamic Content System

All content is centralized in `/lib/content.ts`. This makes it easy to update any text, copy, or section content without touching component code.

### How to Update Content

#### 1. Hero Section
Edit `heroContent` in `/lib/content.ts`:
```typescript
export const heroContent = {
  title: "Healthcare at Your Fingertips",
  titleHighlight: "Intelligent Patient Records",
  subtitle: "AI-powered EMR for modern healthcare delivery",
  description: "...",
  cta1: "Explore Features",
  cta1Link: "#features",
  cta2: "Watch Demo",
  cta2Link: "#demo",
}
```

#### 2. Problem Section
Edit `problemContent`:
```typescript
export const problemContent = {
  title: "Healthcare Teams Face Critical Challenges",
  subtitle: "Managing patient care shouldn't require endless searching",
  problems: [
    {
      id: 1,
      title: "Fragmented Records",
      description: "...",
      icon: "📋",
    },
    // Add more problems...
  ],
}
```

#### 3. EMR Features
Edit `emrFeaturesContent` to add/remove features:
```typescript
export const emrFeaturesContent = {
  title: "Complete EMR Solution...",
  features: [
    {
      id: 1,
      title: "Medical Records Management",
      description: "...",
      highlights: ["Lab reports", "Discharge summaries", ...],
      image: "URL_TO_IMAGE",
      color: "bg-blue-50",
    },
    // More features...
  ],
}
```

#### 4. AI Capabilities
Edit `aiCapabilitiesContent`:
```typescript
export const aiCapabilitiesContent = {
  title: "AI-Powered Features That Transform Care",
  capabilities: [
    {
      icon: "🤖",
      title: "Smart Diagnosis Assistance",
      description: "...",
    },
    // More capabilities...
  ],
}
```

#### 5. Testimonials
Edit `testimonialsContent`:
```typescript
export const testimonialsContent = {
  testimonials: [
    {
      name: "Dr. Anil Mehta",
      role: "Senior Physician",
      hospital: "Delhi Medical Center",
      quote: "...",
    },
    // More testimonials...
  ],
}
```

#### 6. Pricing
Edit `pricingContent`:
```typescript
export const pricingContent = {
  plans: [
    {
      name: "Starter",
      description: "...",
      price: "₹4,999",
      features: ["Feature 1", "Feature 2", ...],
      cta: "Get Started",
    },
    // More plans...
  ],
}
```

#### 7. Navigation & Footer
Edit `footerContent`:
```typescript
export const footerContent = {
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    // More links...
  ],
  solutions: [...],
  resources: [...],
  legal: [...],
}
```

## Animation System

### GSAP Animations
The landing page uses GSAP with ScrollTrigger for scroll-triggered animations:

- `[data-animate]` - Basic fade-in on scroll
- `[data-text-reveal]` - Staggered text reveal
- `[data-parallax]` - Parallax scroll effect
- `[data-hero-*]` - Hero section timeline animations

### Sticky Scroll Features
The features section uses:
- Click-to-select feature items on the left
- Sticky image on the right that changes based on active feature
- Interactive accordion below with expandable details

### Accernity-Style Effects
- Hover animations on cards
- Gradient backgrounds on hover
- Smooth transitions and transforms
- Icon scaling on card hover

## Color System

**Primary Color**: `#1b6a52` (Unidoc green)
**Hover Color**: `#15544a` (darker green)

All colors are applied through Tailwind classes. Update by searching for color values in components.

## Adding New Content Sections

1. Create a new export in `/lib/content.ts`:
```typescript
export const myNewSectionContent = {
  title: "...",
  items: [...]
}
```

2. Create a new component `/components/unidoc-my-section.tsx`:
```typescript
import { myNewSectionContent } from "@/lib/content"

export default function MySection() {
  // Use myNewSectionContent.title, etc.
}
```

3. Import and add to `/app/page.tsx`:
```typescript
import MySection from "@/components/unidoc-my-section"

export default function Home() {
  return (
    <main>
      <UnidocHero />
      {/* Add new section */}
      <MySection />
      <Footer />
    </main>
  )
}
```

## Updating Images

All images are loaded from URLs in the content configuration:
- Hero image: `heroContent.image`
- Feature images: `emrFeaturesContent.features[].image`
- Blog images: in blog post definitions

To update:
1. Upload new image to your image hosting service
2. Copy the URL
3. Update the URL in `/lib/content.ts`

## Pages

### Landing Page (`/`)
- Main product showcase
- Features, AI capabilities, testimonials, CTA

### About Page (`/about`)
- Company story and mission
- Why choose Unidoc
- Impact metrics

### Blog Page (`/blog`)
- Article listings with filters
- Category tags, read time, dates
- Newsletter subscription

### Pricing Page (`/pricing`)
- Three pricing tiers
- Feature comparison table
- FAQ section

### Contact Page (`/contact`)
- Contact form
- Contact info (email, phone, address)
- Quick response promise

## Customization Tips

### Change Primary Color
1. Search for `#1b6a52` in all component files
2. Replace with your brand color
3. Also update `#15544a` (hover state) with complementary darker shade

### Add New Testimonials
Update `testimonialsContent.testimonials` array in `/lib/content.ts`

### Update Feature List
Modify `emrFeaturesContent.features` array with new modules

### Add Blog Posts
Edit the `blogPosts` array in `/app/blog/page.tsx`

### Modify Navigation Links
Update navigation items in:
- `/components/navigation.tsx`
- `footerContent` in `/lib/content.ts`

## Performance Optimization

- Images are loaded lazily
- GSAP animations use ScrollTrigger for performance
- All CSS is Tailwind (minimal bundle)
- No external UI libraries (just Radix components for accessibility)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (optimized for all screen sizes)
- Smooth animations on all devices

## Key Features

✅ Fully responsive design
✅ Smooth GSAP animations
✅ Interactive components
✅ SEO-optimized metadata
✅ Accessibility-first approach
✅ Dynamic content system
✅ Multiple pages with consistent design
✅ Contact forms
✅ Pricing tables
✅ Blog integration

## Next Steps

1. Update all content in `/lib/content.ts`
2. Replace placeholder images with real product screenshots
3. Add your company details (email, phone, address)
4. Customize colors if needed
5. Update blog posts with real articles
6. Deploy to Vercel

---

**Questions?** Review the component code in `/components/` for implementation details.
