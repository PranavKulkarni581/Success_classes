const galleryImages = [
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775119314/one_f2l5lv.png',
    alt: 'Success Classes Barshi - Classroom teaching and student learning environment',
    span: 'col-span-2',
  },
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775119273/two_w78bj2.png',
    alt: 'JEE NEET students studying at Success Classes coaching center in Barshi',
  },
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775119259/three_pn6fco.png',
    alt: 'Science laboratory class with faculty at Success Classes Barshi',
  },
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775119105/four_xi3evn.webp',
    alt: 'Mathematics coaching session for 11th 12th students at Success Classes',
  },
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775119103/five_xbtotn.webp',
    alt: 'Interactive teaching methods and student engagement at Success Classes',
  },
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775119164/six_knujhk.webp',
    alt: 'State-of-the-art study facilities and resources at Success Classes Barshi Maharashtra',
    span: 'col-span-2',
  },
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775119163/seven_ihoi9c.webp',
    alt: 'Class activities and practical demonstration for Science students',
  },
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775119102/eight_ddma2b.webp',
    alt: 'Success Classes student batch for CET and competitive exam preparation',
  },
  {
    src: 'https://res.cloudinary.com/dvsxeq7ng/image/upload/v1775119236/nine_agkny0.png',
    alt: 'Board exam coaching and academic excellence at Success Classes Tilak Chowk',
  },
  {
    src: '/Gallery/ten.png',
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
