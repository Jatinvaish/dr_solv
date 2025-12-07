"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - CHANGE: Made larger and more visible */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 relative">
              <Image src="/logo-drsolv.jpg" alt="DrSolv Logo" fill className="object-contain" priority />
            </div>
            <span className="text-gray-900 font-semibold hidden sm:inline text-lg">DrSolv</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <Link href="/hospital" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
              Hospital
            </Link>
            <Link href="/individuals" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
              Individuals
            </Link>
            <Link href="/insurance" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
              Insurance
            </Link>
            <Link href="/lab-pharmacy" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
              Lab & Pharmacy
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
              About
            </Link>
          </div>

          {/* Book a Session Button */}
          <div className="hidden md:block ml-8">
            <Link href="/about">
              <button className="bg-[#1B5E7F] hover:bg-[#164557] text-white px-6 py-2 rounded-lg text-sm font-medium transition">
                Book A Session
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
            <Link href="/hospital" className="block text-gray-700 hover:text-gray-900 text-sm font-medium">
              Hospital
            </Link>
            <Link href="/individuals" className="block text-gray-700 hover:text-gray-900 text-sm font-medium">
              Individuals
            </Link>
            <Link href="/insurance" className="block text-gray-700 hover:text-gray-900 text-sm font-medium">
              Insurance
            </Link>
            <Link href="/lab-pharmacy" className="block text-gray-700 hover:text-gray-900 text-sm font-medium">
              Lab & Pharmacy
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-gray-900 text-sm font-medium">
              About
            </Link>
            <Link href="/about" className="block w-full">
              <button className="w-full bg-[#1B5E7F] hover:bg-[#164557] text-white px-6 py-2 rounded-lg text-sm font-medium transition mt-4">
                Book A Session
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
