"use client"

import { useEffect, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

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

      gsap.fromTo(
        "[data-contact-form]",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: "[data-contact-form]",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      gsap.utils.toArray<HTMLElement>("[data-contact-info]").forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      })
    })

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", organization: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-contact-header className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Have questions about Unidoc? Our team is ready to help you transform your healthcare delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div data-contact-info className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 space-y-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-[#1b6a52]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Email</h3>
              <p className="text-gray-600 mt-1">hello@unidoc.health</p>
            </div>
          </div>

          <div data-contact-info className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-[#1b6a52]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Phone</h3>
              <p className="text-gray-600 mt-1">+91 (123) 456-7890</p>
            </div>
          </div>

          <div data-contact-info className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 space-y-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#1b6a52]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Location</h3>
              <p className="text-gray-600 mt-1">India & Southeast Asia</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div data-contact-form className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-12">
            {submitted ? (
              <div className="text-center space-y-4">
                <div className="text-6xl">✓</div>
                <h3 className="text-2xl font-bold text-gray-900">Thank you!</h3>
                <p className="text-gray-600">
                  We've received your message. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-[#1b6a52] focus:bg-white focus:outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-[#1b6a52] focus:bg-white focus:outline-none transition"
                      placeholder="john@hospital.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-[#1b6a52] focus:bg-white focus:outline-none transition"
                      placeholder="+91 (123) 456-7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-[#1b6a52] focus:bg-white focus:outline-none transition"
                      placeholder="Your Hospital"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-[#1b6a52] focus:bg-white focus:outline-none transition resize-none"
                    placeholder="Tell us about your healthcare facility and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group px-8 py-4 bg-[#1b6a52] hover:bg-[#15544a] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-sm text-gray-600">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
