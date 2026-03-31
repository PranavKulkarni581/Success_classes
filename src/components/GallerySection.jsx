const galleryImages = [
  {
    src: '/Gallery/one.webp',
    alt: 'Gallery 1',
    span: 'col-span-2',
  },
  {
    src: '/Gallery/two.webp',
    alt: 'Gallery 2',
  },
  {
    src: '/Gallery/three.webp',
    alt: 'Gallery 3',
  },
  {
    src: '/Gallery/four.webp',
    alt: 'Gallery 4',
  },
  {
    src: '/Gallery/five.webp',
    alt: 'Gallery 5',
  },
  {
    src: '/Gallery/six.webp',
    alt: 'Gallery 6',
    span: 'col-span-2',
  },
  {
    src: '/Gallery/seven.webp',
    alt: 'Gallery 7',
  },
  {
    src: '/Gallery/eight.webp',
    alt: 'Gallery 8',
  },
  {
    src: '/Gallery/nine.webp',
    alt: 'Gallery 9',
  },
  {
    src: '/Gallery/ten.webp',
    alt: 'Gallery 10',
  },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-bgGrey">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-btnBlue font-semibold text-sm uppercase tracking-widest mb-2">
            Our Class & Activities
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-darkText section-heading">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl ${img.span || ''} group cursor-pointer shadow-md`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
