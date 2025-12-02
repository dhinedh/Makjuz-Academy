import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// simple gold star SVG (filled)
const GoldStar: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="#facc15" // Tailwind yellow-400 / golden
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

// half star (gold half + gray half) if needed
const HalfGoldStar: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <div style={{ position: 'relative', width: size, height: size }}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#444"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
    <div style={{ position: 'absolute', top: 0, left: 0, overflow: 'hidden', width: '50%' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="#facc15"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </div>
  </div>
);

export type Testimonial = {
  name: string;
  course: string;
  quote: string;
  rating: number; // can be .5
  avatarUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Anbu R.',
    course: 'Machine Learning Internship',
    quote:
      'Makjuz Academy gave me a platform to work on real-time ML projects and improve my portfolio. The mentorship helped me understand everything clearly.',
    rating: 5,
    avatarUrl: 'https://ui-avatars.com/api/?name=A&background=7a3cff&color=ffffff&size=128&bold=true',
  },
  {
    name: 'Pooja S.',
    course: 'Python Full Stack (Tamil)',
    quote:
      'Learning in Tamil helped me grasp tough concepts easily. I’m more confident in building frontend and backend projects now!',
    rating: 4.5,
    avatarUrl: 'https://ui-avatars.com/api/?name=P&background=7a3cff&color=ffffff&size=128&bold=true',
  },
  {
    name: 'Arjun K.',
    course: 'Azure Data Engineering',
    quote:
      "I never imagined I’d learn Azure this well. The internship tasks were challenging and helped me prepare for real work.",
    rating: 5,
    avatarUrl:"https://ui-avatars.com/api/?name=AK&background=7a3cff&color=ffffff&size=128&bold=true",
  },
];

const cardVariants = {
  rest: { scale: 1, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' },
  hover: {
    scale: 1.03,
    boxShadow: '0 35px 70px rgba(103, 58, 183, 0.25)',
    transition: { duration: 0.25 },
  },
};

const Stars: React.FC<{ rating: number }> = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: full }, (_, i) => (
        <GoldStar key={`full-${i}`} size={16} />
      ))}
      {half && <HalfGoldStar size={16} />}
      {Array.from({ length: empty }, (_, i) => (
        <svg
          key={`empty-${i}`}
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#777"
          strokeWidth="2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { isDarkMode } = useTheme();

 
  const titleColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtitleColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  
  const cardBg = isDarkMode
    ? 'bg-white/5 border-purple-500/20'
    : 'bg-white shadow-md border-gray-100';
  const textPrimary = isDarkMode ? 'text-gray-100' : 'text-gray-900';

  return (
    <section id="testimonials" className={`   gap-8 items-center px-6 lg:px-20 py-20 relative overflow-hidden ${
        isDarkMode
          ? 'bg-gradient-to-br from-[#1A0033] via-[#2D1B69] to-[#1A0033]'
          : 'bg-gradient-to-br from-violet-50 via-purple-50 to-white'
      }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className={`text-3xl sm:text-4xl font-extrabold inline-block ${titleColor}`}>
            What Our Interns Say About Us
          </h2>
          <div className="block mt-2 w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />
          <p className={`mt-2 text-xl max-w-2xl mx-auto  ${subtitleColor}`}>
            Real experiences from students who’ve upskilled and launched their careers via Makjuz Academy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {testimonials.map(({ name, course, quote, rating, avatarUrl }, idx) => (
            <motion.div
              key={idx}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardVariants}
              className={`relative flex flex-col p-6 rounded-2xl ${cardBg} ${textPrimary} overflow-hidden transition-transform transform hover:scale-105`}
              tabIndex={0}
            >
              {/* top-right ribbon/badge */}
              <div className="absolute top-4 right-4 opacity-60">
                <Award size={24} className="text-violet-300" />
              </div>

              {/* icon circle avatar  */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={avatarUrl}
                      alt={`${name} avatar`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold">{name}</div>
                  <div className="text-sm text-indigo-200 mt-1">{course}</div>
                  <div className="mt-2">
                    <Stars rating={rating} />
                  </div>
                </div>
              </div>
              

              {/* quote */}
              <p className="text-sm leading-relaxed flex-grow">“{quote}”</p>

              {/* pill accent  */}
              <div className="mt-6 w-20 h-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
