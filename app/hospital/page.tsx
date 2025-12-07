"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function Hospital() {
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
            {/* Left Content */}
            <div className="space-y-8">
              <div data-animate className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight">
                  When minutes matter,
                  <br />
                  <span className="text-[#1B5E7F]">data should arrive first</span>
                </h1>
              </div>

              <div data-animate className="space-y-2">
                <p className="text-lg md:text-xl text-gray-600 font-light">
                  Real-time emergency data, patient history, and connected care — instantly accessible in your hospital
                  workflow.
                </p>
              </div>

              <div data-animate className="space-y-4 pt-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  Hospitals often receive unconscious or unidentified patients. No history. No files. No clarity.
                  Treatment begins with guesswork — delaying life-saving decisions.
                </p>
              </div>

              <div data-animate className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/hospital"
                  className="px-8 py-3 bg-[#1B5E7F] text-white font-medium rounded-lg transition text-center"
                >
                  Schedule a Demo
                </Link>
                <Link
                  href="/hospital"
                  className="px-8 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg transition border border-gray-200 text-center"
                >
                  Download Guide
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div data-animate className="relative h-96 md:h-full">
              <Image
                src="/doctor-scanning-patient-qr-code-emergency-hospital.jpg"
                alt="Doctor scanning patient QR"
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
              <span className="text-[#1B5E7F]">"Unknown Patients. Unavailable Data."</span>
            </h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="p-8 bg-white rounded-lg border border-[#1B5E7F]/20">
              <p className="text-lg font-medium text-gray-900 mb-3">The Problem</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#1B5E7F]">•</span>
                  <span>Hospitals often receive unconscious or unidentified patients</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B5E7F]">•</span>
                  <span>No history. No files. No clarity.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B5E7F]">•</span>
                  <span>Treatment begins with guesswork</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B5E7F]">•</span>
                  <span>Critical delays in life-saving decisions</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-lg border border-red-200">
              <p className="text-lg font-medium text-gray-900 mb-3 text-[#1B5E7F]">
                "We built DrSolv so hospitals never treat a stranger again."
              </p>
              <p className="text-gray-700">
                Every second counts in an emergency. Data that arrives on time can mean the difference between life and
                death.
              </p>
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
              <span className="text-[#1B5E7F]">"Emergency Data That Travels Faster Than Ambulances"</span>
            </h2>
          </div>

          <div data-animate className="p-8 bg-gray-50 rounded-lg border border-[#1B5E7F]/20">
            <p className="text-lg text-gray-700 font-light mb-6">A single QR scan reveals:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] font-bold mt-1">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Allergies & Chronic Conditions</p>
                  <p className="text-sm text-gray-600">Complete medical history at a glance</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] font-bold mt-1">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Blood Group & Medications</p>
                  <p className="text-sm text-gray-600">Critical treatment information</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] font-bold mt-1">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Prior Procedures</p>
                  <p className="text-sm text-gray-600">Complete surgical and treatment history</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] font-bold mt-1">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Emergency Contacts & Insurance</p>
                  <p className="text-sm text-gray-600">Everything needed for immediate action</p>
                </div>
              </div>
            </div>
          </div>

          <div data-animate className="p-8 bg-white rounded-lg border border-[#1B5E7F]/20 text-center">
            <p className="text-lg text-gray-900 font-light">
              <span className="font-medium">"From triage to treatment — zero delay, full context."</span>
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Hospital Dashboard —
              <br />
              <span className="text-[#1B5E7F]">"Your Digital Emergency Assistant"</span>
            </h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#1B5E7F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Instant Patient Profiles</h3>
              <p className="text-gray-700">Complete medical information accessible in seconds</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#1B5E7F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🤖</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">AI Summaries from Records</h3>
              <p className="text-gray-700">Intelligent summaries from years of medical records</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#1B5E7F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔐</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Consent-Based Access</h3>
              <p className="text-gray-700">Patient-controlled privacy and data sharing</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#1B5E7F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🏥</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Seamless EHR Compatibility</h3>
              <p className="text-gray-700">Integrates directly with your existing systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Use Case —
              <br />
              <span className="text-[#1B5E7F]">"When DrSolv Met the ER"</span>
            </h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-12 items-center pt-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/trauma-center-doctor-treating-emergency-patient-ho.jpg"
                alt="Trauma center emergency response"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-lg text-gray-700 font-light mb-4">
                  A Delhi trauma center used DrSolv's QR code to discover a patient's:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-[#1B5E7F] font-bold">✓</span>
                    <span>Diabetes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#1B5E7F] font-bold">✓</span>
                    <span>Hypertension</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#1B5E7F] font-bold">✓</span>
                    <span>Penicillin allergy</span>
                  </li>
                </ul>
                <p className="text-lg font-medium text-[#1B5E7F] mt-4">Result: Saved his life</p>
              </div>

              <div className="p-8 bg-white rounded-lg border border-[#1B5E7F]/20 text-center">
                <p className="text-lg text-gray-900 font-light">
                  <span className="font-medium">"Data didn't just inform care. It defined it."</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Why Partner with DrSolv</h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-6 pt-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] text-2xl mt-1">⚕️</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Reduce Critical Errors</h3>
                  <p className="text-gray-700 text-sm">Accurate patient information prevents medical errors</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] text-2xl mt-1">🔗</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Improve Emergency Coordination</h3>
                  <p className="text-gray-700 text-sm">Connected care ecosystem reduces response time</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] text-2xl mt-1">📊</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Enhance Operational Efficiency</h3>
                  <p className="text-gray-700 text-sm">Streamlined workflows and faster patient processing</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex gap-3 items-start">
                <span className="text-[#1B5E7F] text-2xl mt-1">✅</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Build Patient Trust</h3>
                  <p className="text-gray-700 text-sm">Transparent data handling increases patient confidence</p>
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
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Join India's Emergency-Ready Hospital Network
            </h2>
          </div>

          <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="px-8 py-3 bg-[#1B5E7F] text-white font-medium rounded-lg transition">
              Schedule a Demo
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg transition border border-gray-200"
            >
              Partner with DrSolv
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg transition border border-gray-200"
            >
              Download Guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
