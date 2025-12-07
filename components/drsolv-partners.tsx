export default function DrSolvPartners() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Header */}
        <div data-animate className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Join the future of care.</h2>
        </div>

        {/* Description */}
        <div data-animate className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Healthcare isn't broken — just fragmented. DrSolv rebuilds the missing connections between emergency
            responders, hospitals, labs, pharmacies, insurers, and individuals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            We invite partners to co-create a health network that anticipates care instead of reacting to crises.
          </p>
        </div>

        {/* CTAs */}
        <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="px-8 py-3 bg-[#1B5E7F] text-white font-medium rounded-lg transition">
            Partner With Us
          </button>
          <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 transition">
            Download Overview
          </button>
        </div>

        {/* Subtext */}
        <div data-animate className="pt-4">
          <p className="text-sm text-gray-700 font-medium">
            Built in India. Designed for the world's real emergencies.
          </p>
        </div>
      </div>
    </section>
  )
}
