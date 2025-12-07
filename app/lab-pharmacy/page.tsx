"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function LabPharmacy() {
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
                  Connecting diagnostics and medicine
                  <br />
                  <span className="text-[#1B5E7F]">to the future of care</span>
                </h1>
              </div>

              <div data-animate className="space-y-2">
                <p className="text-lg md:text-xl text-gray-600 font-light">
                  DrSolv unifies patients, labs, and pharmacies into one seamless care workflow.
                </p>
              </div>

              <div data-animate className="space-y-4 pt-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  Patients must search for labs, then pharmacies, then delivery options — each unlinked. Labs and
                  pharmacies work in isolated systems. DrSolv changes that.
                </p>
              </div>

              <div data-animate className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#"
                  className="px-8 py-3 bg-[#1B5E7F] text-white font-medium rounded-lg transition text-center"
                >
                  Join Partner Network
                </Link>
                <Link
                  href="#"
                  className="px-8 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg transition border border-gray-200 text-center"
                >
                  Get Certified
                </Link>
              </div>
            </div>

            <div data-animate className="relative h-96 md:h-full">
              <Image
                src="/lab-technician-pharmacy-medicine-diagnostic-health.jpg"
                alt="Lab and pharmacy connected care"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              The Problem —
              <br />
              <span className="text-[#1B5E7F]">"Disconnected, Delayed, Disjointed"</span>
            </h2>
          </div>

          <div data-animate className="p-8 bg-white rounded-lg border border-gray-200 mt-8">
            <p className="text-lg text-gray-700 font-light mb-4">
              Patients search for labs, then pharmacies, then delivery options — each unlinked. Labs and pharmacies work
              in isolated systems.
            </p>
            <p className="text-lg text-[#1B5E7F] font-medium">
              "Healthcare shouldn't end with a prescription. It should begin with action."
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              The Solution —
              <br />
              <span className="text-[#1B5E7F]">"One Network. Infinite Connection"</span>
            </h2>
          </div>

          <div data-animate className="p-8 bg-gray-50 rounded-lg border border-gray-200 mt-8">
            <p className="text-lg text-gray-700 font-light mb-6">DrSolv syncs:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-[#1B5E7F] font-bold">✓</span>
                <span className="text-gray-700">Lab test bookings</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#1B5E7F] font-bold">✓</span>
                <span className="text-gray-700">Verified prescriptions</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#1B5E7F] font-bold">✓</span>
                <span className="text-gray-700">Stock availability</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#1B5E7F] font-bold">✓</span>
                <span className="text-gray-700">Result sharing</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#1B5E7F] font-bold">✓</span>
                <span className="text-gray-700">Delivery partners</span>
              </div>
            </div>
            <p className="text-lg text-[#1B5E7F] font-medium mt-6">
              "From diagnosis to delivery — one uninterrupted line of care."
            </p>
          </div>
        </div>
      </section>

      {/* For Labs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">For Diagnostic Labs</h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl">📋</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Authenticated Test Requests</h3>
              <p className="text-gray-700 text-sm">Receive verified test orders from connected providers</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl">🏠</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Home Collection Services</h3>
              <p className="text-gray-700 text-sm">Offer convenient sample collection at patient locations</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl">⚡</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Instant Result Sharing</h3>
              <p className="text-gray-700 text-sm">Sync results immediately with the care team</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl">🔍</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Improved Local Discovery</h3>
              <p className="text-gray-700 text-sm">Increase visibility in patient and provider networks</p>
            </div>
          </div>

          <div data-animate className="p-8 bg-white rounded-lg border border-[#1B5E7F]/20 text-center mt-8">
            <p className="text-lg text-gray-900 font-light">
              <span className="font-medium">"Every test result is a step closer to timely treatment."</span>
            </p>
          </div>
        </div>
      </section>

      {/* For Pharmacies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">For Pharmacies</h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-2xl">💊</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Verified e-Prescriptions</h3>
              <p className="text-gray-700 text-sm">Receive authentic prescriptions from connected doctors</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-2xl">📊</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Real-Time Inventory Visibility</h3>
              <p className="text-gray-700 text-sm">Maintain stock levels automatically synced across network</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-2xl">🚚</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">One-Click Ordering & Delivery</h3>
              <p className="text-gray-700 text-sm">Streamlined fulfillment with integrated delivery partners</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-2xl">🤝</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Join Trusted Network</h3>
              <p className="text-gray-700 text-sm">Build credibility and patient loyalty within the ecosystem</p>
            </div>
          </div>

          <div data-animate className="p-8 bg-white rounded-lg border border-[#1B5E7F]/20 text-center mt-8">
            <p className="text-lg text-gray-900 font-light">
              <span className="font-medium">"When medication arrives faster, recovery begins sooner."</span>
            </p>
          </div>
        </div>
      </section>

      {/* Partner Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Partner Advantages</h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-6 pt-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl">✔️</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Verified Patient Data</h3>
              <p className="text-gray-700 text-sm">Accurate information for better service delivery</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl">💳</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Integrated Billing</h3>
              <p className="text-gray-700 text-sm">Seamless insurance processing and payments</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl">⭐</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Improved Loyalty</h3>
              <p className="text-gray-700 text-sm">Build lasting patient relationships</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl">⚙️</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Operational Efficiency</h3>
              <p className="text-gray-700 text-sm">Reduce manual work and errors</p>
            </div>
          </div>

          <div data-animate className="p-8 bg-white rounded-lg border border-[#1B5E7F]/20 text-center mt-8">
            <p className="text-lg text-gray-900 font-light">
              <span className="font-medium">"Integration isn't an upgrade — it's survival."</span>
            </p>
          </div>
        </div>
      </section>

      {/* Case Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Case Story —
              <br />
              <span className="text-[#1B5E7F]">"A Connected Morning"</span>
            </h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-12 items-center pt-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/patient-receiving-medicine-pharmacy-delivery-healt.jpg"
                alt="Seamless integrated care"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-lg text-gray-700 font-light mb-4">
                  One ecosystem enabled test → doctor review → prescription update → medicine delivery in a single day.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex gap-3">
                    <span className="text-[#1B5E7F] font-bold">✓</span>
                    <span className="text-gray-700">Patient books lab test</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#1B5E7F] font-bold">✓</span>
                    <span className="text-gray-700">Results instantly shared with doctor</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#1B5E7F] font-bold">✓</span>
                    <span className="text-gray-700">Doctor adjusts prescription if needed</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#1B5E7F] font-bold">✓</span>
                    <span className="text-gray-700">Pharmacy receives prescription and delivers medicine</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-lg border border-[#1B5E7F]/20 text-center">
                <p className="text-lg text-gray-900 font-light">
                  <span className="font-medium">"One day, one system, one care story."</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div data-animate>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Be Part of the Network That Never Sleeps</h2>
          </div>

          <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="px-8 py-3 bg-[#1B5E7F] text-white font-medium rounded-lg transition">
              Join Partner Network
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg transition border border-gray-200"
            >
              Integrate My System
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg transition border border-gray-200"
            >
              Get Certified
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
