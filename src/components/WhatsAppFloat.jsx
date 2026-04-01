import { useState, useEffect } from 'react'
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/917020709528"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
        <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-20 scale-110" />

        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
          <FaWhatsapp className="text-white text-3xl" />
        </div>

        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Chat on WhatsApp
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-4 border-transparent border-l-gray-900" />
        </span>
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`group relative w-12 h-12 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <FaArrowUp className="text-white text-lg" />
      </button>
    </div>
  )
}
