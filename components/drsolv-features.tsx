export default function DrSolvFeatures() {
  const features = [
    {
      icon: "📱",
      title: "Emergency Wristband",
      description: "Wear your medical story. In emergencies, let your data do the talking.",
    },
    {
      icon: "🔐",
      title: "Secure Data Vault",
      description: "All your medical records in one place, encrypted and accessible only to you.",
    },
    {
      icon: "⚡",
      title: "Instant Access",
      description: "10-second emergency access. From unconscious to clarity in a heartbeat.",
    },
    {
      icon: "🏥",
      title: "Hospital Integration",
      description: "Seamless connection with hospitals for faster admission and treatment.",
    },
    {
      icon: "💊",
      title: "Pharmacy Network",
      description: "Find medications, compare prices, and get prescriptions filled instantly.",
    },
    {
      icon: "📋",
      title: "Insurance Made Simple",
      description: "Simplified claims, auto-organized documents, faster approvals.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-animate className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Everything you need for
            <br />
            <span className="text-[#1B5E7F]">complete healthcare control.</span>
          </h2>
          <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto">
            A unified platform that brings together all aspects of your health journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              data-animate
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#1B5E7F]/30 transition space-y-4"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
