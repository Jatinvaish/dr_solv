export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Initial Contact",
      description:
        "Schedule a free 15-minute consultation to discuss your concerns and see if my approach is right for you. No pressure – just a conversation.",
    },
    {
      number: "2",
      title: "Personalized Plan",
      description:
        "I'll create a customized plan that aligns with your goals, whether you're managing anxiety or improving your broken relationships.",
    },
    {
      number: "3",
      title: "Online Sessions",
      description:
        "Join one-on-one sessions from anywhere, using secure video calls. We'll work together to overcome challenges and track your progress.",
    },
  ]

  return (
    <section id="how" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider text-gray-600 font-semibold">How It Works</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900">
              <span className="text-pretty">Simple, Convenient, Effective</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-light text-gray-300">{step.number}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
