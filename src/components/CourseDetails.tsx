import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Users, Star, ArrowLeft, BookOpen, CheckCircle, Award, Layers, BarChart2, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from '../context/ThemeContext';
import Navbar from './Navbar'; 
// @ts-ignore
import ContactPopup from './contactPopUp';


// Using the expanded course data you provided
const allCourses = [
  {
    id: 1,
    title: 'Machine Learning',
    description: 'Master deep learning, neural networks, and AI algorithms with hands-on projects.',
    longDescription: 'This comprehensive 12-week program takes you from fundamental ML concepts to advanced neural networks. You\'ll implement algorithms using TensorFlow/PyTorch, work on computer vision/NLP projects, and learn model deployment in production environments. Includes two capstone projects with industry-relevant datasets.',
    duration: '12 weeks',
    students: 2840,
    rating: 4.9,
    level: 'Advanced',
    price: '₹20,000',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Python', 'TensorFlow', 'Deep Learning', 'Neural Networks', 'AI'],
    syllabus: [
      { week: 1, topic: 'ML Fundamentals', content: 'Supervised vs unsupervised learning, applications' },
      { week: 2, topic: 'Python for DS', content: 'NumPy, Pandas, Matplotlib/Seaborn' },
      { week: 3, topic: 'Regression Models', content: 'Linear, polynomial, regularization techniques' },
      { week: 4, topic: 'Classification', content: 'Logistic regression, SVMs, decision trees' },
      { week: 5, topic: 'Neural Networks', content: 'Perceptrons, activation functions, backpropagation' },
      { week: 6, topic: 'TensorFlow/Keras', content: 'Building and training models' },
      { week: 7, topic: 'Computer Vision', content: 'CNNs, transfer learning, YOLO' },
      { week: 8, topic: 'NLP', content: 'RNNs, LSTMs, transformer architectures' },
      { week: 9, topic: 'Unsupervised Learning', content: 'Clustering, PCA, anomaly detection' },
      { week: 10, topic: 'Model Deployment', content: 'Flask/Django APIs, Docker, AWS SageMaker' },
      { week: '11-12', topic: 'Capstone Projects', content: 'End-to-end industry problems' }
    ],
    prerequisites: ['Python basics', 'Linear algebra fundamentals', 'Basic calculus'],
    outcomes: [
      'Build and optimize neural networks',
      'Implement CV/NLP solutions',
      'Deploy models using cloud services',
      'Understand ML model interpretability'
    ],
    resources: [
      '300+ coding exercises',
      'Cloud GPU credits',
      'Industry datasets',
      'Weekly live debugging sessions'
    ],
    certification: 'Verified certificate with project portfolio'
  },
  {
    id: 2,
    title: 'Data Analytics',
    description: 'Master data visualization, statistical analysis, and business intelligence tools.',
    longDescription: 'This 8-week intensive program covers the complete data analysis pipeline from data cleaning to dashboard creation. Learn SQL, Tableau, Power BI, and statistical analysis using Python/R. Includes real-world case studies from finance, healthcare, and e-commerce domains.',
    duration: '8 weeks',
    students: 1920,
    rating: 4.8,
    level: 'Intermediate',
    price: '₹15,000',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['SQL', 'Tableau', 'Statistics', 'Excel', 'Power BI'],
    syllabus: [
      { week: 1, topic: 'Data Wrangling', content: 'Cleaning, transformation, feature engineering' },
      { week: 2, topic: 'Exploratory Analysis', content: 'Descriptive stats, correlation analysis' },
      { week: 3, topic: 'SQL Mastery', content: 'Complex queries, window functions, optimization' },
      { week: 4, topic: 'Statistical Methods', content: 'Hypothesis testing, regression analysis' },
      { week: 5, topic: 'Visualization Tools', content: 'Tableau, Power BI, Plotly' },
      { week: 6, topic: 'Python/R for Analytics', content: 'Pandas, ggplot, statistical modeling' },
      { week: 7, topic: 'Dashboard Design', content: 'Storytelling with data, KPI selection' },
      { week: 8, topic: 'Capstone Project', content: 'End-to-end analysis of business dataset' }
    ],
    prerequisites: ['Basic spreadsheet knowledge', 'High school math'],
    outcomes: [
      'Clean and transform messy datasets',
      'Create interactive dashboards',
      'Perform statistical analysis',
      'Extract business insights'
    ],
    resources: [
      'Sample datasets from 10+ industries',
      'Tableau Public license',
      'SQL playground environment',
      'Case study repository'
    ]
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    description: 'Build core data science skills with Python programming and data manipulation.',
    longDescription: '6-week foundational course covering Python programming, data analysis with Pandas, visualization with Matplotlib/Seaborn, and introductory machine learning. Perfect for beginners looking to enter the data field.',
    duration: '6 weeks',
    students: 3560,
    rating: 4.7,
    level: 'Beginner',
    price: '₹10,000',
    image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA'],
    syllabus: [
      { week: 1, topic: 'Python Basics', content: 'Syntax, data structures, functions' },
      { week: 2, topic: 'NumPy/Pandas', content: 'Arrays, DataFrames, data manipulation' },
      { week: 3, topic: 'Data Visualization', content: 'Matplotlib, Seaborn, plot types' },
      { week: 4, topic: 'Data Cleaning', content: 'Handling missing data, outliers' },
      { week: 5, topic: 'Intro to ML', content: 'Basic regression/classification' },
      { week: 6, topic: 'Final Project', content: 'Complete analysis workflow' }
    ],
    prerequisites: ['No prior experience required'],
    outcomes: [
      'Write Python scripts for data tasks',
      'Perform exploratory data analysis',
      'Create basic visualizations',
      'Understand ML workflow'
    ]
  },
  {
    id: 4,
    title: 'SQL Database Management',
    description: 'Master database design, querying, and optimization techniques.',
    longDescription: '10-week deep dive into relational databases covering design principles, complex queries, performance tuning, and administration. Includes hands-on projects with PostgreSQL, MySQL, and SQL Server.',
    duration: '10 weeks',
    students: 2240,
    rating: 4.9,
    level: 'Advanced',
    price: '₹20,000',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['SQL Server', 'Data Warehousing', 'T-SQL/PL-SQL', 'Indexing', 'ETL'],
    syllabus: [
      { week: 1, topic: 'Database Design', content: 'Normalization, ER diagrams' },
      { week: 2, topic: 'SQL Fundamentals', content: 'CRUD operations, joins' },
      { week: 3, topic: 'Advanced Queries', content: 'CTEs, window functions' },
      { week: 4, topic: 'Performance Tuning', content: 'Indexing, query plans' },
      { week: 5, topic: 'Stored Procedures', content: 'T-SQL/PL-SQL programming' },
      { week: 6, topic: 'Data Warehousing', content: 'Star schema, ETL processes' },
      { week: 7, topic: 'Security', content: 'Roles, permissions, encryption' },
      { week: 8, topic: 'Cloud Databases', content: 'Azure SQL, AWS RDS' },
      { week: 9-10, topic: 'Capstone Project', content: 'Design and optimize database' }
    ],
    outcomes: [
      'Design optimized database schemas',
      'Write complex analytical queries',
      'Tune database performance',
      'Implement ETL pipelines'
    ]
  },
  {
    id: 5,
    title: 'Generative AI',
    description: 'Create intelligent content with cutting-edge generative models.',
    longDescription: '8-week exploration of generative AI covering GANs, transformers, diffusion models, and their applications in text, image, and audio generation. Hands-on projects with Stable Diffusion, GPT, and DALL-E architectures.',
    duration: '8 weeks',
    students: 1680,
    rating: 4.8,
    level: 'Intermediate',
    price: '₹15,000',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Transformers', 'GANs', 'Diffusion Models', 'Prompt Engineering', 'LLMs'],
    syllabus: [
      { week: 1, topic: 'GenAI Fundamentals', content: 'History, applications, ethics' },
      { week: 2, topic: 'Neural Networks Review', content: 'Architectures, training' },
      { week: 3, topic: 'GANs', content: 'Architecture, training challenges' },
      { week: 4, topic: 'Transformers', content: 'Attention mechanisms, GPT' },
      { week: 5, topic: 'Diffusion Models', content: 'Stable Diffusion, DALL-E' },
      { week: 6, topic: 'Prompt Engineering', content: 'Techniques, best practices' },
      { week: 7, topic: 'Applications', content: 'Text, image, audio generation' },
      { week: 8, topic: 'Capstone Project', content: 'Build custom generator' }
    ],
    outcomes: [
      'Understand generative model architectures',
      'Fine-tune pretrained models',
      'Develop effective prompts',
      'Ethical considerations'
    ]
  },
  {
    id: 6,
    title: 'Cloud Engineering',
    description: 'Master cloud computing concepts across major platforms.',
    longDescription: '4-week intensive covering AWS, Azure, and GCP services. Learn infrastructure as code (Terraform), containerization (Docker/Kubernetes), and serverless architectures through hands-on labs.',
    duration: '4 weeks',
    students: 4120,
    rating: 4.6,
    level: 'Beginner',
    price: '₹10,000',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['AWS', 'Azure', 'Terraform', 'Docker', 'Serverless'],
    syllabus: [
      { week: 1, topic: 'Cloud Fundamentals', content: 'IaaS/PaaS/SaaS, pricing models' },
      { week: 2, topic: 'AWS Core Services', content: 'EC2, S3, Lambda, RDS' },
      { week: 3, topic: 'Infrastructure as Code', content: 'Terraform, CloudFormation' },
      { week: 4, topic: 'Containers & Orchestration', content: 'Docker, Kubernetes basics' }
    ],
    outcomes: [
      'Deploy cloud infrastructure',
      'Automate provisioning',
      'Containerize applications',
      'Understand cloud security'
    ]
  },
  {
    id: 7,
    title: 'Azure Data Engineering',
    description: 'Build and manage data pipelines on Microsoft Azure.',
    longDescription: '4-week specialization in Azure data services including Data Factory, Databricks, Synapse Analytics, and Cosmos DB. Real-world data pipeline projects with streaming and batch processing.',
    duration: '4 weeks',
    students: 4120,
    rating: 4.5,
    level: 'Advanced',
    price: '₹20,000',
    image: 'https://www.springboard.com/library/static/a157b5c003f08af17664a602ba426b05/b17f8/data-engineering-on-azure.jpg',
    tags: ['Data Factory', 'Databricks', 'Synapse', 'Data Lakes', 'Streaming'],
    syllabus: [
      { week: 1, topic: 'Azure Fundamentals', content: 'Resource groups, storage accounts' },
      { week: 2, topic: 'Data Factory', content: 'Pipelines, data flows' },
      { week: 3, topic: 'Databricks', content: 'Spark, Delta Lake' },
      { week: 4, topic: 'Advanced Patterns', content: 'Streaming, optimization' }
    ],
    outcomes: [
      'Design Azure data solutions',
      'Implement ETL pipelines',
      'Process streaming data',
      'Optimize data workloads'
    ]
  },
  {
    id: 8,
    title: 'Cloud Computing & Engineering',
    description: 'Design and deploy scalable cloud solutions.',
    longDescription: '6-week advanced program covering cloud architecture patterns, DevOps practices, monitoring, and cost optimization across AWS/Azure/GCP. Includes infrastructure design case studies.',
    duration: '6 weeks',
    students: 4120,
    rating: 4.7,
    level: 'Advanced',
    price: '₹20,000',
    image: 'https://thumbs.dreamstime.com/z/cloud-computing-engineering-innovation-concept-civil-engineer-clicks-205464391.jpg',
    tags: ['Cloud Architecture', 'DevOps', 'Monitoring', 'Security', 'Cost Optimization'],
    syllabus: [
      { week: 1, topic: 'Architecture Patterns', content: 'Microservices, serverless' },
      { week: 2, topic: 'DevOps Practices', content: 'CI/CD pipelines' },
      { week: 3, topic: 'Monitoring', content: 'Logging, alerting' },
      { week: 4, topic: 'Security', content: 'IAM, network security' },
      { week: 5, topic: 'Cost Management', content: 'Optimization strategies' },
      { week: 6, topic: 'Case Studies', content: 'Real-world architectures' }
    ],
    outcomes: [
      'Design cloud-native architectures',
      'Implement DevOps workflows',
      'Monitor cloud environments',
      'Optimize cloud costs'
    ]
  }
];

