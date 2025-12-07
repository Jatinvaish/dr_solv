"use client"

import { useEffect } from "react"
import gsap from "gsap"
import Link from "next/link"
import Image from "next/image"

export default function DrSolvHero() {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo("[data-hero-title]", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
      .fromTo(
        "[data-hero-tagline]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      )
      .fromTo(
        "[data-hero-story]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      )
      .fromTo(
        "[data-hero-image]",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      )
      .fromTo(
        "[data-hero-cta]",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3",
      )
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div data-hero-title className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
                Every second matters.
                <br />
                <span className="text-[#1B5E7F]">Every life deserves care</span> that responds.
              </h1>
            </div>

            {/* Tagline */}
            <div data-hero-tagline className="space-y-2">
              <p className="text-lg md:text-xl text-gray-700 font-medium">Solving care. Saving lives.</p>
            </div>

            {/* Hero Story */}
            <div data-hero-story className="space-y-4 pt-4">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                In every emergency, chaos takes over — voices shouting, phones ringing, people searching for answers. A
                few seconds decide everything.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                DrSolv was created for those seconds. A wristband that speaks when you can't. A QR code that opens your
                medical story to rescuers. An ecosystem connecting doctors, labs, pharmacies, and insurers so care never
                loses time.
              </p>
            </div>

            {/* CTAs */}
            <div data-hero-cta className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/lab-pharmacy"
                className="px-8 py-3 bg-[#1B5E7F] text-white font-medium rounded-lg transition text-center"
              >
                Explore Lab & Pharmacy
              </Link>
              <Link
                href="/hospital"
                className="px-8 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg transition border border-gray-200 text-center"
              >
                Explore Hospitals
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div data-hero-image className="relative h-96 md:h-full">
            <Image
              src="/hero-healthcare-emergency.jpg"
              alt="Emergency healthcare response with DrSolv"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
