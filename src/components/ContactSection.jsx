import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Show loading state
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', phone: '', message: '' })
      
      // Reset success message after 4 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 bg-bgGrey">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-btnBlue font-semibold text-sm uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-darkText section-heading">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info Panel */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="font-heading font-bold text-xl mb-6">Contact Information</h3>

              <div className="space-y-5">
                {[
                  {
                    icon: FaPhone,
                    label: 'Phone',
                    lines: ['9881384200', '9689264827', '7020709528'],
                    href: 'tel:9881384200',
                  },
                  {
                    icon: FaEnvelope,
                    label: 'Email',
                    lines: ['akash7020709528@gmail.com'],
                    href: 'mailto:akash7020709528@gmail.com',
                  },
                  {
                    icon: FaMapMarkerAlt,
                    label: 'Address',
                    lines: ['Burud galli,', 'Barshi, Maharashtra'],
                  },
                  {
                    icon: FaClock,
                    label: 'Timings',
                    lines: ['Mon – Sat: 7:00 AM – 9:00 PM'],
                  },
                ].map(({ icon: Icon, label, lines, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="text-blue-200 text-sm" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs mb-0.5">{label}</p>
                      {lines.map((line) =>
                        href ? (
                          <a
                            key={line}
                            href={href}
                            className="block text-white font-medium text-sm hover:text-blue-200 transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-white font-medium text-sm">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-md h-44 bg-gray-200 relative">
              <iframe
                title="Success Classes Location"
                src="https://maps.google.com/maps?q=Tilak+Chowk,+Barshi,+Maharashtra&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-8">
            <h3 className="font-heading font-bold text-xl text-darkText mb-1">
              Send an Enquiry
            </h3>
            <p className="text-lightText text-sm mb-6">
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            {submitted && (
              <div className="mb-5 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl p-4 flex items-center gap-2">
                <FaPaperPlane />
                Thank you! Your enquiry has been submitted. We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-darkText mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darkText mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darkText mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your query or message here..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all duration-200 ${
                  loading
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-btnBlue text-white hover:bg-blue-700'
                } ${submitted ? 'bg-green-500 hover:bg-green-600' : ''}`}
              >
                <FaPaperPlane className="text-sm" />
                {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
