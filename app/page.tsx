"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Navigation from "@/components/navigation"
import DrSolvHero from "@/components/drsolv-hero"
import DrSolvProblem from "@/components/drsolv-problem"
import DrSolvVision from "@/components/drsolv-vision"
import DrSolvFeatures from "@/components/drsolv-features"
import DrSolvEcosystem from "@/components/drsolv-ecosystem"
import DrSolvJourney from "@/components/drsolv-journey"
import DrSolvImpact from "@/components/drsolv-impact"
import DrSolvStories from "@/components/drsolv-stories"
import DrSolvTestimonials from "@/components/drsolv-testimonials"
import DrSolvPartners from "@/components/drsolv-partners"
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
      <DrSolvHero />
      <DrSolvProblem />
      <DrSolvVision />
      <DrSolvFeatures />
      <DrSolvEcosystem />
      <DrSolvJourney />
      <DrSolvImpact />
      <DrSolvStories />
      <DrSolvTestimonials />
      <DrSolvPartners />
      <Footer />
    </main>
  )
}
