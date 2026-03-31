import { useState, useEffect, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

const slidingImages = [
  { src: '/Achievements/one.webp', alt: 'Achievement 1' },
  { src: '/Achievements/three.webp', alt: 'Achievement 3' },
  { src: '/Achievements/four.webp', alt: 'Achievement 4' },
  { src: '/Achievements/five.webp', alt: 'Achievement 5' },
]

export default function AchievementsSection() {
  const [current, setCurrent] = useState(0)
  const [zoomedImg, setZoomedImg] = useState(null)

  // On mobile: 1 image per slide. On desktop (≥ 768px): 2 per slide.
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  )

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const chunkSize = isMobile ? 1 : 2
  const slides = []
  for (let i = 0; i < slidingImages.length; i += chunkSize) {
    slides.push(slidingImages.slice(i, i + chunkSize))
  }
  const totalSlides = slides.length

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Reset current index when layout switches so we don't land on an out-of-range slide
  useEffect(() => {
    setCurrent(0)
  }, [isMobile])

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  // Close modal on Escape key
  useEffect(() => {
    if (!zoomedImg) return
    const onKey = (e) => { if (e.key === 'Escape') setZoomedImg(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [zoomedImg])

  return (
    <section id="achievements" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-btnBlue font-semibold text-sm uppercase tracking-widest mb-2">
            Pride &amp; Results
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-darkText section-heading">
            Our Achievements
          </h2>
        </div>

        {/* Fixed image on top */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-xl transition-shadow duration-300">
            <img
              src="/Achievements/two.webp"
              alt="Success Classes Barshi student achievements and awards in JEE NEET CET competitive exams"
              className="w-full h-auto object-cover cursor-zoom-in"
              loading="lazy"
              onClick={() => setZoomedImg({ src: '/Achievements/two.webp', alt: 'Success Classes Barshi student achievements and awards in JEE NEET CET competitive exams' })}
            />
          </div>
        </div>

        {/* Sliding carousel — responsive columns */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
          {/* Slides container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((group, i) => (
              <div
                key={i}
                className={`w-full flex-shrink-0 p-4 grid gap-4 ${
                  group.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
                }`}
              >
                {group.map((img, j) => (
                  <div
                    key={j}
                    className="rounded-xl overflow-hidden cursor-zoom-in"
                    onClick={() => setZoomedImg(img)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-[320px] md:h-[580px] object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Left / Right arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
          >
            <FaChevronLeft className="text-darkText text-sm" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
          >
            <FaChevronRight className="text-darkText text-sm" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-primary w-7' : 'w-2.5 bg-white/70 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Click-to-zoom modal */}
      {zoomedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setZoomedImg(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setZoomedImg(null)}
            aria-label="Close"
          >
            <FaTimes />
          </button>
          <img
            src={zoomedImg.src}
            alt={zoomedImg.alt}
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
