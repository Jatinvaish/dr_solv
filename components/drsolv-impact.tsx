"use client"

import { useEffect } from "react"
import gsap from "gsap"
import Image from "next/image"

export default function DrSolvImpact() {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>("[data-stat-card]").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    })
  }, [])

  const stats = [
    { number: "50K+", label: "Lives Connected", icon: "👥" },
    { number: "10 Sec", label: "Emergency Data Access", icon: "⚡" },
    { number: "30%", label: "Faster Diagnosis", icon: "📊" },
    { number: "99.9%", label: "Data Security", icon: "🔒" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/global-healthcare-impact.jpg"
              alt="DrSolv global healthcare impact"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div data-animate className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Building a
                <br />
                <span className="text-[#1B5E7F]">healthier tomorrow.</span>
              </h2>
              <p className="text-lg text-gray-700 font-medium">
                DrSolv is transforming how healthcare systems think about data, access, and care delivery worldwide.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} data-stat-card className="p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-3xl font-light text-[#1B5E7F]">{stat.number}</p>
                  <p className="text-sm text-gray-700 mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
