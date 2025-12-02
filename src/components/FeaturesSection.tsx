import React from "react";
import { motion } from "framer-motion";
import { DollarSign, ClipboardList, Calendar } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const features = [
  {
    icon: <DollarSign className="w-8 h-8 text-purple-400" />,
    title: "Affordable fees",
    description:
      "Discover affordable fees and high-value learning opportunities at Makjuz Academy, where your career aspirations meet reality.",
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-purple-400" />,
    title: "Live Projects",
    description:
      "Our courses are designed to bridge the gap between theory and practice. Our LIVE Projects allow students to work on real-world scenarios under the guidance of industry experts.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-purple-400" />,
    title: "Flexibility",
    description:
      "We understand that flexibility is key to accommodating your busy schedule. Whether you prefer to learn in-person or online, we offer flexible learning options to suit your needs.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const FeaturesSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  const titleColor = isDarkMode ? "text-white" : "text-gray-900";
  const subtitleColor = isDarkMode ? "text-gray-300" : "text-gray-600";

  return (
    <section
      id="features"
      className={`px-6 lg:px-20 py-20 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-[#1A0033] via-[#2D1B69] to-[#1A0033]"
          : "bg-gradient-to-br from-violet-50 via-purple-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Subtitle */}
        <h3
          className={`text-sm uppercase tracking-wider font-semibold ${subtitleColor}`}
        >
          Join us to elevate
        </h3>

        {/* Title */}
        <h2
          className={`text-3xl sm:text-4xl font-extrabold mt-2 leading-snug ${titleColor}`}
        >
          Your <span className="text-purple-500">IT career</span> with unparalleled
          <br /> Training and Support!
        </h2>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={`p-8 rounded-2xl shadow-lg ${
                isDarkMode
                  ? "bg-purple-950/40 hover:shadow-purple-500/30"
                  : "bg-white hover:shadow-purple-200"
              } transition duration-300`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-semibold mb-2 ${titleColor}`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${subtitleColor}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
