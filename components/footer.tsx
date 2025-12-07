import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Brand - CHANGE: Added logo and enhanced branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image src="/logo-drsolv.jpg" alt="DrSolv" fill className="object-contain" />
              </div>
              <span className="text-white font-semibold text-lg">DrSolv</span>
            </div>
            <p className="text-sm text-gray-400">Professional healthcare solutions for better lives.</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/hospital" className="text-gray-400 hover:text-white transition">
                  Hospital
                </a>
              </li>
              <li>
                <a href="/individuals" className="text-gray-400 hover:text-white transition">
                  Individuals
                </a>
              </li>
              <li>
                <a href="/insurance" className="text-gray-400 hover:text-white transition">
                  Insurance
                </a>
              </li>
              <li>
                <a href="/lab-pharmacy" className="text-gray-400 hover:text-white transition">
                  Lab & Pharmacy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom - CHANGE: Enhanced with logo and improved layout */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {currentYear} DrSolv. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                GitHub
              </a>
            </div>
            <div className="hidden sm:block border-l border-gray-700 pl-4">
              <p>
                Made in 💓 with{" "}
                <a href="https://ajprworld.com" className="text-[#1B5E7F] hover:text-[#0F3A4F] transition font-medium">
                  ajprworld.com
                </a>
              </p>
            </div>
            <div className="sm:hidden text-center">
              <p>
                Made in 💓 with{" "}
                <a href="https://ajprworld.com" className="text-[#1B5E7F] hover:text-[#0F3A4F] transition font-medium">
                  ajprworld.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
