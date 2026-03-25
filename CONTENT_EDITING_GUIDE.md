# Quick Content Editing Guide

**The easiest way to update Unidoc content is by editing `/lib/content.ts`**

## What Goes Where?

### ✅ DO: Edit These Files
- **`/lib/content.ts`** - ALL text content, titles, descriptions, features, pricing, testimonials
- **`app/page.tsx`** - Landing page layout (rarely needs changes)
- **`components/navigation.tsx`** - Navigation links (if adding new pages)

### ❌ DON'T: Edit These (Content stays in content.ts)
- `components/unidoc-hero.tsx` - Hero component reads from `heroContent`
- `components/unidoc-features-sticky.tsx` - Reads from `emrFeaturesContent`
- `components/unidoc-testimonials.tsx` - Reads from `testimonialsContent`
- Component files in general

---

## Common Updates

### 📝 Update Hero Section
**File**: `/lib/content.ts` → `heroContent` object

```typescript
export const heroContent = {
  title: "Healthcare at Your Fingertips",           // ← Main headline
  titleHighlight: "Intelligent Patient Records",    // ← Highlighted part
  subtitle: "AI-powered EMR for modern...",         // ← Subtitle
  description: "Unidoc transforms how...",          // ← Description paragraph
  cta1: "Explore Features",                         // ← First button text
  cta1Link: "#features",                            // ← First button link
  cta2: "Watch Demo",                               // ← Second button text
  cta2Link: "#demo",                                // ← Second button link
}
```

### 🏥 Update Feature Information
**File**: `/lib/content.ts` → `emrFeaturesContent.features` array

```typescript
{
  id: 1,                                            // ← Unique number
  title: "Medical Records Management",              // ← Feature title
  description: "Centralized patient records...",    // ← Short description
  highlights: [                                     // ← Key benefits list
    "Lab reports & prescriptions",
    "Discharge summaries",
    "Secure document sharing",
    // ... more highlights
  ],
  image: "https://...",                            // ← Feature screenshot URL
  color: "bg-blue-50",                             // ← Card background color
}
```

**To change a feature**:
1. Open `/lib/content.ts`
2. Find the feature in `emrFeaturesContent.features` array
3. Update `title`, `description`, `highlights`, and `image`
4. Save → Changes apply instantly

### 💬 Update Testimonials
**File**: `/lib/content.ts` → `testimonialsContent.testimonials` array

```typescript
{
  name: "Dr. Anil Mehta",                           // ← Doctor's name
  role: "Senior Physician",                         // ← Job title
  hospital: "Delhi Medical Center",                 // ← Organization
  quote: "Unidoc has cut our patient...",          // ← Testimonial text
  image: "/testimonial-1.jpg",                      // ← Profile image
}
```

### 💰 Update Pricing Plans
**File**: `/lib/content.ts` → `pricingContent.plans` array

```typescript
{
  name: "Professional",                             // ← Plan name
  description: "For established hospitals...",      // ← Plan description
  price: "₹9,999",                                 // ← Price
  period: "per month",                             // ← Price period
  features: [                                       // ← Feature list
    "Unlimited patient records",
    "Complete EMR suite",
    // ... more features
  ],
  cta: "Start Free Trial",                         // ← Button text
  highlighted: true,                               // ← Is this featured?
}
```

### 🤖 Update AI Capabilities
**File**: `/lib/content.ts` → `aiCapabilitiesContent.capabilities` array

```typescript
{
  icon: "🤖",                                       // ← Emoji icon
  title: "Smart Diagnosis Assistance",              // ← Feature name
  description: "AI-powered insights...",            // ← Description
}
```

### 📱 Update Navigation
**File**: `/lib/content.ts` → `siteConfig` object

```typescript
export const siteConfig = {
  name: "Unidoc",                                   // ← Site name (used in header/footer)
  tagline: "AI-Powered Healthcare EMR Platform",    // ← Tagline
  description: "Transform healthcare delivery...",  // ← Meta description
  primaryColor: "#1b6a52",                         // ← Brand color
  primaryColorHover: "#15544a",                    // ← Hover color
}
```

### 📧 Update Contact Information
**File**: `/lib/content.ts` or `/app/contact/page.tsx`

In `/lib/content.ts`, add a new section:
```typescript
export const contactContent = {
  email: "hello@unidoc.health",
  phone: "+91 (123) 456-7890",
  address: "New Delhi, India",
}
```

Or edit directly in `/app/contact/page.tsx`.

### 🔗 Update Footer Links
**File**: `/lib/content.ts` → `footerContent` object

