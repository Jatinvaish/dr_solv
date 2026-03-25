"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { problemContent } from "@/lib/content"

gsap.registerPlugin(ScrollTrigger)

export default function UnidocProblem() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate problem cards on scroll
      gsap.utils.toArray<HTMLElement>("[data-problem-card]").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      })

      // Stagger animation on header
      gsap.fromTo(
        "[data-problem-header]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "[data-problem-header]",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-problem-header className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {problemContent.title}
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            {problemContent.subtitle}
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problemContent.problems.map((problem) => (
            <div
              key={problem.id}
              data-problem-card
              className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-[#1b6a52]/30 hover:shadow-lg transition"
            >
              <div className="space-y-4">
                <div className="text-5xl">{problem.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
                <p className="text-gray-700 leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
