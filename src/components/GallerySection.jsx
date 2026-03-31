const galleryImages = [
  {
    src: '/Gallery/one.webp',
    alt: 'Success Classes Barshi - Classroom teaching and student learning environment',
    span: 'col-span-2',
  },
  {
    src: '/Gallery/two.webp',
    alt: 'JEE NEET students studying at Success Classes coaching center in Barshi',
  },
  {
    src: '/Gallery/three.webp',
    alt: 'Science laboratory class with faculty at Success Classes Barshi',
  },
  {
    src: '/Gallery/four.webp',
    alt: 'Mathematics coaching session for 11th 12th students at Success Classes',
  },
  {
    src: '/Gallery/five.webp',
    alt: 'Interactive teaching methods and student engagement at Success Classes',
  },
  {
    src: '/Gallery/six.webp',
    alt: 'State-of-the-art study facilities and resources at Success Classes Barshi Maharashtra',
    span: 'col-span-2',
  },
  {
    src: '/Gallery/seven.webp',
    alt: 'Class activities and practical demonstration for Science students',
  },
  {
    src: '/Gallery/eight.webp',
    alt: 'Success Classes student batch for CET and competitive exam preparation',
  },
  {
    src: '/Gallery/nine.webp',
    alt: 'Board exam coaching and academic excellence at Success Classes Tilak Chowk',
  },
  {
    src: '/Gallery/ten.webp',
    alt: 'Student achievements and success stories from Success Classes Barshi',
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
