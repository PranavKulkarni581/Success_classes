import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image — <img> instead of CSS background for mobile control */}
      <img
        id="hero-bg"
        src="https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775118922/image_chi3r2.png"
        alt="Success Classes Barshi - Premier coaching institute for JEE, NEET, and CET preparation"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Responsive object-position: 70% on mobile, center on desktop */}
      <style>{`
        #hero-bg { object-position: 70% center; }
        @media (min-width: 768px) {
          #hero-bg { object-position: center center; }
        }
      `}</style>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/0" />

      {/* Decorative gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Admissions Open 2026–27
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
            Success Classes,{' '}
            <span className="text-blue-300">Barshi</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-blue-200 font-medium mb-6 font-heading">
            Join Success, Get Success
          </p>

          {/* Address */}
          <p className="flex items-center gap-2 text-white/80 text-sm mb-8">
            <FaMapMarkerAlt className="text-blue-300 flex-shrink-0" />
               Burud galli , Barshi, Maharashtra
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { value: '18+', label: 'Years Experience' },
              { value: '5000+', label: 'Students Taught' },
              { value: '95%', label: 'Success Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <p className="text-3xl font-bold font-heading text-blue-300">
                  {stat.value}
                </p>
                <p className="text-xs text-white/70 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-btnBlue text-white font-semibold px-7 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Enquire Now
              <FaArrowRight className="text-sm" />
            </a>
            <a
              href="#batches"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              View Batches
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
