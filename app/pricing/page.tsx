"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { pricingContent, siteConfig } from "@/lib/content"
import { Check } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function PricingPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-pricing-header]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "[data-pricing-header]",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )

      gsap.utils.toArray<HTMLElement>("[data-pricing-card]").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
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
        <div data-pricing-header className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            {pricingContent.title}
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            {pricingContent.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {pricingContent.plans.map((plan, index) => (
              <div
                key={index}
                data-pricing-card
                className={`relative rounded-2xl border-2 transition-all duration-300 ${
                  plan.highlighted
                    ? "border-[#1b6a52] bg-gradient-to-br from-green-50 to-white shadow-2xl shadow-green-100/30 scale-105 md:scale-100 lg:scale-110"
                    : "border-gray-200 bg-white hover:border-[#1b6a52]/50 hover:shadow-lg"
                }`}
              >
                {/* Highlighted Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-[#1b6a52] text-white text-sm font-bold rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8 space-y-6 h-full flex flex-col">
                  {/* Plan Name */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="py-6 border-t-2 border-b-2 border-gray-200">
                    <div className="text-4xl font-bold text-gray-900 mb-1">
                      {plan.price}
                    </div>
                    <p className="text-gray-600 text-sm">{plan.period}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#1b6a52] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href="#contact" className="w-full">
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition ${
                        plan.highlighted
                          ? "bg-[#1b6a52] hover:bg-[#15544a] text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Detailed Feature Comparison</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border-2 border-gray-200">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                  {pricingContent.plans.map((plan, i) => (
                    <th key={i} className="px-6 py-4 text-center font-semibold text-gray-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Patient Records</td>
                  <td className="px-6 py-4 text-center">Up to 100</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-gray-900">EMR Modules</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">All</td>
                  <td className="px-6 py-4 text-center">All + Custom</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">AI Features</td>
                  <td className="px-6 py-4 text-center">—</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓ + Custom Models</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-gray-900">Support</td>
                  <td className="px-6 py-4 text-center">Email</td>
                  <td className="px-6 py-4 text-center">24/7 Phone & Chat</td>
                  <td className="px-6 py-4 text-center">Dedicated Manager</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">ABDM Integration</td>
                  <td className="px-6 py-4 text-center">—</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-gray-900">Custom Integrations</td>
                  <td className="px-6 py-4 text-center">—</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓ + Priority</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Multi-Location</td>
                  <td className="px-6 py-4 text-center">—</td>
                  <td className="px-6 py-4 text-center">—</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">SLA Guarantee</td>
                  <td className="px-6 py-4 text-center">—</td>
                  <td className="px-6 py-4 text-center">—</td>
                  <td className="px-6 py-4 text-center">99.9% Uptime</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Pricing FAQ</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-2xl border-2 border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Can I change my plan later?
              </h3>
              <p className="text-gray-700">
                Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at your next billing cycle.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border-2 border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Is there a free trial?
              </h3>
              <p className="text-gray-700">
                Yes! All plans come with a 14-day free trial. No credit card required. Full access to all features during the trial period.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border-2 border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What about custom pricing?
              </h3>
              <p className="text-gray-700">
                Enterprise customers can contact our sales team for custom pricing based on your specific requirements and scale.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border-2 border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you offer annual discounts?
              </h3>
              <p className="text-gray-700">
                Yes! Annual plans come with 20% savings compared to monthly billing. Contact our sales team for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b6a52] to-[#0f4a37]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">
            Ready to Transform Your Healthcare Delivery?
          </h2>
          <p className="text-lg text-green-50 font-medium">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Link href="#contact">
            <button className="px-8 py-3 bg-white text-[#1b6a52] font-semibold rounded-lg hover:bg-gray-100 transition">
              Start Free Trial
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