const CourseDetails: React.FC = () => {
  const { id } = useParams();
  const { isDarkMode } = useTheme();
  const [showContactPopup, setShowContactPopup] = useState(false);
  const course = allCourses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className={`min-h-screen flex items-center justify-center text-center py-20 font-bold text-xl ${
        isDarkMode ? 'bg-gradient-to-br from-[#1A0033] to-[#2D1B69] text-red-400' : 'bg-gradient-to-br from-gray-50 to-white text-red-600'
      }`}>
        Course not found. Please check the URL or return to the courses page.
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-[#1A0033] to-[#2D1B69]' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <Navbar /> {/* This should include your logo */}
      
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
       <motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="mb-8 w-fit"
>
  <Link
    to="/courses"
    className={`group relative isolate overflow-hidden rounded-lg px-4 py-3 text-sm font-medium shadow-lg transition-all duration-300 ${
      isDarkMode
        ? 'bg-gradient-to-br from-purple-900/80 to-indigo-900/90 text-purple-100 hover:shadow-purple-500/20'
        : 'bg-gradient-to-br from-purple-50 to-indigo-100 text-purple-800 hover:shadow-purple-300/40'
    }`}
  >
    {/* Animated background */}
    <motion.span
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 0.3, x: 0 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      className={`absolute inset-0 -z-10 bg-[linear-gradient(110deg,transparent_25%,${isDarkMode ? 'rgba(216,180,254,0.5)' : 'rgba(192,132,252,0.3)'}_50%,transparent_75%)]`}
    />
    
    {/* Main content with icon */}
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [-2, 2, -2] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowLeft
          size={18}
          className={`transition-colors ${
            isDarkMode
              ? 'text-purple-300 group-hover:text-purple-100'
              : 'text-purple-600 group-hover:text-purple-800'
          }`}
        />
      </motion.div>
      
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        Back to Courses
      </motion.span>
    </div>
    
    {/* Glow effect */}
    <div className={`
      absolute inset-0 -z-20 rounded-lg opacity-0 transition-opacity duration-300 
      group-hover:opacity-100 ${
        isDarkMode
          ? 'bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent'
          : 'bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent'
      }`}
    />
    
    {/* Border animation */}
    <motion.span
      initial={{ width: 0 }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.4 }}
      className={`absolute bottom-0 left-0 h-0.5 ${
        isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
      }`}
    />
    
    {/* Subtle particles (dark mode only) */}
    {isDarkMode && (
      <>
        <motion.span
          animate={{
            y: [0, -3, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.2
          }}
          className="absolute left-6 top-2 h-1 w-1 rounded-full bg-purple-300/80"
        />
        <motion.span
          animate={{
            y: [0, -2, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 0.5
          }}
          className="absolute right-8 top-3 h-0.5 w-0.5 rounded-full bg-purple-200/60"
        />
      </>
    )}
  </Link>
</motion.div>

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="w-full lg:w-1/2">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl shadow-lg object-cover w-full h-full max-h-[500px]"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDarkMode ? "bg-purple-600/20 text-purple-300" : "bg-purple-100 text-purple-700"
                  }`}>
                    {course.level}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2">
                    {course.title}
                  </h1>
                  <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {course.longDescription || course.description}
                  </p>
                </div>
                <div className={`text-2xl font-bold px-4 py-2 rounded-lg ${
                  isDarkMode ? 'bg-purple-900/50 text-white' : 'bg-purple-100 text-purple-800'
                }`}>
                  {course.price}
                </div>
              </div>

              <div className={`flex flex-wrap gap-4 text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span>{course.rating} ({Math.floor(course.students * 0.8)} reviews)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {course.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode
                        ? "bg-purple-600/20 text-purple-300"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => setShowContactPopup(true)}
                  className={`py-3 px-6 rounded-xl font-semibold flex-1 text-center ${
                    isDarkMode
                      ? "bg-violet-600 text-white hover:bg-violet-500"
                      : "bg-violet-600 text-white hover:bg-violet-500"
                  }`}
                >
                  Enroll Now
                </button>
                <button
                  className={`py-3 px-6 rounded-xl font-semibold flex-1 text-center border ${
                    isDarkMode
                      ? "border-purple-400 text-purple-300 hover:bg-purple-900/30"
                      : "border-purple-600 text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  Download Syllabus <Download size={16} className="inline ml-2" />
                </button>
              </div>
              <ContactPopup
  courseName={course.title}
  open={showContactPopup}
  onClose={() => setShowContactPopup(false)}
/>
            </div>
          </div>

          {/* Detailed Course Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Syllabus */}
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#2D1B69]/50' : 'bg-white shadow-md'}`}>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <BookOpen className="mr-2" /> Course Syllabus
              </h2>
              <div className="space-y-4">
                {course.syllabus.map((item, index) => (
                  <div key={index} className="border-l-2 border-purple-500 pl-4">
                    <h3 className="font-medium">Week {item.week}: {item.topic}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#2D1B69]/50' : 'bg-white shadow-md'}`}>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="mr-2" /> What You'll Learn
              </h2>
              <ul className="space-y-3">
                {course.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`inline-block mr-2 mt-1 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Details */}
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#2D1B69]/50' : 'bg-white shadow-md'}`}>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Layers className="mr-2" /> Course Details
              </h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Prerequisites</h3>
                <div className="flex flex-wrap gap-2">
                  {course.prerequisites && course.prerequisites.map((req, index) => (
                    <span key={index} className={`px-2 py-1 rounded text-xs ${
                      isDarkMode ? 'bg-purple-900/50 text-purple-200' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Resources Included</h3>
                <ul className="space-y-2">
                  {course.resources && course.resources.map((resource, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`inline-block mr-2 mt-1 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>•</span>
                      <span>{resource}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Certification</h3>
                <div className="flex items-center">
                  <Award className={`mr-2 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}`} />
                  <span>{course.certification || 'Certificate of Completion'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials/Stats Section */}
          <div className={`p-8 rounded-xl mb-16 ${isDarkMode ? 'bg-[#2D1B69]/50' : 'bg-white shadow-md'}`}>
            <h2 className="text-2xl font-bold mb-6 text-center">Course Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  {course.rating}/5
                </div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'} mx-0.5`} 
                    />
                  ))}
                </div>
                <div className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Average Rating
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  {course.students.toLocaleString()}+
                </div>
                <div className="flex justify-center">
                  <Users size={20} className={isDarkMode ? 'text-purple-300' : 'text-purple-600'} />
                </div>
                <div className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Students Enrolled
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  {course.duration}
                </div>
                <div className="flex justify-center">
                  <Clock size={20} className={isDarkMode ? 'text-purple-300' : 'text-purple-600'} />
                </div>
                <div className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Duration
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  {course.level}
                </div>
                <div className="flex justify-center">
                  <BarChart2 size={20} className={isDarkMode ? 'text-purple-300' : 'text-purple-600'} />
                </div>
                <div className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Level
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
  <motion.h2 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-2xl md:text-3xl font-bold mb-6"
  >
    Ready to Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">Learning</span>?
  </motion.h2>

  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="inline-block"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <button
      onClick={() => window.location.href = `/register/${course.id}`}
      className={`
        group relative overflow-hidden py-4 px-8 rounded-xl 
        font-semibold text-lg mx-auto shadow-xl
        bg-gradient-to-r from-purple-600 to-violet-500 
        hover:from-purple-500 hover:to-violet-400
        text-white tracking-wide
        transition-all duration-300
        ${isDarkMode ? 'shadow-purple-900/30' : 'shadow-violet-400/30'}
      `}
    >
      {/* Animated shine effect */}
      <span className="absolute inset-0 overflow-hidden">
        <span className={`
          absolute -inset-12 opacity-0 group-hover:opacity-100
          bg-[linear-gradient(90deg,transparent_20%,rgba(255,255,255,0.3)_50%,transparent_80%)]
          group-hover:animate-shine
          ${isDarkMode ? 'via-white/20' : 'via-white/40'}
        `}></span>
      </span>

      {/* Text with subtle animation */}
      <span className="relative flex items-center justify-center gap-2">
        <motion.span
          animate={{
            x: [0, 2, -1, 2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block"
        >
          <BookOpen size={20} className="mr-2" />
        </motion.span>
        Enroll Now for {course.price}
      </span>

      {/* Ripple effect container */}
      <span className="absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
      </span>

      {/* Glow effect */}
      <span className={`
        absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100
        bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))]
        from-purple-400/30 via-transparent to-transparent
        transition-opacity duration-500
        blur-md
      `}></span>

      {/* Border animation */}
      <span className={`
        absolute inset-0 rounded-xl pointer-events-none
        border-2 border-transparent group-hover:border-white/20
        transition-all duration-500
      `}></span>
    </button>
  </motion.div>

  {/* Add this to your global CSS */}
  <style>{`
    @keyframes shine {
      0% { transform: translateX(-100%) rotate(15deg); }
      100% { transform: translateX(100%) rotate(15deg); }
    }
    .animate-shine {
      animation: shine 1.5s infinite;
    }
  `}</style>
</div>
        </motion.div>
      </section>
    </div>
  );
};

export default CourseDetails;