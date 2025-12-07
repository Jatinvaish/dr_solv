"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div data-animate className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight">
                  Solving care.
                  <br />
                  <span className="text-[#1B5E7F]">Saving lives.</span>
                </h1>
              </div>

              <div data-animate className="space-y-2">
                <p className="text-lg md:text-xl text-gray-600 font-light">
                  The mission behind DrSolv: Connect every stakeholder in healthcare to make emergency response instant,
                  not slow.
                </p>
              </div>

              <div data-animate className="space-y-4 pt-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  In India, healthcare systems are fragmented. Patients have no quick access to their data. Hospitals
                  treat strangers without history. Doctors don't know allergies. Insurers drown in paperwork. Labs and
                  pharmacies work in isolation.
                </p>
              </div>
            </div>

            <div data-animate className="relative h-96 md:h-full">
              <Image
                src="/hero-healthcare-emergency.jpg"
                alt="DrSolv Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Our Story</h2>
          </div>

          <div data-animate className="p-8 bg-white rounded-lg border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              DrSolv was born from a simple observation: In emergencies, seconds decide everything. A patient's
              allergies. Their blood type. Prior surgeries. Insurance details. Everything that matters is scattered
              across systems, files, and memories.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              We realized that the problem wasn't medical knowledge — it was access. What if every patient carried their
              complete medical history on a wristband QR code? What if hospitals could scan and instantly know
              everything? What if insurance claims had verified data from day one?
            </p>
            <p className="text-lg text-[#1B5E7F] font-medium">
              That's when DrSolv was created — to connect the fragmented care ecosystem into one seamless, instant
              network.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl text-[#1B5E7F] mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Mission</h3>
              <p className="text-gray-700 font-light">
                To connect every stakeholder in the healthcare ecosystem — patients, doctors, hospitals, labs,
                pharmacies, and insurers — so that no one treats a stranger, no claim is delayed, and every second
                counts for care that responds.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl text-[#1B5E7F] mb-4">🔭</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Vision</h3>
              <p className="text-gray-700 font-light">
                A healthcare system where medical data flows freely, emergencies are handled with complete information,
                and care is never delayed by paperwork or fragmentation.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl text-[#1B5E7F] mb-4">💎</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Values</h3>
              <p className="text-gray-700 font-light">
                Privacy-first. Transparency always. Speed essential. Trust paramount. We believe healthcare data belongs
                to patients, and instant access saves lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders & Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Meet the Team</h2>
            <p className="text-lg text-gray-600 font-light">
              Healthcare professionals united by a mission to save lives
            </p>
          </div>

          <div data-animate className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center">
              <div className="w-24 h-24 bg-[#1B5E7F] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                👨‍⚕️
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Founder & CEO</h3>
              <p className="text-gray-700 font-light mb-2">
                Healthcare innovator with 15+ years in emergency medicine and digital health solutions.
              </p>
              <p className="text-sm text-[#1B5E7F] font-medium">
                Visionary leader driving the healthcare transformation
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center">
              <div className="w-24 h-24 bg-[#1B5E7F] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                👨‍💼
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CTO</h3>
              <p className="text-gray-700 font-light mb-2">
                Full-stack technologist with expertise in healthcare systems, security, and scalable platforms.
              </p>
              <p className="text-sm text-[#1B5E7F] font-medium">Building the technical backbone of DrSolv</p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center">
              <div className="w-24 h-24 bg-[#1B5E7F] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                👩‍🏫
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Head of Partnerships</h3>
              <p className="text-gray-700 font-light mb-2">
                Strategic connector with deep relationships across hospitals, insurance, labs, and pharmacies.
              </p>
              <p className="text-sm text-[#1B5E7F] font-medium">Expanding the DrSolv ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div data-animate className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Trusted by Healthcare Leaders</h2>
          </div>

          <div data-animate className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-[#1B5E7F] mb-2">500+</div>
              <p className="text-gray-700 font-light">Healthcare providers using DrSolv</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-[#1B5E7F] mb-2">50K+</div>
              <p className="text-gray-700 font-light">Lives directly protected</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-[#1B5E7F] mb-2">24/7</div>
              <p className="text-gray-700 font-light">Emergency response ready system</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-[#1B5E7F] mb-2">100%</div>
              <p className="text-gray-700 font-light">Data privacy compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div data-animate className="text-center space-y-3 mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Get In Touch</h2>
            <p className="text-lg text-gray-600 font-light">Have questions? We'd love to hear from you.</p>
          </div>

          <div data-animate className="bg-white rounded-lg border border-gray-200 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1B5E7F]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1B5E7F]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Organization</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1B5E7F]"
                  placeholder="Hospital / Insurance / Lab / Pharmacy"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1B5E7F]"
                  placeholder="Tell us how we can help"
                ></textarea>
              </div>

              <button className="w-full bg-[#1B5E7F] hover:bg-[#164557] text-white px-8 py-3 rounded-lg font-medium transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div data-animate>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Join the Healthcare Revolution</h2>
          </div>

          <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hospital"
              className="px-8 py-3 bg-[#1B5E7F] text-white font-medium rounded-lg transition text-center"
            >
              For Hospitals
            </Link>
            <Link
              href="/individuals"
              className="px-8 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg transition border border-gray-200 text-center"
            >
              For Individuals
            </Link>
            <Link
              href="/insurance"
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg transition border border-gray-200 text-center"
            >
              For Partners
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
