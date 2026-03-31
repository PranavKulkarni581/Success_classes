import { FaCheckCircle, FaPlay } from 'react-icons/fa'

const bullets = [
  'Experienced & Qualified Teachers',
  'Result-Oriented Teaching Methodology',
  'Strong Concept Building Approach',
  'JEE / NEET / MHT-CET Preparation',
  'Regular Tests & Parent Communication',
  'Individual Student Attention',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="./about.webp"
                alt="About Success Classes Barshi - 18+ years of academic excellence in JEE NEET CET coaching"
                className="w-full h-[420px] object-cover"
                style={{ objectPosition: '20% center' }}
                loading="lazy"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
              <p className="text-4xl font-bold font-heading text-primary">18+</p>
              <p className="text-sm text-lightText mt-1">Years of Academic Excellence in Barshi</p>
            </div>
            {/* Blue accent */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Text Side */}
          <div>
            <p className="text-btnBlue font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-darkText mb-5 section-heading-left">
              About Us
            </h2>

            <p className="text-lightText text-sm leading-relaxed mb-4">
              Success Classes, Barshi has been a trusted name in quality education for over 18 years.
              Founded with the vision of making every student excel academically, we have guided
              hundreds of students to achieve top scores in board exams and crack competitive
              entrances like JEE, NEET, and MHT-CET.
            </p>
            <p className="text-lightText text-sm leading-relaxed mb-6">
              Our team of highly qualified educators believes in building strong conceptual
              foundations so that students not only pass exams but truly understand and love the
              subjects they study. With small batch sizes, personalized attention, and a nurturing
              environment, we ensure no student is left behind.
            </p>

            {/* Bullet Points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-darkText">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
