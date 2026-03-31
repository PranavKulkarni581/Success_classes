import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function HeaderTop() {
  return (
    <div className="bg-gray-100 border-b border-gray-200 py-2 hidden md:block">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a
            href="mailto:successclasses@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
          >
            <FaEnvelope className="text-primary" />
            successclasses@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            Tilak Chowk Adva Rasta, Barshi, Maharashtra
          </span>
        </div>
        <a
          href="tel:9881384200"
          className="flex items-center gap-2 bg-primary text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-700 transition-colors duration-200"
        >
          <FaPhone className="text-xs" />
          Contact Us
        </a>
      </div>
    </div>
  )
}
