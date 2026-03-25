"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { aiCapabilitiesContent } from "@/lib/content"

gsap.registerPlugin(ScrollTrigger)

export default function UnidocAICapabilities() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        "[data-ai-header]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "[data-ai-header]",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )

      // Staggered card animations
      gsap.utils.toArray<HTMLElement>("[data-ai-card]").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-ai-header className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {aiCapabilitiesContent.title}
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            {aiCapabilitiesContent.subtitle}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {aiCapabilitiesContent.capabilities.map((capability, index) => (
            <div
              key={index}
              data-ai-card
              className="group p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#1b6a52] hover:shadow-xl hover:shadow-green-100/20 transition-all duration-300 space-y-4"
            >
              {/* Icon */}
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {capability.icon}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="h-1 w-0 group-hover:w-12 bg-[#1b6a52] transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
