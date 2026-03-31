import { FaCheckCircle, FaBookOpen, FaFlask } from 'react-icons/fa'

const batches = [
  {
    icon: FaBookOpen,
    grade: '8th, 9th & 10th',
    tag: 'Foundation',
    details: [
      { label: 'Subjects', value: 'Mathematics, Science, English' },
      { label: 'Medium', value: 'Semi-English & Marathi' },
      { label: 'Board', value: 'Maharashtra State Board' },
    ],
    highlights: [
      'Concept-first teaching methodology',
      'Regular unit tests & assessments',
      'Special focus on board preparation',
      'Parent progress reports',
    ],
  },
  {
    icon: FaFlask,
    grade: '11th & 12th Science',
    tag: 'Advanced',
    details: [
      { label: 'Subjects', value: 'Physics, Chemistry, Biology, Math' },
      { label: 'Competitive', value: 'JEE, MHT-CET, NEET' },
      { label: 'Includes', value: 'Board + English Medium' },
    ],
    highlights: [
      'Expert faculty for each subject',
      'JEE / NEET / CET mock tests',
      'In-depth problem solving sessions',
      'Scholarship guidance & counselling',
    ],
  },
]

export default function BatchesSection() {
  return (
    <section id="batches" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-btnBlue font-semibold text-sm uppercase tracking-widest mb-2">
            Enroll Today
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-darkText section-heading">
            Our Batches
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {batches.map((batch) => {
            const Icon = batch.icon
            return (
              <div
                key={batch.grade}
                className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02]"
              >
                {/* Card header strip — solid dark blue */}
                <div className="bg-[#1e3a8a] h-20 px-7 flex items-center justify-between">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-xl text-[#1e3a8a]" />
                  </div>
                  {/* Badge */}
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#f59e0b] text-white">
                    {batch.tag}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-7">
                  {/* Title + gold underline */}
                  <div className="mb-5">
                    <h3 className="font-heading text-2xl font-bold text-gray-800 mb-2">
                      {batch.grade}
                    </h3>
                    <div className="h-[3px] w-16 bg-[#f59e0b] rounded-full" />
                    <p className="text-gray-400 text-sm mt-2">Academic Year 2026–27</p>
                  </div>

                  {/* Details block */}
                  <div className="bg-[#f8fafc] rounded-xl p-4 mb-5 space-y-2">
                    {batch.details.map((d) => (
                      <div key={d.label} className="flex justify-between text-sm">
                        <span className="text-lightText font-medium">{d.label}:</span>
                        <span className="text-darkText font-semibold text-right max-w-[60%]">
                          {d.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {batch.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className="block text-center bg-[#1e3a8a] text-white font-semibold py-3 rounded-xl hover:bg-[#172554] transition-colors duration-200 shadow-sm"
                  >
                    Enquire for This Batch
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
