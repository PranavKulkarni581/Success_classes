import { FaStar, FaStarHalf } from 'react-icons/fa'

const reviews = [
  {
    name: 'Rahul Patil',
    location: 'Barshi',
    text: 'Success Classes is one of the best coaching classes in Barshi. The teaching is very clear and they focus on basics. Because of them, my 10th result improved a lot.',
    rating: 5,
  },
  {
    name: 'Sneha Jadhav',
    location: 'Barshi',
    text: 'Very good classes for science students. Teachers explain every concept properly and also help in doubt solving. Highly recommended for 11th and 12th.',
    rating: 4,
  },
  {
    name: 'Amit Shinde',
    location: 'Barshi',
    text: 'I joined for CET preparation and the experience was very good. Regular tests and practice helped me gain confidence.',
    rating: 3.5,
  },
  {
    name: 'Pooja Kulkarni',
    location: 'Barshi',
    text: 'Best coaching class in Barshi for boards. Teachers are supportive and always motivate students to do better.',
    rating: 5,
  },
  {
    name: 'Sagar Pawar',
    location: 'Barshi',
    text: 'Concept teaching is very strong here, especially for Mathematics. I improved my marks a lot after joining.',
    rating: 5,
  },
  {
    name: 'Priyanka More',
    location: 'Parent',
    text: 'My daughter is studying here and we are very satisfied with the teaching quality. Regular tests and feedback help us track her progress.',
    rating: 5,
  },
  {
    name: 'Nikhil Deshmukh',
    location: 'Barshi',
    text: 'Best environment for studying. Discipline, proper schedule and experienced teachers make this class different from others.',
    rating: 5,
  },
  {
    name: 'Vaishnavi Chavan',
    location: 'Barshi',
    text: 'Very helpful for NEET preparation. Teachers explain Biology and Chemistry in a very simple way.',
    rating: 5,
  },
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-bgGrey">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-btnBlue font-semibold text-sm uppercase tracking-widest mb-2">
            What Our Students Say
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-darkText section-heading">
            Student Reviews
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map(({ name, location, text, rating }) => (
            <div
              key={name}
              className="bg-bgGrey p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-gray-100 flex flex-col"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => {
                  const isFilled = i < Math.floor(rating)
                  const isHalf = i === Math.floor(rating) && rating % 1 !== 0
                  return isHalf ? (
                    <FaStarHalf key={i} className="text-yellow-400" size={16} />
                  ) : (
                    <FaStar key={i} className={isFilled ? 'text-yellow-400' : 'text-gray-300'} size={16} />
                  )
                })}
              </div>

              {/* Review Text */}
              <p className="text-lightText text-sm leading-relaxed mb-6 flex-grow">
                "{text}"
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-heading font-semibold text-darkText text-sm">
                  {name}
                </p>
                <p className="text-lightText text-xs">
                  {location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
