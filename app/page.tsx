"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Navigation from "@/components/navigation"
import UnidocHero from "@/components/unidoc-hero"
import UnidocProblem from "@/components/unidoc-problem"
import UnidocFeaturesSticky from "@/components/unidoc-features-sticky"
import UnidocAICapabilities from "@/components/unidoc-ai-capabilities"
import UnidocTestimonials from "@/components/unidoc-testimonials"
import UnidocCTA from "@/components/unidoc-cta"
import Footer from "@/components/footer"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
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

      gsap.utils.toArray<HTMLElement>("[data-text-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          y: (i, element) => -ScrollTrigger.getVelocity(element) * 0.2,
          scrollTrigger: {
            trigger: element,
            onUpdate: (self) => {
              gsap.to(element, {
                y: self.getVelocity() * -0.05,
                overwrite: "auto",
              })
            },
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <UnidocHero />
      <UnidocProblem />
      <UnidocFeaturesSticky />
      <UnidocAICapabilities />
      <UnidocTestimonials />
      <UnidocCTA />
      <Footer />
    </main>
  )
}
