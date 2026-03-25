import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-pog0SVZGGR6O6wjHVKw8cQbEyCnXIx.png"
                  alt="Unidoc"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-semibold text-lg">Unidoc</span>
            </div>
            <p className="text-sm text-gray-400">Transforming healthcare with intelligent EMR solutions</p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/hospital" className="text-gray-400 hover:text-white transition">Hospitals</a></li>
              <li><a href="/individuals" className="text-gray-400 hover:text-white transition">Individuals</a></li>
              <li><a href="/insurance" className="text-gray-400 hover:text-white transition">Insurance</a></li>
              <li><a href="/lab-pharmacy" className="text-gray-400 hover:text-white transition">Lab & Pharmacy</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms</a></li>
              <li><a href="/security" className="text-gray-400 hover:text-white transition">Security</a></li>
              <li><a href="/compliance" className="text-gray-400 hover:text-white transition">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {currentYear} Unidoc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
