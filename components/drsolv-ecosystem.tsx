"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: "Emergency QR",
    description: "A small square. A vast safety net.",
    details:
      "Scan the QR during emergencies to instantly access blood group, allergies, conditions, and emergency contacts.",
    quote: "Even when you can't speak, your data will.",
    image: "/qr-emergency.jpg",
  },
  {
    title: "Data Vault & AI Summaries",
    description: "Secure storage for medical records, auto-summarized into clear, doctor-ready insights.",
    quote: "No paper trails. No searching. Just clarity.",
    image: "/data-vault-ai.jpg",
  },
  {
    title: "Smart Consultations",
    description: "Aligns your records, symptoms, and schedule with doctors who can actually help.",
    quote: "Punctuality isn't courtesy — it's care.",
    image: "/smart-consultation.jpg",
  },
  {
    title: "Smart Lab Finder",
    description: "Find top-rated labs nearby or book home collection. Results auto-sync.",
    quote: "Care shouldn't need coordination.",
    image: "/lab-finder.jpg",
  },
  {
    title: "Pharmacy & Medicine Locator",
    description: "Converts prescriptions into a map — find open pharmacies or order online.",
    quote: "When health falters, medicine shouldn't be out of reach.",
    image: "/pharmacy-locator.jpg",
  },
  {
    title: "Insurance Simplified",
    description: "Claims, policies, and documents auto-organized behind the scenes.",
    quote: "You focus on recovery. We'll handle the rest.",
    image: "/insurance-simplified.jpg",
  },
]

export default function DrSolvEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>("[data-feature-card]")

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
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
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-animate className="space-y-3 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            One network.
            <br />
            <span className="text-[#1B5E7F]">A thousand better outcomes.</span>
          </h2>
          <p className="text-lg text-gray-700 font-medium max-w-2xl">
            DrSolv isn't just a product — it's a living healthcare infrastructure that listens, learns, and responds.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} data-feature-card className="overflow-hidden border border-gray-200 rounded-lg">
              <div className="relative h-48">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-700 font-medium">{feature.description}</p>
                {feature.details && <p className="text-sm text-gray-700 font-medium">{feature.details}</p>}
                <p className="text-sm italic text-[#1B5E7F] pt-4 border-t border-gray-200">{feature.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
