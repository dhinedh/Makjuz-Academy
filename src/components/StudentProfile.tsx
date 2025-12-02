import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// 1. Import the image file here
import shiruVaishPhoto from '../Assets/bow.jpg'; // Make sure the file path is correct

// Type definition for student profile data
interface StudentProfileData {
  id: string;
  name: string;
  photoUrl: string;
  program: string;
  quote: string;
  githubUrl: string;
  expectedGraduation: string;
  sections: {
    myStory: string;
    whyThisAcademy: string;
    myExperience: string;
    whatNext: string;
  };
  progress: string[];
  mockExamSpotlight: {
    title: string;
    challenge: string;
    solution: string;
    projectImage: string;
    githubLink: string;
    liveProjectLink: string;
  };
  pullQuote: {
    mentorName: string;
    quote: string;
  };
}

// It's a good practice to move data to a separate file
// For this example, we'll keep a single student data object
const studentData: StudentProfileData = {
  id: 'shiru-vaish',
  name: 'Shiru Vaish',
  photoUrl: shiruVaishPhoto, // 2. Use the imported variable here
  program: 'Full-Stack Development',
  quote: "Makjuz Academy gave me the skills and confidence to pursue my dream career.",
  githubUrl: 'https://github.com/johndoe',
  expectedGraduation: 'December 2025',
  sections: {
    myStory: "Before joining Makjuz Academy, I was working in retail and felt stuck. I've always had a passion for technology, and I finally decided to make a change. Makjuz Academy's flexible schedule and hands-on approach made it the perfect choice for me.",
    whyThisAcademy: "I chose Makjuz Academy because of their practical, project-based curriculum. I didn't just want to learn theory; I wanted to build things that I could show potential employers.",
    myExperience: "My experience at Makjuz has been incredible. The mentors are knowledgeable and supportive, and the projects are challenging and fun. The mock exams really helped me understand my weak points and improve.",
    whatNext: "I am currently looking for a junior developer role. I am confident in my skills and excited to start my career in tech. My goal is to become a skilled software engineer and contribute to open-source projects.",
  },
  progress: [
    'HTML & CSS Fundamentals',
    'JavaScript ES6+',
    'React.js and State Management',
    'Node.js and Express.js',
    'Database Management (MongoDB)',
  ],
  mockExamSpotlight: {
    title: 'Weather App - Mock Exam',
    challenge: 'Build a web app that fetches weather data from an API and displays it in a clean, user-friendly interface.',
    solution: 'I used the OpenWeatherMap API to get real-time data. I built the front-end with React to manage the application state and display the data dynamically. I focused on making the UI responsive and intuitive.',
    projectImage: 'https://via.placeholder.com/600x400',
    githubLink: 'https://github.com/johndoe/weather-app',
    liveProjectLink: 'https://johndoe-weather-app.netlify.app/',
  },
  pullQuote: {
    mentorName: 'Jane Smith',
    quote: "John's dedication and problem-solving skills are top-notch. His final project showed a deep understanding of core development principles.",
  },
};

// Define props for StudentProfile to include className
interface StudentProfileProps {
  className?: string; // Optional className prop
}

