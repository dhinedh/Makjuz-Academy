import React, { useEffect, useState } from "react";
import api from "../../api/axios";

interface Course {
  _id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  rating: number;
  level: string;
}

interface CourseProgress {
  _id: string;
  course: Course; // now it's an object
  progressPercent: number;
  startedAt: string;
  completedLessons: string[];
}

interface MyCoursesProps {
  userId: string;
}

const MyCourses: React.FC<MyCoursesProps> = ({ userId }) => {
  const [courses, setCourses] = useState<CourseProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/progress/${userId}`);
        setCourses(res.data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [userId]);

  if (loading) {
    return <p className="text-gray-500">Loading courses...</p>;
  }

  if (courses.length === 0) {
    return <p className="text-gray-500">No courses found.</p>;
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="p-4 border rounded-lg shadow-sm bg-white flex gap-4"
          >
            {/* Course Image */}
            <img
              src={course.course.image}
              alt={course.course.title}
              className="w-32 h-24 object-cover rounded-lg"
            />

            {/* Course Info */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{course.course.title}</h3>
              <p className="text-sm text-gray-600">{course.course.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                Duration: {course.course.duration} | Level: {course.course.level}
              </p>
              <p className="text-sm text-yellow-600">
                ⭐ {course.course.rating}
              </p>

              {/* Progress */}
              <p className="mt-2 font-medium">
                Progress: {course.progressPercent}%
              </p>
              <p className="text-sm text-gray-500">
                Started At: {new Date(course.startedAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                Completed Lessons: {course.completedLessons.length}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