```typescript
export const footerContent = {
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    // ... more links
  ],
  solutions: [ ... ],
  resources: [ ... ],
  legal: [ ... ],
}
```

---

## File Locations Cheat Sheet

| Content | File | Section |
|---------|------|---------|
| Main title & description | `/lib/content.ts` | `heroContent` |
| Features | `/lib/content.ts` | `emrFeaturesContent.features[]` |
| AI Features | `/lib/content.ts` | `aiCapabilitiesContent.capabilities[]` |
| Testimonials | `/lib/content.ts` | `testimonialsContent.testimonials[]` |
| Pricing Plans | `/lib/content.ts` | `pricingContent.plans[]` |
| Site Name/Colors | `/lib/content.ts` | `siteConfig` |
| Contact Info | `/lib/content.ts` + `/app/contact/page.tsx` | `contactContent` + HTML |
| Blog Posts | `/app/blog/page.tsx` | `blogPosts[]` array |
| About Page | `/app/about/page.tsx` | Component JSX |
| Navigation | `/components/navigation.tsx` | Component JSX |

---

## Images & Media

### Where to Store Images
1. **Local images** → `/public/` folder
   - Examples: `/public/hero-unidoc.jpg`, `/public/logo-unidoc.png`

2. **Screenshots/Feature Images** → Use CDN/Blob URLs
   - Example: `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/...`
   - Update URLs in `/lib/content.ts`

### Updating Feature Screenshots
1. Get new screenshot URL
2. Open `/lib/content.ts`
3. Find feature in `emrFeaturesContent.features[]`
4. Update `image: "new-url"`

---

## Before & After Examples

### Example 1: Change Hero Title
**BEFORE** (in `/lib/content.ts`):
```typescript
title: "Healthcare at Your Fingertips",
```

**AFTER**:
```typescript
title: "Streamline Your Healthcare Operations",
```

**Result**: Hero title updates on homepage instantly ✅

### Example 2: Add New AI Feature
**BEFORE** (in `/lib/content.ts`):
```typescript
capabilities: [
  { icon: "🤖", title: "Smart Diagnosis...", description: "..." },
  { icon: "📊", title: "Predictive Analytics...", description: "..." },
  // ... only 2 features
]
```

**AFTER**:
```typescript
capabilities: [
  { icon: "🤖", title: "Smart Diagnosis...", description: "..." },
  { icon: "📊", title: "Predictive Analytics...", description: "..." },
  { icon: "⚡", title: "Automated Documentation", description: "..." },
  // ... now 3 features!
]
```

**Result**: New AI feature card appears on homepage ✅

### Example 3: Update Pricing Plan
**BEFORE** (in `/lib/content.ts`):
```typescript
{
  name: "Professional",
  price: "₹9,999",
  features: ["Unlimited records", "Complete EMR suite"],
}
```

**AFTER**:
```typescript
{
  name: "Professional",
  price: "₹12,999",  // ← Changed price
  features: [
    "Unlimited records",
    "Complete EMR suite",
    "AI + Custom Models",  // ← New feature
  ],
}
```

**Result**: Pricing page updates with new price and feature ✅

---

## Tips for Success

✅ **Always edit `/lib/content.ts`** - This is the source of truth
✅ **Keep formatting** - Match the existing structure exactly
✅ **Use proper quotes** - Use double quotes for strings
✅ **Check commas** - Each item in arrays needs a comma
✅ **Test locally** - Run `npm run dev` to preview changes
✅ **Commit & push** - Deploy to Vercel with git commit

---

## What You DON'T Need to Edit

❌ **Components** - They read from content.ts automatically
❌ **Styling** - Tailwind CSS is already configured
❌ **Animations** - GSAP animations are pre-built
❌ **Responsiveness** - Mobile design already optimized
❌ **SEO** - Meta tags are in `/app/layout.tsx`

---

## Troubleshooting

### Changes not showing?
1. Save the file
2. Check browser: Hard refresh (Ctrl+Shift+R)
3. Check `/lib/content.ts` - is the change there?
4. Check syntax - missing commas or quotes?

### Styling looks broken?
- Check you didn't delete any JSX from component files
- Verify tailwind classes are correct
- Clear cache and rebuild

### Need help?
- Check `/UNIDOC_TRANSFORMATION.md` for detailed guide
- Review the component files to understand structure
- Search for similar items to understand the pattern

---

**Last Updated**: March 2026
**For Questions**: Refer to UNIDOC_TRANSFORMATION.md
