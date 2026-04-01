import { FaLinkedin, FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const staff = [
  {
    name: 'Sachin Maharudra Shiral',
    role: 'Director & Faculty',
    qualification: 'MSc, BEd (Mathematics)',
    experience: '18 Years',
   image: './Staff/shiral.png',
    // color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Mrs. Pallavi Sachin Shiral',
    role: 'Senior Faculty',
    qualification: 'MSc, BEd, TET Qualified, CTET Qualified',
    experience: '18 Years',
    image: './Staff/pallavi.png',
    // color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Mr. Avinash Santosh Shilwant',
    role: 'Senior Faculty',
    qualification: 'MA, BEd, CTET Qualified',
    experience: '18 Years',
   image: './Staff/chilwant.png',
    // color: 'from-emerald-500 to-green-700',
  },
  {
    name: 'Akash Santosh Shiral',
    role: 'Faculty',
    qualification: 'MSc, BEd, TET Qualified',
    experience: '5 Years',
    image: './Staff/akash.png',
    // color: 'from-purple-500 to-violet-700',
  },
]

export default function StaffSection() {
  return (
    <section id="staff" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-btnBlue font-semibold text-sm uppercase tracking-widest mb-2">
            Meet the Experts
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-darkText section-heading">
            Our Staff
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staff.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative h-63 overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}, ${member.subject} faculty at Success Classes Barshi`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-40`} />
                {/* <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full">
                    {member.subject}
                  </span>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-darkText text-base leading-snug mb-0.5">
                  {member.name}
                </h3>
                <p className="text-btnBlue text-xs font-semibold mb-3">{member.role}</p>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-lightText">
                    <FaGraduationCap className="text-primary flex-shrink-0" />
                    {member.qualification}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-lightText">
                    <FaBriefcase className="text-primary flex-shrink-0" />
                    {member.experience} Experience
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-heading text-lg md:text-xl font-semibold text-darkText">
            & Many More Qualified Staff
          </p>
        </div>
      </div>
    </section>
  )
}
