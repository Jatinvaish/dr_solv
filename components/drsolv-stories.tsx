export default function DrSolvStories() {
  const stories = [
    {
      title: "The Highway Crash",
      description:
        "A 32-year-old biker arrives unconscious. Paramedic scans the QR wristband. Within 10 seconds, the ER team learns he's on blood thinners and allergic to penicillin. Treatment changes instantly.",
      quote: "That 10-second scan was the difference between reaction and rescue.",
    },
    {
      title: "The Daughter's Relief",
      description:
        "Priya struggled with her father's scattered records. DrSolv turned 18 months of reports into a one-page AI summary. Diagnosis came in 3 minutes.",
      quote: "For the first time, data made us breathe easier.",
    },
    {
      title: "The Silent Claim",
      description:
        "Ramesh filed an insurance claim through DrSolv. All documents were already organized. Claim approved in three days.",
      quote: "Recovery deserves focus, not forms.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-animate className="space-y-3 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            <span className="text-[#1B5E7F]">Real moments.</span> Real people.
            <br />
            Real care.
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div key={index} data-animate className="p-6 border border-gray-200 rounded-lg space-y-4">
              <h3 className="text-lg font-medium text-gray-900">{story.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">{story.description}</p>
              <p className="text-sm italic text-[#1B5E7F] pt-2 border-t border-gray-200 font-medium">"{story.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
