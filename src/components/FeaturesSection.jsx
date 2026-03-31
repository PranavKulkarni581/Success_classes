import {
  FaChalkboardTeacher,
  FaUserFriends,
  FaClipboardList,
  FaTrophy,
  FaQuestionCircle,
  FaStar,
} from 'react-icons/fa'

const features = [
  {
    icon: FaChalkboardTeacher,
    title: 'Excellent Teaching Staff',
    desc: 'Highly qualified and experienced teachers dedicated to making every concept crystal clear.',
  },
  {
    icon: FaUserFriends,
    title: 'Personalized Attention',
    desc: 'Small batch sizes ensure every student receives individual focus and tailored guidance.',
  },
  {
    icon: FaClipboardList,
    title: 'Regular Tests & Analysis',
    desc: 'Periodic assessments with detailed performance analysis to track and accelerate progress.',
  },
  {
    icon: FaTrophy,
    title: 'Competitive Exam Prep',
    desc: 'Specialized coaching for JEE, NEET, and MHT-CET alongside board exam preparation.',
  },
  {
    icon: FaQuestionCircle,
    title: 'Doubt Solving Sessions',
    desc: 'Dedicated sessions to resolve queries and strengthen understanding of complex topics.',
  },
  {
    icon: FaStar,
    title: 'Strong Academic Results',
    desc: 'Consistent record of top scores and selections in competitive exams across batches.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-bgGrey">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-btnBlue font-semibold text-sm uppercase tracking-widest mb-2">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-darkText section-heading">
            Our Features
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <Icon className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-lg text-darkText mb-2">
                {title}
              </h3>
              <p className="text-lightText text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
