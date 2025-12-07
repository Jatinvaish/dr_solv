export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I never thought online therapy could feel this personal. Julia helped me rebuild my confidence and take control of my life.",
      author: "Sarah, 32",
    },
    {
      quote:
        "We were struggling with constant arguments. Now, we're finally communicating in a way that brings us closer.",
      author: "Mark & Lisa, 40s",
    },
    {
      quote:
        "Losing my dad was the hardest thing I've ever faced. These sessions gave me the tools and space I needed to heal.",
      author: "Emily, 27",
    },
  ]

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider text-gray-600 font-semibold">What Clients Say</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900">
              <span className="text-pretty">Real Stories, Real Impact</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-4">
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                <p className="text-gray-900 font-semibold text-sm">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
