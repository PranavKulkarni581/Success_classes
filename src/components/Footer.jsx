import { FaGraduationCap, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Batches', href: '#batches' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Staff', href: '#staff' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const batches = [
  '8th Standard',
  '9th Standard',
  '10th (SSC Board)',
  '11th Science',
  '12th Science',
  'JEE / CET Prep',
  'NEET Preparation',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-lg leading-none">
                  Success Classes
                </p>
                <p className="text-gray-400 text-xs mt-0.5">Barshi, Maharashtra</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering students with quality education and strong academic foundations since 2006.
              Join Success, Get Success.
            </p>
            <p className="text-blue-300 font-heading font-semibold text-sm italic">
              "Join Success, Get Success"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-blue-300 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:bg-blue-300 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Batches */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Our Batches
            </h4>
            <ul className="space-y-2.5">
              {batches.map((b) => (
                <li key={b}>
                  <a
                    href="#batches"
                    className="text-gray-400 text-sm hover:text-blue-300 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:bg-blue-300 transition-colors" />
                    {b}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9881384200"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                    <FaPhone className="text-blue-300 text-xs" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Phone</p>
                    <p className="text-gray-300 text-sm group-hover:text-blue-300 transition-colors">9881384200</p>
                    <p className="text-gray-300 text-sm group-hover:text-blue-300 transition-colors">9689264827</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:successclasses@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                    <FaEnvelope className="text-blue-300 text-xs" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Email</p>
                    <p className="text-gray-300 text-sm group-hover:text-blue-300 transition-colors break-all">
                      successclasses@gmail.com
                    </p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-blue-300 text-xs" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Address</p>
                  <p className="text-gray-300 text-sm leading-snug">
                    Tilak Chowk Adva Rasta,<br />Barshi, Maharashtra
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 py-6 flex flex-col items-center justify-center gap-3 text-sm text-gray-400">
          <p className="text-center text-sm md:text-base text-gray-400">
            © {new Date().getFullYear()} Success Classes, Barshi. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5 text-center text-sm md:text-base text-gray-400">
            Made with <FaHeart className="text-red-500" /> By Pranav & Swaraj.
          </p>
        </div>
      </div>
    </footer>
  )
}
