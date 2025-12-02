import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export type Program = {
  id: number;
  title: string;
  description: string;
};

const trendingPrograms: Program[] = [
  { id: 7, title: 'Azure Data Engineering', description: 'Master data pipelines, ETL, and analytics on Microsoft Azure.' },
  { id: 8, title: 'Cloud Computing & Engineering', description: 'Learn cloud infrastructure, deployment, and management across platforms.' },
  { id: 5, title: 'Generative AI', description: 'Explore generative models, LLMs, and AI-driven content creation.' },
  { id: 3, title: 'Data Science Fundamentals', description: 'Analyse data, extract insights, and drive business decisions with data science.' },
  { id: 1, title: 'Machine Learning', description: 'Build predictive models and algorithms using machine learning techniques.' },
  { id: 6, title: 'Full Stack Development', description: 'Develop robust web applications with front-end and back-end technologies.' },
];

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04, boxShadow: '0 25px 50px rgba(103, 58, 183, 0.15)', transition: { duration: 0.2 } },
};

const TrendingCourses: React.FC = () => {
  const { isDarkMode } = useTheme();

  const titleColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtitleColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDarkMode ? 'bg-white/5 border-purple-500/20' : 'bg-white shadow-md border-gray-100';
  const textPrimary = isDarkMode ? 'text-gray-100' : 'text-gray-900';

  return (
      <section
          id="trending-courses"
          className={`gap-8 items-center px-6 lg:px-20 py-20 relative overflow-hidden ${
              isDarkMode
                  ? 'bg-gradient-to-br from-[#1A0033] via-[#2D1B69] to-[#1A0033]'
                  : 'bg-gradient-to-br from-violet-50 via-purple-50 to-white'
          }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-extrabold inline-block relative ${titleColor}`}>
              Trending Courses
              <span
                  aria-hidden="true"
                  className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600"
              />
            </h2>
            <p className={`mt-3 text-large sm:text-lg max-w-2xl mx-auto ${subtitleColor}`}>
              Upskill with industry-relevant programs curated to accelerate your career.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingPrograms.map((course) => (
                <motion.div
                    key={course.id}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={cardVariants}
                    className={`relative flex flex-col justify-between p-6 rounded-2xl ${cardBg} ${textPrimary} transform transition hover:scale-105`}
                    tabIndex={0}
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <p className="text-sm leading-relaxed">{course.description}</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <motion.button
                        type="button"

                        whileTap={{ scale: 0.98 }}
                        onClick={() => (window.location.href = `/courses/${course.id}`)}
                        aria-label={`Know more about ${course.title}`}
                        className={`px-5 py-2 rounded-full font-medium bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white hover:opacity-90 transition`}
                    >
                      Details
                    </motion.button>
                  </div>
                  <div className="absolute bottom-4 left-6 w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default TrendingCourses;
