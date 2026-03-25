"use client"

import { useEffect } from "react"
import gsap from "gsap"
import Link from "next/link"
import Image from "next/image"
import { heroContent } from "@/lib/content"

export default function UnidocHero() {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      "[data-hero-badge]",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    )
      .fromTo(
        "[data-hero-title]",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3",
      )
      .fromTo(
        "[data-hero-subtitle]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      )
      .fromTo(
        "[data-hero-description]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      )
      .fromTo(
        "[data-hero-cta]",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 },
        "-=0.3",
      )
      .fromTo(
        "[data-hero-image]",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      )

    // Floating animation for image
    gsap.to("[data-hero-image]", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div data-hero-badge className="inline-block">
              <span className="px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700">
                ✨ AI-Powered Healthcare EMR
              </span>
            </div>

            {/* Main Headline */}
            <div data-hero-title className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {heroContent.title}
                <br />
                <span className="text-[#1b6a52]">{heroContent.titleHighlight}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div data-hero-subtitle className="space-y-2">
              <p className="text-lg md:text-xl text-gray-700 font-medium">{heroContent.subtitle}</p>
            </div>

            {/* Hero Story */}
            <div data-hero-description className="space-y-4 pt-4">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {heroContent.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={heroContent.cta1Link}
                data-hero-cta
                className="px-8 py-3 bg-[#1b6a52] hover:bg-[#15544a] text-white font-medium rounded-lg transition text-center"
              >
                {heroContent.cta1}
              </Link>
              <Link
                href={heroContent.cta2Link}
                data-hero-cta
                className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition border border-gray-200 text-center"
              >
                {heroContent.cta2}
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div data-hero-image className="relative h-96 md:h-full">
            <Image
              src="/hero-unidoc.jpg"
              alt="Unidoc Healthcare EMR Platform"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
