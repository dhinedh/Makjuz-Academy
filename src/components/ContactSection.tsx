import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, User, MessageSquare, Hash, Building2, 
  Star, Sparkles, Globe, Clock, CheckCircle, ArrowRight, Zap,
  Shield, Award, Users, MessageCircle
} from 'lucide-react';
import { message } from 'antd';
import { useTheme } from '../context/ThemeContext';

const ContactSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    message.success({
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span>Message sent successfully! We'll get back to you within 24 hours.</span>
        </motion.div>
      ),
      duration: 4,
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      content: 'support@makjuz.com',
      description: '24/7 Email Support',
      link: 'mailto:support@makjuz.com',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Phone,
      title: 'Direct Line',
      content: '+91-9597430022',
      description: 'Mon-Fri, 9AM-6PM IST',
      link: 'tel:+919597430022',
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-green-500/10'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      content: 'Kanchipuram, Tamil Nadu',
      description: 'Visit our main campus',
      link: 'https://goo.gl/maps/L2yWyk1cJm92',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      bgGradient: 'from-amber-500/10 to-orange-500/10'
    }
  ];

  const branchLocation = {
    city: 'Kanchipuram',
    address: '69B, Vilakadi Kovil Street, Kanchipuram - 631501',
    mapLink: 'https://goo.gl/maps/L2yWyk1cJm92',
    isHeadquarters: true,
    established: '2020',
    students: '5000+',
    phone: '+91-9597430022',
    email: 'support@makjuz.com'
  };

  const quickStats = [
    { icon: Users, value: '5000+', label: 'Students Trained' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Globe, value: '1', label: 'Main Campus' }
  ];

  const inputFields = [
    { 
      name: 'name', 
      type: 'text', 
      icon: User, 
      placeholder: 'Your Full Name',
      gradient: 'from-violet-500 to-purple-500'
    },
    { 
      name: 'email', 
      type: 'email', 
      icon: Mail, 
      placeholder: 'your.email@example.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'subject', 
      type: 'text', 
      icon: Hash, 
      placeholder: 'What can we help you with?',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className={`absolute inset-0 ${
        isDarkMode
          ? 'bg-gradient-to-br from-[#0A051A] via-[#1A0B3A] to-[#2D1B69]'
          : 'bg-gradient-to-br from-slate-50 via-white to-violet-50'
      }`}>
        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20' 
                : 'bg-gradient-to-r from-violet-300/40 to-purple-300/40'
            }`}
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.3, 0.7, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Advanced sparkle system */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className={`absolute ${isDarkMode ? 'text-purple-400/50' : 'text-violet-400/60'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          >
            <Sparkles size={Math.random() * 10 + 6} />
          </motion.div>
        ))}

        {/* Grid pattern overlay */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)]'
        } bg-[size:40px_40px]`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          {/* Floating badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/20 mb-6"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <MessageCircle className="w-5 h-5 text-violet-500" />
            </motion.div>
            <span className={`text-sm font-semibold ${isDarkMode ? 'text-violet-300' : 'text-violet-700'}`}>
              Ready to Connect? Let's Talk!
            </span>
            <Zap className="w-4 h-4 text-amber-500" />
          </motion.div>

          {/* Main heading with enhanced animation */}
          <motion.h2
            className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get In{' '}
            <motion.span 
              className="relative inline-block bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Touch
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl blur-2xl -z-10"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Transform Your Future
            </motion.span>
          </motion.h2>

          <motion.p
            className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            Located in the heart of Kanchipuram, we're dedicated to transforming careers through 
            cutting-edge education and personalized mentorship. Visit our campus to experience excellence firsthand.
          </motion.p>

          {/* Quick stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -8 }}
                className={`p-4 rounded-xl backdrop-blur-xl border ${
                  isDarkMode 
                    ? 'bg-white/5 border-purple-500/20' 
                    : 'bg-white/80 border-violet-200/50 shadow-lg'
                }`}
              >
                <stat.icon 
                  size={28} 
                  className={`mx-auto mb-2 ${isDarkMode ? 'text-purple-400' : 'text-violet-600'}`} 
                />
                <div className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-xs ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Enhanced Contact Form - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="xl:col-span-2"
          >
            <div className={`relative p-8 rounded-3xl backdrop-blur-2xl border overflow-hidden ${
              isDarkMode
                ? 'bg-gradient-to-br from-[#1E0B36]/90 to-[#2A1B69]/90 border-purple-500/30'
                : 'bg-white/90 border-violet-200/70 shadow-xl'
            }`}>
              {/* Animated background elements */}
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"></div>
              
              {/* Header */}
              <div className="relative z-10 mb-8">
                <motion.div
                  className="flex items-center gap-3 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Send us a Message
                  </h3>
                </motion.div>
                
                <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Ready to start your journey? Drop us a message and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Enhanced input fields */}
                {inputFields.map((field, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  >
                    <div className="relative">
                      <field.icon 
                        size={18} 
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-colors duration-300 ${
                          focusedField === field.name
                            ? `bg-gradient-to-r ${field.gradient} bg-clip-text text-transparent`
                            : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}
                      />
                      
                      {/* Animated border */}
                      {focusedField === field.name && (
                        <motion.div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${field.gradient} p-0.5`}
                          layoutId="inputBorder"
                        >
                          <div className={`w-full h-full rounded-xl ${
                            isDarkMode ? 'bg-[#1E0B36]' : 'bg-white'
                          }`} />
                        </motion.div>
                      )}

                      <input
                        type={field.type}
                        name={field.name}
                        value={(formData as any)[field.name]}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder={field.placeholder}
                        className={`relative z-10 w-full px-12 py-3 rounded-xl border bg-transparent focus:outline-none transition-all ${
                          focusedField === field.name
                            ? 'border-transparent'
                            : isDarkMode
                            ? 'bg-white/5 border-purple-500/30 text-white focus:border-purple-400/50'
                            : 'bg-white/70 border-violet-200 text-gray-900 focus:border-violet-400/70'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Enhanced message field */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="relative">
                    <MessageSquare 
                      size={18} 
                      className={`absolute left-4 top-6 z-10 transition-colors duration-300 ${
                        focusedField === 'message'
                          ? 'text-purple-500'
                          : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    />
                    
                    {focusedField === 'message' && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-0.5"
                        layoutId="textareaBorder"
                      >
                        <div className={`w-full h-full rounded-xl ${
                          isDarkMode ? 'bg-[#1E0B36]' : 'bg-white'
                        }`} />
                      </motion.div>
                    )}

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      placeholder="Tell us about your goals, questions, or how we can help you..."
                      className={`relative z-10 w-full px-12 py-4 rounded-xl border bg-transparent focus:outline-none resize-none transition-all ${
                        focusedField === 'message'
                          ? 'border-transparent'
                          : isDarkMode
                          ? 'bg-white/5 border-purple-500/30 text-white focus:border-purple-400/50'
                          : 'bg-white/70 border-violet-200 text-gray-900 focus:border-violet-400/70'
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Enhanced submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: isDarkMode
                      ? '0 0 40px rgba(186, 85, 211, 0.6)'
                      : '0 0 40px rgba(138, 43, 226, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`group w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 text-white'
                      : 'bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 text-white'
                  }`}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Progress bar */}
                  {isSubmitting && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, ease: 'linear' }}
                      className="absolute bottom-0 left-0 h-1 bg-white/40"
                    />
                  )}

                  <motion.div
                    className="relative z-10 flex items-center gap-3"
                    animate={isSubmitting ? { x: [0, 5, -5, 0] } : {}}
                    transition={{ repeat: isSubmitting ? Infinity : 0, duration: 0.5 }}
                  >
                    <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    <motion.div
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.div>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Enhanced Right Sidebar - Contact Info & Branches */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className={`p-6 rounded-3xl backdrop-blur-2xl border ${
              isDarkMode 
                ? 'bg-gradient-to-br from-[#1E0B36]/90 to-[#2A1B69]/90 border-purple-500/30' 
                : 'bg-white/90 border-violet-200/70 shadow-xl'
            }`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <div className="w-7 h-7 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                Contact Options
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`block p-5 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                      isDarkMode
                        ? 'bg-white/5 border border-purple-500/20 hover:border-purple-400/50'
                        : 'bg-white/80 border border-violet-200/50 hover:border-violet-300/70 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative flex items-start gap-3">
                      <motion.div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-r ${info.gradient} shadow-xl`}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <info.icon size={20} className="text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className={`font-bold text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {info.title}
                        </h4>
                        <p className={`font-medium text-sm ${isDarkMode ? 'text-purple-300' : 'text-violet-600'}`}>
                          {info.content}
                        </p>
                        <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {info.description}
                        </p>
                      </div>

                      <ArrowRight 
                        size={14} 
                        className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                          isDarkMode ? 'text-purple-400' : 'text-violet-600'
                        }`}
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enhanced Campus Location & Map */}
            <div className={`p-6 rounded-3xl backdrop-blur-2xl border ${
              isDarkMode 
                ? 'bg-gradient-to-br from-[#1E0B36]/90 to-[#2A1B69]/90 border-purple-500/30' 
                : 'bg-white/90 border-violet-200/70 shadow-xl'
            }`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <div className="w-7 h-7 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                Our Campus
              </h3>
              
              {/* Campus Information Card */}
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                className={`p-5 rounded-2xl transition-all duration-300 group relative overflow-hidden mb-5 ${
                  isDarkMode
                    ? 'bg-white/5 border border-purple-500/20 hover:border-purple-400/50'
                    : 'bg-white/80 border border-violet-200/50 hover:border-violet-300/70 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Headquarters badge */}
                <div className="absolute top-3 right-3">
                  <div className="px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Star size={10} />
                    HEADQUARTERS
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30' 
                      : 'bg-gradient-to-br from-pink-100 to-rose-100 border border-pink-200'
                  }`}>
                    <Building2 
                      size={16} 
                      className={isDarkMode ? 'text-pink-400' : 'text-rose-600'} 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg flex items-center gap-2 mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Makjuz Academy - {branchLocation.city}
                    </h4>
                    
                    <p className={`text-xs mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {branchLocation.address}
                    </p>
                    
                    {/* Campus stats */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className={`flex items-center gap-1 text-xs ${
                        isDarkMode ? 'text-emerald-400' : 'text-emerald-600'
                      }`}>
                        <Users size={14} />
                        <span>{branchLocation.students}</span>
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        <Clock size={14} />
                        <span>Est. {branchLocation.established}</span>
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${
                        isDarkMode ? 'text-purple-400' : 'text-purple-600'
                      }`}>
                        <Phone size={14} />
                        <span>{branchLocation.phone}</span>
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${
                        isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
                      }`}>
                        <Mail size={14} />
                        <span>{branchLocation.email}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Map */}
                <div className="relative rounded-xl overflow-hidden border border-violet-200/50 group-hover:border-violet-300/70 transition-all duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0849842313495!2d79.69894431482286!3d12.83436999091464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d6b4d4b4b4%3A0x4d4b4b4b4b4b4b4b!2s69B%2C%20Vilakadi%20Kovil%20Street%2C%20Kanchipuram%2C%20Tamil%20Nadu%20631501!5e0!3m2!1sen!2sin!4v1647856789123!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                  
                  {/* Map overlay with visit button */}
                  <motion.a
                    href={branchLocation.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-3 right-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-1 rounded-lg font-semibold text-xs shadow-lg flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <MapPin size={14} />
                    <span>Open in Maps</span>
                    <ArrowRight size={12} />
                  </motion.a>
                </div>

                {/* Visit us CTA */}
                <div className="mt-4 p-3 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Visit Our Campus
                      </h5>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Schedule a campus tour
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-1 rounded-lg font-medium text-xs flex items-center gap-1"
                    >
                      <Building2 size={14} />
                      Book Tour
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <motion.div
              className={`p-5 rounded-2xl backdrop-blur-xl border text-center ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-[#1E0B36]/90 to-[#2A1B69]/90 border-purple-500/30' 
                  : 'bg-white/90 border-violet-200/70 shadow-lg'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className={`font-bold text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Trusted & Secure
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-green-500" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    GDPR Compliant
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-green-500" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    ISO Certified
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-amber-500" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    4.9/5 Rating
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Award size={14} className="text-purple-500" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Award Winning
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className={`p-6 rounded-3xl backdrop-blur-2xl border relative overflow-hidden ${
            isDarkMode 
              ? 'bg-gradient-to-r from-[#1E0B36]/90 to-[#2A1B69]/90 border-purple-500/30' 
              : 'bg-gradient-to-r from-white/90 to-violet-50/90 border-violet-200/70 shadow-xl'
          }`}>
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 animate-pulse"></div>
            
            <div className="relative z-10">
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Ready to Start Your Journey?
              </h3>
              
              <p className={`text-base mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Join thousands of successful students who have transformed their careers with us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  href="#courses"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: isDarkMode 
                      ? '0 0 30px rgba(186, 85, 211, 0.5)' 
                      : '0 0 30px rgba(138, 43, 226, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-semibold text-base shadow-xl overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center gap-2">
                    <Zap size={18} />
                    Explore Courses
                    <motion.div className="group-hover:translate-x-1 transition-transform duration-200">
                      <ArrowRight size={18} />
                    </motion.div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="tel:+919597430022"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-base backdrop-blur-xl transition-all duration-300 border ${
                    isDarkMode
                      ? "bg-white/5 border-purple-500/30 hover:bg-white/10 hover:border-purple-400/50 text-gray-200"
                      : "bg-white/70 border-violet-200/70 hover:bg-white/90 hover:border-violet-300/80 text-gray-700 shadow-lg"
                  }`}
                >
                  <Phone size={18} />
                  Call Now: +91-9597430022
                </motion.a>
              </div>

              <div className={`mt-4 text-xs flex items-center justify-center gap-3 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-green-500" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield size={14} className="text-blue-500" />
                  <span>Secure & Private</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;