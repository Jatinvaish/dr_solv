"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function Insurance() {
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
                  Redefining healthcare claims —
                  <br />
                  <span className="text-[#1B5E7F]">faster, smarter, transparent</span>
                </h1>
              </div>

              <div data-animate className="space-y-2">
                <p className="text-lg md:text-xl text-gray-600 font-light">
                  A single, verified data source connecting hospitals, patients, and insurers for frictionless claims.
                </p>
              </div>

              <div data-animate className="space-y-4 pt-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  The biggest delays come from missing documents, unverified data, and fragmented communication. DrSolv
                  changes that.
                </p>
              </div>

              <div data-animate className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#"
                  className="px-8 py-3 bg-[#1B5E7F] text-white font-medium rounded-lg transition text-center"
                >
                  Partner with DrSolv
                </Link>
                <Link
                  href="#"
                  className="px-8 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg transition border border-gray-200 text-center"
                >
                  Download Playbook
                </Link>
              </div>
            </div>

            <div data-animate className="relative h-96 md:h-full">
              <Image
                src="/insurance-manager-reviewing-digital-healthcare-cla.jpg"
                alt="Insurance claims dashboard"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              The Challenge —
              <br />
              <span className="text-[#1B5E7F]">"Claims That Start Late and End Later"</span>
            </h2>
          </div>

          <div data-animate className="p-8 bg-white rounded-lg border border-gray-200 mt-8">
            <p className="text-lg text-gray-700 font-light">
              The biggest delays come from missing documents, unverified data, and fragmented communication.
            </p>
            <p className="text-lg text-[#1B5E7F] font-medium mt-4">"It's not inefficiency — it's disconnected data."</p>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl text-[#1B5E7F]">📄</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Missing Documents</h3>
              <p className="text-gray-700 text-sm">Scattered medical records delay claims processing</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl text-[#1B5E7F]">❌</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Unverified Data</h3>
              <p className="text-gray-700 text-sm">Unclear information requires constant follow-ups</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl text-[#1B5E7F]">🔗</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Fragmented Systems</h3>
              <p className="text-gray-700 text-sm">Disconnected communication across providers</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <span className="text-2xl text-[#1B5E7F]">⏱️</span>
              <h3 className="font-medium text-gray-900 mt-3 mb-2">Extended Timelines</h3>
              <p className="text-gray-700 text-sm">Claims take weeks instead of days to settle</p>
            </div>
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
              <span className="text-[#1B5E7F]">"A Single, Verified Source of Truth"</span>
            </h2>
          </div>

          <div data-animate className="p-8 bg-gray-50 rounded-lg border border-gray-200 mt-8">
            <p className="text-lg text-gray-700 font-light mb-6">DrSolv auto-organizes:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-[#1B5E7F] font-bold">✓</span>
                <span className="text-gray-700">Prescriptions</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#1B5E7F] font-bold">✓</span>
                <span className="text-gray-700">Bills</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#1B5E7F] font-bold">✓</span>
                <span className="text-gray-700">Reports</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#1B5E7F] font-bold">✓</span>
                <span className="text-gray-700">Discharge Summaries</span>
              </div>
            </div>
            <p className="text-lg text-[#1B5E7F] font-medium mt-6">"Every claim begins with complete data."</p>
          </div>

          <div data-animate className="grid md:grid-cols-4 gap-6 pt-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200 text-center">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-medium text-gray-900 mb-2">Digital Health Sync</h3>
              <p className="text-gray-700 text-sm">Auto-organized medical records</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 text-center">
              <div className="text-3xl mb-2">✔️</div>
              <h3 className="font-medium text-gray-900 mb-2">AI Verification</h3>
              <p className="text-gray-700 text-sm">Verified and time-stamped</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-medium text-gray-900 mb-2">One-Click Claims</h3>
              <p className="text-gray-700 text-sm">Instant claim initiation</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-medium text-gray-900 mb-2">Real-Time Tracking</h3>
              <p className="text-gray-700 text-sm">Live claim status updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">For Insurers — Measurable Impact</h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="p-8 bg-white rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-[#1B5E7F] mb-2">80%</div>
              <p className="text-gray-700">Fewer missing documents</p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-[#1B5E7F] mb-2">50%</div>
              <p className="text-gray-700">Faster processing time</p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-[#1B5E7F] mb-2">↓</div>
              <p className="text-gray-700">Fraud reduction</p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-[#1B5E7F] mb-2">✓</div>
              <p className="text-gray-700">Better compliance</p>
            </div>
          </div>

          <div data-animate className="p-8 bg-white rounded-lg border border-[#1B5E7F]/20 text-center mt-8">
            <p className="text-lg text-gray-900 font-light">
              <span className="font-medium">"We make insurance humane again."</span>
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Case Insight —
              <br />
              <span className="text-[#1B5E7F]">"The 3-Day Claim"</span>
            </h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-12 items-center pt-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/patient-recovery-healthcare-hospital-discharge-car.jpg"
                alt="Patient recovery story"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-lg text-gray-700 font-light mb-4">
                  A patient's cardiac claim was fully settled in three days thanks to verified auto-organized data.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex gap-3">
                    <span className="text-[#1B5E7F] font-bold">✓</span>
                    <span className="text-gray-700">Complete medical records verified instantly</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#1B5E7F] font-bold">✓</span>
                    <span className="text-gray-700">All bills and reports organized automatically</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#1B5E7F] font-bold">✓</span>
                    <span className="text-gray-700">Claim processed without delays</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-lg border border-[#1B5E7F]/20 text-center">
                <p className="text-lg text-gray-900 font-light">
                  <span className="font-medium">"The paperwork didn't outlast recovery."</span>
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
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Join India's Transparent Health Network</h2>
          </div>

          <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="px-8 py-3 bg-[#1B5E7F] text-white font-medium rounded-lg transition">
              Partner with DrSolv
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg transition border border-gray-200"
            >
              Schedule Integration
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg transition border border-gray-200"
            >
              Download Playbook
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
