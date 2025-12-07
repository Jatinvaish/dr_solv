import Image from "next/image"

export default function DrSolvProblem() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div data-animate className="space-y-3 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Data exists.
            <br />
            <span className="text-[#1B5E7F]">Access doesn't.</span>
          </h2>
          <p className="text-lg text-gray-700 font-medium mt-4">
            The gap between information and insight costs lives every day.
          </p>
        </div>

        {/* Problem Description */}
        <div data-text-reveal className="space-y-4 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Everyone creates health data — reports, scans, prescriptions, insurance documents.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            But in the moments that matter most, none of it arrives on time.
          </p>
        </div>

        {/* Problem Scenarios with Images */}
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          <div data-animate className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/emergency-scenario.jpg" alt="Emergency medical scenario" fill className="object-cover" />
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 text-lg">A patient arrives unconscious.</p>
              <p className="text-gray-700 text-base mt-2 font-medium">
                The doctor doesn't know their allergies, medications, or medical history.
              </p>
            </div>
          </div>

          <div data-animate className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/insurance-paperwork.jpg" alt="Insurance documentation" fill className="object-cover" />
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 text-lg">The insurer can't find their file.</p>
              <p className="text-gray-700 text-base mt-2 font-medium">
                Families scramble through drawers for scattered reports and documents.
              </p>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div data-animate className="p-8 bg-white rounded-lg border border-[#1B5E7F]/20 text-center">
          <p className="text-lg text-gray-900 font-medium">
            We live in a world filled with health data, yet disconnected from care.{" "}
            <span className="font-semibold">DrSolv reconnects those dots</span> — instantly, intelligently,
            compassionately.
          </p>
        </div>
      </div>
    </section>
  )
}
