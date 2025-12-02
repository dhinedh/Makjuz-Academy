import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

export type Benefit = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

import { UserCheck, ClipboardCheck, Briefcase, Video } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';



const benefits: Benefit[] = [
  {
    title: 'Professional Mentoring',
    description: 'One-to-one mentorship from Experts',
    Icon: UserCheck,
  },
  {
    title: 'Gain Work-Experience',
    description: 'Challenge and Task-based learning',
    Icon: ClipboardCheck,
  },
  {
    title: 'Great Career',
    description: '100% Life-long Placement Assistance',
    Icon: Briefcase,
  },
  {
    title: 'Quality Classes',
    description: 'Live Online sessions & flexible timing',
    Icon: Video,
  },
];

const cardVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
    transition: { duration: 0.3 },
  },
};

const WhyChooseUs: React.FC = () => {
  const { isDarkMode } = useTheme();

   
  const titleColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtitleColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDarkMode
    ? 'bg-white/5 border-purple-500/20'
    : 'bg-white shadow-md border-gray-100';
  const iconBg = isDarkMode
    ? 'bg-gradient-to-tr from-purple-600 to-violet-500 text-white'
    : 'bg-violet-100 text-violet-700';

  return (
    <section id="why-choose-us" 
    className={`   gap-8 items-center px-6 lg:px-20 py-20 relative overflow-hidden ${
        isDarkMode
          ? 'bg-gradient-to-br from-[#1A0033] via-[#2D1B69] to-[#1A0033]'
          : 'bg-gradient-to-br from-violet-50 via-purple-50 to-white'
      }`}>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-extrabold inline-block relative ${titleColor}`}>
            Why Choose Us
            <span
              aria-hidden="true"
              className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600"
            />
          </h2>
          <p className={`mt-3 text-large sm:text-lg max-w-2xl mx-auto ${subtitleColor}`}>
            We give you personalized guidance, real-world practice, and lifelong support to accelerate
            your career.
          </p>
        </div>
    
       {/* Floating Icons */}
        {[
        { Icon: BookOpen, delay: 0, x: -20, y: 20, top: '15%', left: '10%' },
        { Icon: Users, delay: 0.5, x: 30, y: -15, top: '30%', left: '80%' },
        {Icon: BookOpen, delay: 0, x: -20, y: 20, top: '15%', left: '10%'},
        { Icon: Award, delay: 1, x: 70, y: -10, top: '60%', left: '20%' },
        { Icon: TrendingUp, delay: 1.5, x: 20, y: 25, top: '75%', left: '75%' }
      ].map(({ Icon, delay, x, y, top, left }, i) => (
        <motion.div
          key={i}
          className={`absolute ${
            isDarkMode ? 'text-purple-400/30' : 'text-violet-400/40'
          }`}
          style={{ top, left }}
          animate={{ y: [0, y, 0], x: [0, x, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={48} />
        </motion.div>
      ))}


        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(({ title, description, Icon }, idx) => (
            <motion.div
              key={idx}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardVariants}
              className={`relative flex flex-col items-start p-6 rounded-2xl transition-all duration-300 border ${cardBg}`}
              aria-label={title}
              tabIndex={0}
            >
              <div className={`p-3 rounded-full mb-4 relative flex items-center ${iconBg}`}>
                <Icon size={50} aria-hidden="true"  />
              </div>
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-sm leading-relaxed">{description}</p>
              <div
                aria-hidden="true"
                className="px-5 py-2 rounded-full font-medium text-white bg-gradient-to-r from-violet-500 to-indigo-500 hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-violet-400"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
