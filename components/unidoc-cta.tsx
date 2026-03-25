"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { ctaContent } from "@/lib/content"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function UnidocCTA() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cta-content]",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "[data-cta-content]",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b6a52] to-[#0f4a37]">
      <div className="max-w-4xl mx-auto">
        <div data-cta-content className="text-center space-y-8">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {ctaContent.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-green-50 font-medium max-w-2xl mx-auto">
            {ctaContent.description}
          </p>

          {/* CTA Button */}
          <Link href={ctaContent.buttonLink}>
            <button className="group px-8 py-4 bg-white text-[#1b6a52] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl hover:shadow-black/20">
              {ctaContent.buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          {/* Subtext */}
          <p className="text-sm text-green-100">{ctaContent.subtext}</p>
        </div>
      </div>
    </section>
  )
}
