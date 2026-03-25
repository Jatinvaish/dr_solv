"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function AnimatedGradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return

      const orbs = containerRef.current.querySelectorAll("[data-orb]")

      orbs.forEach((orb, index) => {
        gsap.to(orb, {
          x: () => gsap.utils.random(-100, 100),
          y: () => gsap.utils.random(-100, 100),
          duration: gsap.utils.random(4, 6),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Floating orbs */}
      <div
        data-orb
        className="absolute w-96 h-96 bg-gradient-to-r from-green-200 to-green-100 rounded-full blur-3xl opacity-20 -top-32 -left-32"
      />
      <div
        data-orb
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full blur-3xl opacity-15 -bottom-32 -right-32"
      />
      <div
        data-orb
        className="absolute w-72 h-72 bg-gradient-to-r from-teal-200 to-teal-100 rounded-full blur-3xl opacity-10 top-1/2 right-1/4"
      />
    </div>
  )
}

export function AnimatedFloatingElement({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      })
    }, ref)

    return () => ctx.revert()
  }, [delay])

  return <div ref={ref}>{children}</div>
}
