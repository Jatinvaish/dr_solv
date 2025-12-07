import Image from "next/image"

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/peaceful-nature-background.jpg" alt="background" fill className="object-cover opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-600 font-semibold">Your New Beginning</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              <span className="text-pretty">Take the First Step Toward the Life You Deserve</span>
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Over 300 individuals have reclaimed their confidence, rebuilt relationships, and found emotional peace.
              You can, too.
            </p>

            <button className="bg-[#1B5E7F] hover:bg-[#164557] text-white px-6 py-3 rounded-full font-medium transition flex items-center gap-2 w-fit">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Book A Session
            </button>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-300 aspect-square sm:h-80 lg:h-96">
            <Image src="/woman-mindfulness-meditation.jpg" alt="Peace and wellness" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
