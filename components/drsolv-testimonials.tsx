"use client"

import { useEffect } from "react"
import gsap from "gsap"
import Image from "next/image"

export default function DrSolvTestimonials() {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>("[data-testimonial]").forEach((card, index) => {
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

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Emergency Medicine Specialist",
      quote:
        "DrSolv has revolutionized how we approach emergency care. Critical information at the tap of a QR code has saved precious minutes.",
      image: "/doctor-testimonial-1.jpg",
    },
    {
      name: "Priya Sharma",
      title: "Patient",
      quote:
        "For years, I carried scattered medical records. DrSolv gave me peace of mind. My entire health story is secure and accessible.",
      image: "/patient-testimonial-1.jpg",
    },
    {
      name: "Amit Patel",
      title: "Insurance Administrator",
      quote:
        "Processing claims is now streamlined. Documents are auto-organized, and we can approve claims faster than ever before.",
      image: "/admin-testimonial-1.jpg",
    },
    {
      name: "Dr. Anjali Verma",
      title: "Hospital Administrator",
      quote:
        "Integration with DrSolv has reduced patient admission time by 40%. Our staff is more efficient, and patients get better care faster.",
      image: "/hospital-admin-testimonial.jpg",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-animate className="space-y-3 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Trusted by
            <br />
            <span className="text-[#1B5E7F]">doctors, patients & institutions.</span>
          </h2>
          <p className="text-lg text-gray-700 font-medium mt-4">
            Real voices. Real impact. Real transformation in healthcare.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} data-testimonial className="p-6 bg-gray-50 rounded-lg border border-gray-200 space-y-4">
              {/* Avatar */}
              <div className="relative w-12 h-12">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-700 leading-relaxed italic font-medium">"{testimonial.quote}"</p>

              {/* Name & Title */}
              <div className="pt-4 border-t border-gray-200">
                <p className="font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-700 mt-1 font-medium">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
