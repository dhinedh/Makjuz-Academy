import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Zap, ArrowRight, Sparkles, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AboutSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  const features = [
    {
      icon: Target,
      title: 'Industry-Focused Curriculum',
      description: 'Our courses are designed with input from top tech companies to ensure you learn the most relevant skills.',
      gradient: 'from-emerald-400 to-cyan-500',
      bgGradient: 'from-emerald-500/10 to-cyan-500/10'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from seasoned professionals who have worked at leading companies like Google, Amazon, and Microsoft.',
      gradient: 'from-orange-400 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    {
      icon: Award,
      title: 'Recognized Certifications',
      description: 'Earn certificates that are valued by employers and add credibility to your professional profile.',
      gradient: 'from-amber-400 to-orange-500',
      bgGradient: 'from-amber-500/10 to-orange-500/10'
    },
    {
      icon: Zap,
      title: 'Hands-on Projects',
      description: 'Build real-world projects that demonstrate your skills and create an impressive portfolio.',
      gradient: 'from-violet-400 to-purple-600',
      bgGradient: 'from-violet-500/10 to-purple-600/10'
    }
  ];

  const stats = [
    { number: '100+', label: 'Graduates', icon: Users },
    { number: '95%', label: 'Job Placement', icon: Target },
    { number: '50+', label: 'Partner Companies', icon: Award }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-[#0F0728] via-[#2D1B69] to-[#1A0033]' 
          : 'bg-gradient-to-br from-slate-50 via-white to-violet-50'
      }`}>
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [-10, 30, -10],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl"
        />
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${isDarkMode ? 'text-purple-400/30' : 'text-violet-400/40'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <Sparkles size={16} />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-purple-400" />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
              Transforming Education
            </span>
          </motion.div>

          <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About{' '}
            <motion.span 
              className="relative inline-block bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Makjuz Academy
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-xl blur-xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className={`p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 ${
              isDarkMode 
                ? 'bg-white/5 border-purple-500/20 hover:border-purple-400/40' 
                : 'bg-white/80 border-violet-200/50 hover:border-violet-300/70 shadow-2xl'
            }`}>
              <p className={`text-xl mb-6 leading-relaxed ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                We're revolutionizing education by combining cutting-edge technology with proven teaching methodologies. 
                Our mission is to bridge the gap between academic learning and industry requirements.
              </p>

              <p className={`text-xl leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                With over 100 successful graduates and partnerships with top tech companies, we've established 
                ourselves as a leader in technical education and professional development.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-2xl text-center backdrop-blur-xl border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-purple-500/20' 
                      : 'bg-white/90 border-violet-200/50 shadow-xl'
                  }`}
                >
                  <stat.icon 
                    size={20} 
                    className={`mx-auto mb-2 ${isDarkMode ? 'text-purple-400' : 'text-violet-600'}`} 
                  />
                  <div className={`text-2xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: isDarkMode 
                  ? '0 0 40px rgba(186, 85, 211, 0.6)' 
                  : '0 0 40px rgba(138, 43, 226, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className={`group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-xl shadow-purple-500/30'
                  : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-xl shadow-violet-400/30'
              }`}
            >
              Discover Our Story
              <motion.div
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Enhanced Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  rotate: -2,
                  transition: { duration: 0.3 }
                }}
                className={`group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden ${
                  isDarkMode 
                    ? 'bg-white/5 border-purple-500/20 hover:border-purple-400/50 hover:bg-white/10' 
                    : 'bg-white/90 border-violet-200/50 hover:border-violet-400/70 shadow-xl hover:shadow-2xl'
                }`}
              >
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon with enhanced styling */}
                <motion.div 
                  className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.bgGradient} border ${
                    isDarkMode ? 'border-purple-500/20' : 'border-violet-200/50'
                  }`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon 
                    size={28} 
                    className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                  />
                  
                  {/* Animated ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100`}
                    style={{
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'exclude'
                    }}
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
                
                <div className="relative">
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <motion.div
                  className={`absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDarkMode ? 'text-purple-400' : 'text-violet-600'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;