"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function Individuals() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: element,
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
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div data-animate className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight">
                  Your health data,
                  <br />
                  <span className="text-[#1B5E7F]">always at hand</span>
                </h1>
              </div>

              <div data-animate className="space-y-2">
                <p className="text-lg md:text-xl text-gray-600 font-light">
                  Carry your complete medical history on a wristband QR code. Verified, secure, always accessible when
                  you need it most.
                </p>
              </div>

              <div data-animate className="space-y-4 pt-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  Healthcare shouldn't be scattered. Your medications, allergies, blood type, past surgeries —
                  everything that matters should be one scan away. DrSolv gives you that peace of mind.
                </p>
              </div>

              <div data-animate className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#"
                  className="px-8 py-3 bg-[#1B5E7F] text-white font-medium rounded-lg transition text-center"
                >
                  Get Your Wristband
                </Link>
                <Link
                  href="#"
                  className="px-8 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg transition border border-gray-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div data-animate className="relative h-96 md:h-full">
              <Image
                src="/person-wearing-medical-wristband-healthcare-wellne.jpg"
                alt="Person with medical wristband"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">How It Works</h2>
          </div>

          <div data-animate className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#1B5E7F] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-medium text-gray-900 mb-2 text-lg">Create Your Profile</h3>
              <p className="text-gray-700 text-sm">
                Add your medical information securely and verify it with your doctor
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#1B5E7F] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-medium text-gray-900 mb-2 text-lg">Wear Your Wristband</h3>
              <p className="text-gray-700 text-sm">Receive your wristband with a unique QR code</p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#1B5E7F] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-medium text-gray-900 mb-2 text-lg">Be Protected</h3>
              <p className="text-gray-700 text-sm">Healthcare providers scan your code anytime, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">What's On Your Wristband</h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex gap-4 items-start">
                  <span className="text-[#1B5E7F] text-2xl">💊</span>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Medications & Allergies</h3>
                    <p className="text-gray-700 text-sm">Current medications, dosages, and all allergies</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex gap-4 items-start">
                  <span className="text-[#1B5E7F] text-2xl">🩸</span>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Blood Type & Conditions</h3>
                    <p className="text-gray-700 text-sm">
                      Blood type and chronic conditions like diabetes or hypertension
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex gap-4 items-start">
                  <span className="text-[#1B5E7F] text-2xl">📋</span>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Medical History</h3>
                    <p className="text-gray-700 text-sm">Past surgeries, procedures, and relevant medical history</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex gap-4 items-start">
                  <span className="text-[#1B5E7F] text-2xl">👥</span>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Emergency Contacts</h3>
                    <p className="text-gray-700 text-sm">Family members and emergency contacts</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex gap-4 items-start">
                  <span className="text-[#1B5E7F] text-2xl">🏥</span>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Insurance Information</h3>
                    <p className="text-gray-700 text-sm">Insurance details for seamless billing</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex gap-4 items-start">
                  <span className="text-[#1B5E7F] text-2xl">🔐</span>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Full Privacy Control</h3>
                    <p className="text-gray-700 text-sm">You control who sees your information, always</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Why People Choose DrSolv</h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-6 pt-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] text-2xl">⚡</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Peace of Mind</h3>
                  <p className="text-gray-700 text-sm">
                    Know that your medical information is always safe and accessible
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] text-2xl">🔒</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Complete Privacy</h3>
                  <p className="text-gray-700 text-sm">Hospital-grade encryption, no third-party data sharing</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] text-2xl">💬</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Better Care Coordination</h3>
                  <p className="text-gray-700 text-sm">
                    Doctors have accurate information for better treatment decisions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] text-2xl">✅</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Emergency Ready</h3>
                  <p className="text-gray-700 text-sm">Critical information available immediately during emergencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div data-animate>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Take Control of Your Health Data</h2>
          </div>

          <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="px-8 py-3 bg-[#1B5E7F] text-white font-medium rounded-lg transition">
              Get Your Wristband
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg transition border border-gray-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
