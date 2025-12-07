export default function Stats() {
  const stats = [
    {
      number: "300+",
      label: "people guided toward greater emotional balance.",
    },
    {
      number: "95%",
      label: "clients notice difference within 6 sessions.",
    },
    {
      number: "5+",
      label: "years experience in psychological support.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-4xl sm:text-5xl font-light text-gray-900">{stat.number}</p>
              <p className="text-base text-gray-600 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
