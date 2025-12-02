import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Award,
  GraduationCap,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const reasons = [
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: "Networking Opportunities",
    description:
      "Join a community of like-minded peers and professionals to expand your network.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-400" />,
    title: "Career Support and Placement Assistance",
    description:
      "Benefit from dedicated career support services, including resume building, interview preparation, and job placement assistance.",
  },
  {
    icon: <Award className="w-8 h-8 text-purple-400" />,
    title: "Certification and Recognition",
    description:
      "Earn industry-recognized certifications upon completion of your courses.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
    title: "Personalized Learning Experience",
    description:
      "Receive personalized attention and mentorship to address your unique learning needs and career goal.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ReasonsSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  const titleColor = isDarkMode ? "text-white" : "text-gray-900";
  const subtitleColor = isDarkMode ? "text-gray-300" : "text-gray-600";

  return (
    <section
      id="reasons"
      className={`px-6 lg:px-20 py-20 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-[#1A0033] via-[#2D1B69] to-[#1A0033]"
          : "bg-gradient-to-br from-violet-50 via-purple-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h3
            className={`text-sm uppercase tracking-wider font-semibold ${subtitleColor}`}
          >
            There are many academies
          </h3>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold mt-2 leading-snug ${titleColor}`}
          >
            But here is the Reason  Choosing {""}
            <span className="text-purple-500">Makjuz Academy</span> for <br />
            
          </h2>

          <div className="mt-10 space-y-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                className="flex items-start space-x-4"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100/10">
                  {reason.icon}
                </div>
                <div>
                  <h4 className={`text-lg font-semibold ${titleColor}`}>
                    {reason.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${subtitleColor}`}>
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Illustration Placeholder) */}
        <div className="flex justify-center items-center">
          <motion.img
            src="/src/Assets/ReasonsSection.png" 
            alt="Reasons Illustration"
            className="max-w-md md:max-w-lg lg:max-w-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;