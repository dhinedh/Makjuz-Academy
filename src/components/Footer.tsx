import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/makjuztechnologies/posts/?feedView=all', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:support@makjuz.com', label: 'Email' }
  ];

  const footerLinks = {
    'Courses': ['Data Science', 'Cloud Engineering', 'AI & Machine Learning', 'Web Development'],
    'Company': ['About Us', 'Careers', 'Blog', 'Press'],
    'Support': ['Help Center', 'Contact Us', 'Community', 'Documentation'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy']
  };

  return (
    <footer className={`${
      isDarkMode 
        ? 'bg-gradient-to-b from-[#2D1B69] to-[#1A0033]' 
        : 'bg-gradient-to-b from-gray-900 to-black'
    } text-white py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
              <img
                src="/Assets/Logo1.png"
                alt="Makjuz Logo"
                className="w-40 md:w-48 h-auto object-contain" 
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 mb-6 leading-relaxed max-w-sm"
            >
              Empowering the next generation of tech professionals with cutting-edge education and industry-relevant skills.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-purple-300' 
                      : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`pt-8 border-t ${
            isDarkMode ? 'border-purple-500/20' : 'border-gray-700'
          } flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0`}
        >
          <p className="text-gray-400 text-sm">
            © 2025 Makjuz Academy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
