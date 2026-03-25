"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Image from "next/image"
import { emrFeaturesContent } from "@/lib/content"
import { ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function UnidocFeaturesSticky() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFeature, setActiveFeature] = useState(0)
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        "[data-features-header]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "[data-features-header]",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )

      // Sticky scroll animation for feature images
      const features = gsap.utils.toArray<HTMLElement>("[data-feature-item]")
      features.forEach((feature, index) => {
        gsap.fromTo(
          feature,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: feature,
              start: "top 50%",
              end: "bottom 50%",
              onEnter: () => setActiveFeature(index),
              onEnterBack: () => setActiveFeature(index),
              toggleActions: "play none none none",
            },
          },
        )
      })

      // Animate accordion items on scroll
      gsap.utils.toArray<HTMLElement>("[data-accordion-item]").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-features-header className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {emrFeaturesContent.title}
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            {emrFeaturesContent.subtitle}
          </p>
        </div>

        {/* Sticky Scroll Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left: Feature List */}
          <div className="space-y-4">
            {emrFeaturesContent.features.map((feature, index) => (
              <div
                key={feature.id}
                data-feature-item
                onClick={() => setActiveFeature(index)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? "border-[#1b6a52] bg-green-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <h3 className={`text-lg font-semibold ${
                  activeFeature === index ? "text-[#1b6a52]" : "text-gray-900"
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm mt-2 ${
                  activeFeature === index ? "text-gray-700" : "text-gray-600"
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Feature Image / Content (Sticky) */}
          <div className="sticky top-20 h-96 md:h-auto">
            {emrFeaturesContent.features[activeFeature] && (
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={emrFeaturesContent.features[activeFeature].image}
                  alt={emrFeaturesContent.features[activeFeature].title}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}
          </div>
        </div>

        {/* Interactive Accordion Section */}
        <div className="mt-20 border-t-2 border-gray-200 pt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Detailed Feature Breakdown
          </h3>

          <div className="space-y-4 max-w-4xl mx-auto">
            {emrFeaturesContent.features.map((feature, index) => (
              <div
                key={feature.id}
                data-accordion-item
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#1b6a52]/30 transition"
              >
                <button
                  onClick={() =>
                    setExpandedAccordion(expandedAccordion === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition"
                >
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1b6a52] transition-transform ${
                      expandedAccordion === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedAccordion === index && (
                  <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200 animate-in fade-in duration-200">
                    <p className="text-gray-700 mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-900">Key Capabilities:</h5>
                      <ul className="space-y-2">
                        {feature.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className="text-[#1b6a52] font-bold mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
