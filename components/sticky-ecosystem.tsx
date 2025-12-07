"use client"

import { useEffect, useRef, useState } from "react"

interface EcosystemItem {
  title: string
  description: string
  icon: string
  color: string
}

const ecosystemItems: EcosystemItem[] = [
  {
    title: "Emergency QR",
    description: "Critical health data accessible in seconds when it matters most.",
    icon: "📱",
    color: "from-red-50 to-red-100",
  },
  {
    title: "Data Vault & AI",
    description: "Your complete health story, intelligently organized and instantly available.",
    icon: "🔐",
    color: "from-blue-50 to-blue-100",
  },
  {
    title: "Consultations",
    description: "Connect with specialists when you need guidance, on your schedule.",
    icon: "👨‍⚕️",
    color: "from-green-50 to-green-100",
  },
  {
    title: "Lab Integration",
    description: "Tests that find you, results that follow, seamlessly connected.",
    icon: "🧬",
    color: "from-purple-50 to-purple-100",
  },
]

export default function StickyEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      const itemIndex = Math.floor(scrollProgress * ecosystemItems.length)

      setActiveIndex(Math.min(itemIndex, ecosystemItems.length - 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="space-y-3 mb-12">
          <span className="text-xs uppercase tracking-wider text-gray-600 font-semibold">The Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900">One Network. Infinite Care.</h2>
        </div>

        {/* Sticky Scroll Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start" ref={containerRef}>
          {/* Left - Sticky Text */}
          <div className="md:sticky md:top-24 md:h-screen md:flex md:flex-col md:justify-center">
            <div className="space-y-6">
              {ecosystemItems.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 cursor-pointer p-4 rounded-xl ${
                    activeIndex === index
                      ? "bg-red-50 border-l-4 border-red-700 scale-105"
                      : "opacity-50 hover:opacity-75"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Scrolling Visual */}
          <div className="space-y-4 md:space-y-8">
            {ecosystemItems.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 transform ${
                  activeIndex >= index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div
                  className={`bg-gradient-to-br ${item.color} rounded-xl p-12 h-64 flex flex-col justify-center items-center`}
                >
                  <span className="text-6xl mb-4">{item.icon}</span>
                  <h3 className="text-2xl font-semibold text-gray-900 text-center">{item.title}</h3>
                  <p className="text-center text-gray-700 mt-3 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
