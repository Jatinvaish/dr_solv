export default function DrSolvVision() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-animate>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Why we built
                <br />
                <span className="text-[#1B5E7F]">DrSolv.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 font-medium">
                Healthcare today is a race against time. Every moment spent searching for data is a moment lost for
                care.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-[#1B5E7F] rounded-full"></div>
                <div>
                  <p className="text-base font-semibold text-gray-900">Real Emergency Stories</p>
                  <p className="text-sm text-gray-700 mt-1 font-medium">
                    We've seen patients delayed, records lost, and precious seconds wasted. These aren't
                    statistics—they're stories we wanted to change.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-[#1B5E7F] rounded-full"></div>
                <div>
                  <p className="text-base font-semibold text-gray-900">A Technology that Listens</p>
                  <p className="text-sm text-gray-700 mt-1 font-medium">
                    We partnered with hospitals, doctors, and patients to build a system that understands the chaos of
                    real emergencies.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-[#1B5E7F] rounded-full"></div>
                <div>
                  <p className="text-base font-semibold text-gray-900">Care That Responds</p>
                  <p className="text-sm text-gray-700 mt-1 font-medium">
                    Every feature, every line of code, every decision is made with one purpose: to save time and save
                    lives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="bg-gradient-to-br from-[#1B5E7F]/10 to-[#1B5E7F]/5 rounded-lg p-8 flex items-center justify-center"
            data-animate
          >
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-[#1B5E7F]/20">∞</div>
              <p className="text-gray-700 font-medium">Infinite care possibilities</p>
              <p className="text-sm text-gray-600 font-medium">Powered by timely, accessible, intelligent healthcare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