const StudentProfile: React.FC<StudentProfileProps> = ({ className }) => {
  const { studentId } = useParams<{ studentId: string }>();
  const [profile, setProfile] = useState<StudentProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // If a studentId is provided in the URL, try to find that specific student.
      // Otherwise, default to the 'john-doe' profile.
      if (studentId && studentId !== studentData.id) { // In a real app, you'd fetch from an array/API
        // For now, we only have 'john-doe', so we'll just set it to null if a different ID is passed
        setProfile(null); 
      } else {
        setProfile(studentData); // Default to john-doe if no studentId or it matches
      }
      setIsLoading(false);
    }, 500); // Simulate API call delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [studentId]);

  if (isLoading) {
    return <div className="text-center text-xl text-gray-500 p-8">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="text-center text-xl text-red-500 p-8">Profile not found.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      // Apply the passed className here, ensuring default styling is not overridden
      className={`container mx-auto p-4 md:p-8 ${className || ''}`}
    >
      {/* Header Section - Adjusted for top-left alignment */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-8 mb-12 bg-gray-900 p-8 rounded-lg shadow-lg">
        <motion.img
          src={profile.photoUrl}
          alt={`Photo of ${profile.name}`}
          className="w-48 h-48 rounded-full border-4 border-purple-500 shadow-xl flex-shrink-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />
        <div className="text-center md:text-left text-white md:mt-4"> {/* Added md:mt-4 for spacing */}
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{profile.name}</h1>
          <p className="text-xl text-gray-300 font-semibold">{profile.program}</p>
          <p className="italic my-4 max-w-lg">"{profile.quote}"</p>
          <p className="text-sm text-gray-400">
            Makjuz Journey: <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">See my GitHub</a>
          </p>
          <p className="text-sm text-gray-400">
            Expected Graduation: <span className="font-semibold">{profile.expectedGraduation}</span>
          </p>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Sections based on student's input */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Section title="My Story" content={profile.sections.myStory} />
        <Section title="Why this Academy?" content={profile.sections.whyThisAcademy} />
        <Section title="My Experience" content={profile.sections.myExperience} />
        <Section title="What Am I Going to Do Next?" content={profile.sections.whatNext} />
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Progress Section */}
      <div className="bg-gray-800 p-8 rounded-lg mb-12 shadow-lg">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">The Progress is Still</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {profile.progress.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Mock Exam Spotlight */}
      <div className="bg-gray-800 p-8 rounded-lg mb-12 shadow-lg">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">Mock Exam Spotlight</h2>
        <h3 className="text-2xl text-white mb-2">{profile.mockExamSpotlight.title}</h3>
        <p className="text-gray-300 mb-4">
          <span className="font-semibold text-purple-300">The Challenge:</span> {profile.mockExamSpotlight.challenge}
        </p>
        <img
          src={profile.mockExamSpotlight.projectImage}
          alt={`Screenshot of the ${profile.mockExamSpotlight.title} project`}
          className="w-full h-auto rounded-lg mb-4"
        />
        <p className="text-gray-300 mb-4">
          <span className="font-semibold text-purple-300">My Solution:</span> {profile.mockExamSpotlight.solution}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={profile.mockExamSpotlight.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            My Code on GitHub
          </a>
          <a
            href={profile.mockExamSpotlight.liveProjectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Run My Code
          </a>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Pull Quote */}
      <div className="bg-gray-900 p-8 rounded-lg mb-12 shadow-lg text-center border-l-4 border-purple-500">
        <blockquote className="text-2xl italic text-gray-200">"{profile.pullQuote.quote}"</blockquote>
        <p className="mt-4 text-gray-400">- {profile.pullQuote.mentorName}, Mock Exam Mentor</p>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Call to Action & How-to section */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">Build Your Own Success Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl text-white mb-2">How to Create a Profile (Simple Steps)</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li><span className="font-semibold">Identify:</span> Find a student who is doing well and enthusiastic.</li>
              <li><span className="font-semibold">Interview:</span> Have a friendly chat with them. Ask them the questions from the sections on this page.</li>
              <li><span className="font-semibold">Collect Assets:</span> Ask for a nice photo and a screenshot of their best mock project.</li>
              <li><span className="font-semibold">Write the Content:</span> Use the answers from the interview to create the content for their profile.</li>
              <li><span className="font-semibold">Build the Page:</span> Our team will build the profile page on the website.</li>
              <li><span className="font-semibold">Share:</span> Promote the profile on social media to show off new applicants.</li>
            </ol>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-lg text-white text-center">Interested in building your own profile?</p>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Tour the Application
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Reusable section component
const Section: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold text-purple-300 mb-2">{title}</h3>
    <p className="text-gray-300">{content}</p>
  </div>
);

export default StudentProfile;