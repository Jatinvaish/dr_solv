"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { testimonialsContent } from "@/lib/content"
import { Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function UnidocTestimonials() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        "[data-testimonials-header]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "[data-testimonials-header]",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )

      // Staggered testimonial animations
      gsap.utils.toArray<HTMLElement>("[data-testimonial-card]").forEach(
        (card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.15,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            },
          )
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-testimonials-header className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {testimonialsContent.title}
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            {testimonialsContent.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-testimonial-card
              className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-[#1b6a52]/50 hover:shadow-xl transition-all duration-300 space-y-6"
            >
              {/* Star Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed text-lg italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-[#1b6a52] font-medium">
                  {testimonial.hospital}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
