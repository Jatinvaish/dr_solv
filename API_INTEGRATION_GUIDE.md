# API Integration Guide - Contact Forms & Email

## Overview

The contact and footer forms currently submit but don't have backend integration. This guide shows how to add:
- Email notifications when someone submits a form
- Database storage of submissions
- Automated responses to users

## Option 1: Vercel KV + SendGrid (Recommended)

### Setup

1. **Install dependencies**:
```bash
npm install @vercel/kv resend
```

2. **Add environment variables** in `.env.local`:
```env
KV_URL=your_kv_database_url
KV_REST_API_TOKEN=your_kv_api_token
RESEND_API_KEY=your_resend_api_key
```

3. **Create API route** `/app/api/contact/route.ts`:

```typescript
import { kv } from "@vercel/kv"
import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, organization, subject, message, phone, type } = await req.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Store in database
    const submissionId = `submission:${Date.now()}`
    await kv.hset(submissionId, {
      name,
      email,
      organization,
      subject,
      message,
      phone: phone || "Not provided",
      type: type || "contact",
      submittedAt: new Date().toISOString(),
      status: "new",
    })

    // Set expiration (30 days)
    await kv.expire(submissionId, 30 * 24 * 60 * 60)

    // Send notification email to your team
    await resend.emails.send({
      from: "noreply@yourdomain.com",
      to: "contact@yourdomain.com",
      subject: `New ${type === "contact" ? "Contact" : "Newsletter"} Submission: ${subject}`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        <p style="margin-top: 20px; color: #999; font-size: 12px;">
          Submitted at: ${new Date().toISOString()}
        </p>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: "noreply@yourdomain.com",
      to: email,
      subject: "We received your message",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you within 2 hours.</p>
        <p>In the meantime, feel free to explore our platform or check out our documentation.</p>
        <p>Best regards,<br />The Unidoc Team</p>
      `,
    })

    return NextResponse.json(
      { success: true, submissionId },
      { status: 200 }
    )
  } catch (error) {
    console.error("Form submission error:", error)
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    )
  }
}
```

### Update Contact Form

Edit `/app/contact/page.tsx` form submission:

```typescript
async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  
  const formData = new FormData(e.currentTarget)
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    organization: formData.get("organization"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    phone: formData.get("phone"),
    type: "contact",
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      alert("Message sent successfully!")
      e.currentTarget.reset()
    } else {
      alert("Failed to send message. Please try again.")
    }
  } catch (error) {
    console.error("Error:", error)
    alert("An error occurred. Please try again.")
  }
}
```

## Option 2: Firebase + Nodemailer

### Setup

1. **Install dependencies**:
```bash
npm install firebase nodemailer
```

2. **Create API route** `/app/api/submit-form/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "firebase/firestore"

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Setup email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use app-specific password
  },
})

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Save to Firestore
    await addDoc(collection(db, "submissions"), {
      ...data,
      submittedAt: new Date(),
      status: "new",
    })

    // Send notification email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "your-email@yourdomain.com",
      subject: `New Form Submission: ${data.subject}`,
      html: `
        <h2>New Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Organization:</strong> ${data.organization}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br />")}</p>
      `,
    })

    // Send confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "We received your message - Unidoc",
      html: `
        <h2>Thank you!</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your message and will respond within 2 hours.</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    )
  }
}
```

## Option 3: Supabase

### Setup

1. **Install Supabase client**:
```bash
npm install @supabase/supabase-js
```

2. **Create table in Supabase**:
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);
```

3. **Create API route** `/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Save to Supabase
    const { data: submission, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: data.name,
          email: data.email,
          organization: data.organization,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          type: data.type || "contact",
        },
      ])

    if (error) throw error

    // TODO: Send emails using your email service

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    )
  }
}
```

## Complete Contact Form Component Example

```typescript
"use client"

import { FormEvent, useState } from "react"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        organization: formData.get("organization"),
        phone: formData.get("phone"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        type: "contact",
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        e.currentTarget.reset()
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert("Failed to send message")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 border-2 border-green-200 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-green-900 mb-2">
          Message sent successfully!
        </h3>
        <p className="text-green-700">
          We'll get back to you within 2 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields same as before */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-lg font-bold transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#1b6a52] hover:bg-[#15544a] text-white"
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
```

## Newsletter Subscription Integration

For the footer newsletter subscription, create `/app/api/newsletter/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server"
import { kv } from "@vercel/kv"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const existing = await kv.get(`newsletter:${email}`)
    if (existing) {
      return NextResponse.json(
        { error: "Already subscribed" },
        { status: 400 }
      )
    }

    // Save subscription
    await kv.set(`newsletter:${email}`, {
      subscribedAt: new Date().toISOString(),
      status: "active",
    })

    // Send welcome email
    await resend.emails.send({
      from: "noreply@yourdomain.com",
      to: email,
      subject: "Welcome to Unidoc Insights",
      html: `
        <h2>Welcome!</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You'll receive the latest healthcare technology insights and best practices in your inbox.</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    )
  }
}
```

## Environment Variables Needed

Depending on your chosen method:

```env
# Resend (Email)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Vercel KV
KV_URL=redis://...
KV_REST_API_TOKEN=...

# Firebase
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...

# Nodemailer
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Supabase
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

## Testing

1. Test locally with `npm run dev`
2. Check API routes at `/api/contact`
3. Verify environment variables are loaded
4. Test form submission

## Production Deployment

1. Add environment variables to Vercel project settings
2. Deploy to production
3. Test forms on production domain
4. Monitor API route logs in Vercel dashboard

---

Choose the option that best fits your tech stack. Resend + Vercel KV is recommended for Next.js/Vercel deployments.
