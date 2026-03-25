"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { siteConfig } from "@/lib/content"

gsap.registerPlugin(ScrollTrigger)

const blogPosts = [
  {
    id: 1,
    title: "5 Ways AI is Transforming Healthcare Records Management",
    excerpt: "Discover how artificial intelligence is revolutionizing how healthcare professionals manage patient records and make clinical decisions.",
    category: "Healthcare Technology",
    date: "March 20, 2026",
    readTime: "5 min read",
    slug: "ai-transforming-healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    title: "HIPAA Compliance Made Easy: The Unidoc Approach",
    excerpt: "Learn how Unidoc ensures your patient data is secure while maintaining full HIPAA compliance and regulatory requirements.",
    category: "Compliance",
    date: "March 15, 2026",
    readTime: "6 min read",
    slug: "hipaa-compliance",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70674c90?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Reducing Documentation Time: Real Results from Healthcare Leaders",
    excerpt: "See how hospitals and clinics are cutting documentation time by 70% while improving care quality using intelligent EMR systems.",
    category: "Case Studies",
    date: "March 10, 2026",
    readTime: "7 min read",
    slug: "reducing-documentation-time",
    image: "https://images.unsplash.com/photo-1606824842980-ce3accd49c3c?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    title: "ABDM Integration: Unlocking Seamless Healthcare Data Sharing",
    excerpt: "Understand how ABDM integration enables secure, standardized health information exchange across the healthcare ecosystem.",
    category: "Healthcare Systems",
    date: "March 5, 2026",
    readTime: "5 min read",
    slug: "abdm-integration",
    image: "https://images.unsplash.com/photo-1579154204601-01d430e00993?w=800&h=500&fit=crop",
  },
  {
    id: 5,
    title: "The Future of Clinical Communication: Real-Time Collaboration",
    excerpt: "Explore how secure, instant communication between doctors, staff, and patients is improving care delivery and patient satisfaction.",
    category: "Healthcare Technology",
    date: "February 28, 2026",
    readTime: "6 min read",
    slug: "clinical-communication",
    image: "https://images.unsplash.com/photo-1532587191512-496282f982fc?w=800&h=500&fit=crop",
  },
  {
    id: 6,
    title: "Predictive Analytics in Healthcare: Anticipating Patient Needs",
    excerpt: "Learn how AI-powered predictive analytics help healthcare professionals identify high-risk patients and intervene early.",
    category: "AI & Analytics",
    date: "February 23, 2026",
    readTime: "7 min read",
    slug: "predictive-analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
]

export default function BlogPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-blog-card]").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.08,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      })

      gsap.fromTo(
        "[data-blog-header]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "[data-blog-header]",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div data-blog-header className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            {siteConfig.name} Insights
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            Healthcare technology trends, best practices, and real-world insights from healthcare professionals
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                data-blog-card
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-[#1b6a52] hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 bg-green-50 text-[#1b6a52] text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1b6a52] transition">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-700 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-600">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#1b6a52] font-semibold hover:gap-2 transition flex items-center gap-1"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b6a52] to-[#0f4a37]">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Updated on Healthcare Innovation
            </h2>
            <p className="text-lg text-green-50 font-medium">
              Get the latest insights, best practices, and healthcare technology trends delivered to your inbox
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-[#1b6a52] font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-green-100">
            No spam. Just healthcare insights that matter.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
