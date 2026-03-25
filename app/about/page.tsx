"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div data-animate>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              About <span className="text-[#1b6a52]">Unidoc</span>
            </h1>
          </div>
          <div data-animate>
            <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
              Transforming healthcare through intelligent patient records management and AI-powered insights
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div data-animate className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unidoc was founded with a simple observation: Healthcare professionals are drowning in administrative work while patients struggle to access their own medical records. In modern healthcare systems, critical patient information is fragmented across multiple systems, creating inefficiencies that compromise care quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We realized that the solution wasn't better paperwork — it was better technology. Technology that understands healthcare workflows, respects patient privacy, and empowers doctors to spend more time caring and less time searching.
            </p>
            <p className="text-lg text-[#1b6a52] font-semibold">
              That's when Unidoc was created — to give every healthcare professional the tools they deserve to deliver exceptional patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 text-center space-y-4">
              <div className="text-4xl">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Empower healthcare professionals with intelligent tools that streamline patient care, improve outcomes, and make healthcare delivery more efficient and effective.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 text-center space-y-4">
              <div className="text-4xl">🔭</div>
              <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A healthcare system where medical data flows seamlessly, clinical decisions are informed by AI intelligence, and every healthcare professional can focus on what they do best — care.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 text-center space-y-4">
              <div className="text-4xl">💎</div>
              <h3 className="text-2xl font-bold text-gray-900">Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Patient-first, Security-paramount, Innovation-driven, Transparency-absolute. We believe healthcare data belongs to patients and technology should serve clinicians, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Unidoc */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Unidoc</h2>
          </div>

          <div className="space-y-6">
            <div data-animate className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition">
              <div className="text-4xl flex-shrink-0">🏥</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Built for Healthcare Professionals</h3>
                <p className="text-gray-700">
                  Designed by healthcare professionals who understand clinical workflows, regulatory requirements, and the unique challenges of modern healthcare delivery.
                </p>
              </div>
            </div>

            <div data-animate className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition">
              <div className="text-4xl flex-shrink-0">🤖</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Intelligence</h3>
                <p className="text-gray-700">
                  Leverage artificial intelligence to automate documentation, predict patient risks, assist clinical decisions, and optimize hospital workflows.
                </p>
              </div>
            </div>

            <div data-animate className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-purple-50 transition">
              <div className="text-4xl flex-shrink-0">🔐</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-700">
                  HIPAA-compliant, ABDM-integrated, with enterprise-grade encryption and compliance certifications that meet the highest healthcare standards.
                </p>
              </div>
            </div>

            <div data-animate className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-amber-50 transition">
              <div className="text-4xl flex-shrink-0">⚡</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Implementation</h3>
                <p className="text-gray-700">
                  Quick setup with comprehensive training and dedicated support. Our team ensures smooth transition and continuous optimization for your organization.
                </p>
              </div>
            </div>

            <div data-animate className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition">
              <div className="text-4xl flex-shrink-0">📈</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-700">
                  Healthcare organizations using Unidoc report 70% reduction in documentation time, 90% improvement in data access speed, and significant improvement in patient satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Trust */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-gray-900">Trusted by Healthcare Leaders</h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg border border-gray-200">
              <div className="text-5xl font-bold text-[#1b6a52] mb-2">500+</div>
              <p className="text-gray-700 font-medium">Healthcare providers using Unidoc</p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200">
              <div className="text-5xl font-bold text-[#1b6a52] mb-2">50K+</div>
              <p className="text-gray-700 font-medium">Patients benefiting daily from improved care</p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200">
              <div className="text-5xl font-bold text-[#1b6a52] mb-2">70%</div>
              <p className="text-gray-700 font-medium">Average reduction in documentation time</p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200">
              <div className="text-5xl font-bold text-[#1b6a52] mb-2">100%</div>
              <p className="text-gray-700 font-medium">HIPAA & ABDM compliance guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div data-animate>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Ready to Transform Your Healthcare Delivery?</h2>
            <p className="text-lg text-gray-700 font-medium mt-4 max-w-2xl mx-auto">
              Join healthcare professionals who are already using Unidoc to deliver better patient care.
            </p>
          </div>

          <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-3 bg-[#1b6a52] hover:bg-[#15544a] text-white font-medium rounded-lg transition text-center"
            >
              Get Started Today
            </Link>
            <Link
              href="/#features"
              className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition border border-gray-200 text-center"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
