"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/lib/content"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="w-8 h-8 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-pog0SVZGGR6O6wjHVKw8cQbEyCnXIx.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-lg font-bold text-gray-900">{siteConfig.name}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <Link
              href="/#features"
              className="text-gray-700 hover:text-[#1b6a52] text-sm font-medium transition"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#1b6a52] text-sm font-medium transition"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-[#1b6a52] text-sm font-medium transition"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-[#1b6a52] text-sm font-medium transition"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#1b6a52] text-sm font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-8">
            <Link href="#contact">
              <button className="bg-[#1b6a52] hover:bg-[#15544a] text-white px-6 py-2 rounded-lg text-sm font-medium transition">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/#features"
              className="block text-gray-700 hover:text-[#1b6a52] text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-[#1b6a52] text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-[#1b6a52] text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-[#1b6a52] text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-[#1b6a52] text-sm font-medium"
            >
              Contact
            </Link>
            <Link href="#contact" className="block w-full">
              <button className="w-full bg-[#1b6a52] hover:bg-[#15544a] text-white px-6 py-2 rounded-lg text-sm font-medium transition mt-4">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
