"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { siteConfig } from "@/lib/content"
import { Mail, Phone, MapPin } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-contact-header]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "[data-contact-header]",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )

      gsap.utils.toArray<HTMLElement>("[data-contact-form]").forEach((form) => {
        gsap.fromTo(
          form,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: form,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div data-contact-header className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            Have questions about {siteConfig.name}? We'd love to hear from you. Our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700">
                <a href="mailto:support@unidoc.health" className="text-blue-600 hover:text-blue-700 font-medium">
                  support@unidoc.health
                </a>
              </p>
              <p className="text-gray-600 text-sm mt-2">We respond within 2 hours</p>
            </div>

            {/* Phone */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 text-center">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-700">
                <a href="tel:+919876543210" className="text-green-600 hover:text-green-700 font-medium">
                  +91 (987) 654-3210
                </a>
              </p>
              <p className="text-gray-600 text-sm mt-2">24/7 for emergencies</p>
            </div>

            {/* Address */}
            <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 text-center">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-700 text-sm">
                Unidoc Healthcare Solutions<br />
                New Delhi, India
              </p>
              <p className="text-gray-600 text-sm mt-2">Regional offices worldwide</p>
            </div>
          </div>

          {/* Contact Form */}
          <div data-contact-form className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1b6a52] transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1b6a52] transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1b6a52] transition"
                  placeholder="Hospital / Clinic / Lab / Other"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Organization Type *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1b6a52] transition"
                >
                  <option value="">Select an option</option>
                  <option value="hospital">Hospital</option>
                  <option value="clinic">Clinic</option>
                  <option value="lab">Laboratory</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="insurance">Insurance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1b6a52] transition"
                  placeholder="+91 (987) 654-3210"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1b6a52] transition"
                >
                  <option value="">Select a subject</option>
                  <option value="demo">Request a Demo</option>
                  <option value="pricing">Pricing Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1b6a52] transition resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#1b6a52] hover:bg-[#15544a] text-white font-bold rounded-lg transition"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-600 text-center">
                We respect your privacy. Read our{" "}
                <a href="/privacy" className="text-[#1b6a52] hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b6a52] to-[#0f4a37]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">
            Not ready to chat? Start with a free trial.
          </h2>
          <p className="text-lg text-green-50 font-medium">
            14 days free. No credit card required. Full access to all features.
          </p>
          <button className="px-8 py-3 bg-white text-[#1b6a52] font-semibold rounded-lg hover:bg-gray-100 transition">
            Start Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
