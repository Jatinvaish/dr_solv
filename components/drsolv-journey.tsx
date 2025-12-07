export default function DrSolvJourney() {
  const steps = [
    { title: "Collect", description: "Reports, vitals, and history stored securely in one place." },
    { title: "Understand", description: "AI transforms raw data into clinical clarity." },
    { title: "Act", description: "Book consults, tests, and medicines effortlessly." },
    { title: "Respond", description: "In emergencies, the QR bridges silence with life-saving information." },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-animate className="space-y-3 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            From data to decision —
            <br />
            <span className="text-[#1B5E7F]">in a heartbeat.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={index} data-animate className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-[#1B5E7F] text-white rounded-full flex items-center justify-center font-medium">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-700 mt-2 font-medium">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div data-animate className="mt-12 text-center p-8 bg-white rounded-lg border border-gray-200">
          <p className="text-lg text-gray-900 font-medium italic">
            Technology doesn't save lives. <span className="font-semibold">Timely information does.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
