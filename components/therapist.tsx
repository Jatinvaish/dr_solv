import Image from "next/image"
import { Mail, Linkedin } from "lucide-react"

export default function Therapist() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-gray-300 rounded-2xl overflow-hidden aspect-square sm:aspect-auto sm:h-80 lg:h-[500px]">
              <Image
                src="/therapist-portrait-professional.jpg"
                alt="Julia Johnson, Licensed Therapist"
                fill
                className="object-cover"
              />
            </div>

            {/* Social Icons */}
            <div className="absolute bottom-6 left-6 flex gap-3">
              <a href="#" className="bg-white/90 backdrop-blur p-3 rounded-full hover:bg-white transition shadow-lg">
                <Mail size={20} className="text-gray-700" />
              </a>
              <a href="#" className="bg-white/90 backdrop-blur p-3 rounded-full hover:bg-white transition shadow-lg">
                <Linkedin size={20} className="text-gray-700" />
              </a>
            </div>

            {/* Name Signature */}
            <p className="mt-4 text-center text-gray-600 italic text-sm">Julia Johnson</p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-600 font-semibold">Meet Your Therapist</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              <span className="text-pretty">A Trusted Partner for Your Emotional Wellbeing</span>
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Hi, I'm Julia. I believe everyone deserves a safe space to talk, heal, and grow. With over 5 years of
              experience as a licensed therapist, I've helped countless individuals and couples overcome challenges like
              anxiety, relationship struggles, and life transitions.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                CBT Practitioner
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                MSc Clinical Psychology
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                SFBT Specialist
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">GAOP Member</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                ERT Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
