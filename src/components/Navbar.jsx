import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGraduationCap } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Batches', href: '#batches' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Staff', href: '#staff' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
       <a href="#home" className="flex items-center gap-3 group">
  <div className="w-20 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0">
    <img src="/logo.webp" alt="Logo" className="w-full h-full object-contain" loading="lazy" />
  </div>

  <div className="leading-tight">
            <p className="font-heading font-bold text-primary text-lg md:text-xl leading-none">
              Success Classes
            </p>
            <p className="text-xs md:text-sm text-gray-500 leading-none mt-0.5">Barshi</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-blue-50 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-3 px-5 py-2 bg-btnBlue text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              Enquire Now
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-2.5 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-blue-50 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block text-center px-5 py-2.5 bg-btnBlue text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Enquire Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
