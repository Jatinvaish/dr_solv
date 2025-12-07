import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "Couples Therapy",
      description:
        "Restore trust, deepen communication, and reignite your connection with tailored sessions designed to strengthen your partnership.",
      image: "/couple-therapy-session.jpg",
    },
    {
      title: "Individual Therapy",
      description:
        "Break free from anxiety, stress, and self-doubt with personalized guidance that helps you rebuild confidence and embrace your best self.",
      image: "/individual-therapy-office.jpg",
    },
    {
      title: "Grief Counselling",
      description:
        "Navigate the pain of loss with compassionate support that guides you toward healing, renewal, and hope at a pace comfortable to you.",
      image: "/grief-counseling-support.jpg",
    },
    {
      title: "Work-Life Balance Coaching",
      description:
        "Regain control and harmony in your life with strategies that empower you to thrive at work and at home. Have more energy after work!",
      image: "/work-life-balance-coaching.jpg",
    },
  ]

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider text-gray-600 font-semibold">My Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900">
              <span className="text-pretty">How I Can Help You Thrive</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 py-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden bg-gray-200 aspect-[4/5] sm:aspect-[3/4] mb-4">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-8 flex justify-center">
            <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-medium transition flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Book A Session
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
