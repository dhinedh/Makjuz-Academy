import React, { useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { useTheme } from "../context/ThemeContext";
import {
  BookOpen,
  Brain,
  BarChart,
  FlaskConical,
  Database,
  Sparkles,
  Cloud,
  Trophy,
  Gift,
  Share2,
} from "lucide-react";

const navItems = [
  { label: "Courses", icon: <BookOpen size={20} /> },
  { label: "Machine Learning", icon: <Brain size={20} /> },
  { label: "Data Analytics", icon: <BarChart size={20} /> },
  { label: "Data Science", icon: <FlaskConical size={20} /> },
  { label: "SQL Database Management", icon: <Database size={20} /> },
  { label: "Generative AI", icon: <Sparkles size={20} /> },
  { label: "Cloud Engineering", icon: <Cloud size={20} /> },
  { label: "Leaderboard", icon: <Trophy size={20} /> },
  { label: "Rewards", icon: <Gift size={20} /> },
  { label: "Referral", icon: <Share2 size={20} /> },
];

const CoursesSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Courses");

  // Sidebar theme
  const sidebarClasses = isDarkMode
    ? "bg-gradient-to-b from-[#1A0033] via-[#2D1B69] to-[#1A0033] border-r border-purple-500/20"
    : "bg-gradient-to-b from-violet-50 via-purple-50 to-white border-r border-gray-200";

  const navText = isDarkMode ? "text-gray-300" : "text-gray-700";
  const navHover = isDarkMode ? "hover:bg-purple-700/40" : "hover:bg-purple-100";

  const courses = {
    dataScience: [
      {
        id: 1,
        title: "Machine Learning",
        description:
          "Master deep learning, neural networks, and AI algorithms with hands-on projects and real-world applications.",
        duration: "12 weeks",
        students: 2840,
        rating: 4.9,
        level: "Advanced" as const,
        price: "₹20,000",
        image:
          "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
        tags: ["Python", "TensorFlow", "Deep Learning"],
      },
      {
        id: 2,
        title: "Data Analytics",
        description:
          "Learn data visualization, statistical analysis, and business intelligence tools to make data-driven decisions.",
        duration: "8 weeks",
        students: 1920,
        rating: 4.8,
        level: "Intermediate" as const,
        price: "₹15,000",
        image:
          "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=400",
        tags: ["SQL", "Tableau", "Statistics"],
      },
      {
        id: 3,
        title: "Data Science",
        description:
          "Start your data science journey with Python programming, pandas, numpy, and data manipulation techniques.",
        duration: "6 weeks",
        students: 3560,
        rating: 4.7,
        level: "Beginner" as const,
        price: "₹10,000",
        image:
          "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=400",
        tags: ["Python", "Pandas", "NumPy"],
      },
    ],
    cloudEngineering: [
      {
        id: 4,
        title: "SQL Database Management",
        description:
          "Master the art of managing, querying, and optimizing databases for robust data integrity and performance.",
        duration: "10 weeks",
        students: 2240,
        rating: 4.9,
        level: "Advanced" as const,
        price: "₹20,000",
        image:
          "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400",
        tags: ["SQL Server", "Data Warehousing", "T-SQL/PL/SQL"],
      },
      {
        id: 5,
        title: "Generative AI",
        description:
          "Create intelligent and dynamic content, from text to images, with the power of Generative AI.",
        duration: "8 weeks",
        students: 1680,
        rating: 4.8,
        level: "Intermediate" as const,
        price: "₹15,000",
        image:
          "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400",
        tags: ["AI Ethics", "Creative AI", "Prompt Engineering"],
      },
      {
        id: 6,
        title: "Cloud Engineering",
        description:
          "Introduction to cloud computing concepts, services, and deployment models across major cloud platforms.",
        duration: "4 weeks",
        students: 4120,
        rating: 4.6,
        level: "Beginner" as const,
        price: "₹10,000",
        image:
          "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        tags: ["Cloud Computing", "AWS", "Azure"],
      },
    ],
  };

  const allCourses = [...courses.dataScience, ...courses.cloudEngineering];

  return (
    <section
      id="courses"
      className={`py-20 flex ${
        isDarkMode
          ? "bg-gradient-to-b from-[#1A0033] to-[#2D1B69]"
          : "bg-gradient-to-b from-violet-50 to-white"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`${sidebarClasses} shadow-lg transition-all duration-300 ${
          isOpen ? "w-56" : "w-16"
        } h-screen`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 m-2 rounded-lg ${
            isDarkMode
              ? "hover:bg-purple-700/40 text-purple-300"
              : "hover:bg-purple-100 text-purple-600"
          }`}
        >
          ☰
        </button>

        <ul className="mt-4 space-y-2">
          {navItems.map((item, index) => {
            const isActive = selectedItem === item.label;
            return (
              <li
                key={index}
                onClick={() => setSelectedItem(item.label)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  isActive
                    ? isDarkMode
                      ? "bg-purple-800/60 text-purple-300 shadow-lg shadow-purple-500/30"
                      : "bg-purple-200 text-purple-900 shadow-md"
                    : `${navText} ${navHover}`
                }`}
              >
                {item.icon}
                {isOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Featured Courses
              </span>
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Explore our comprehensive curriculum designed by industry experts
              to accelerate your career!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
