import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-wider text-gray-600 font-semibold">Online Therapy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              <span className="text-pretty">Find peace.</span>
              <br />
              <span className="text-pretty">Find yourself.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
              Professional online therapy designed to help you rediscover balance and happiness – on your terms.
            </p>

            <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-medium transition flex items-center gap-2 w-fit">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Book A Session
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gray-200 aspect-square sm:aspect-auto sm:h-80 lg:h-[450px]">
              <Image
                src="/woman-therapy-peaceful.jpg"
                alt="Woman in comfortable setting"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Labels */}
            <div className="absolute top-12 right-8 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow-lg text-xs sm:text-sm font-medium text-gray-800">
              Convenient
            </div>
            <div className="absolute left-8 bottom-20 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow-lg text-xs sm:text-sm font-medium text-gray-800">
              Caring
            </div>
            <div className="absolute right-12 bottom-12 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow-lg text-xs sm:text-sm font-medium text-gray-800">
              Confidential
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
