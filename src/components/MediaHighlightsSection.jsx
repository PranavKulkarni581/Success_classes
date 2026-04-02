import { useState } from 'react'

const mediaHighlights = [
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775118975/news-01_apvb9c.png',
    alt: 'Success Classes featured in news - Educational excellence in Barshi',
  },
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775118966/news-02_mkbi8k.png',
    alt: 'Press coverage of Success Classes achievements and student performance',
  },
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775118964/news-03_oftkzz.png',
    alt: 'Newspaper article about Success Classes coaching and JEE NEET results',
  },
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775118966/news-04_y89bzi.png',
    alt: 'Media feature on Success Classes student success stories and achievements',
  },
]

export default function MediaHighlightsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section id="media-highlights" className="py-20 bg-bgGrey">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-btnBlue font-semibold text-sm uppercase tracking-widest mb-2">
            In The News
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-darkText section-heading">
            Press & Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Featured Large Card - Fixed Size */}
          <div className="md:col-span-3 md:row-span-2">
            <div className="relative w-full h-[580px] rounded-3xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-gray-100 flex items-center justify-center">
              <img
                src={mediaHighlights[selectedIndex].src}
                alt={mediaHighlights[selectedIndex].alt}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Thumbnail Cards */}
          <div className="flex flex-col gap-6 h-[580px]">
            {mediaHighlights.map((media, i) => (
              <div
                key={i}
                onClick={() => setSelectedIndex(i)} 
                className={`relative flex-1 rounded-2xl overflow-hidden group shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gray-100 flex items-center justify-center ${
                  selectedIndex === i ? 'ring-4 ring-btnBlue' : ''
                }`}
              >
                <img
                  src={media.src}
                  alt={media.alt}
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
