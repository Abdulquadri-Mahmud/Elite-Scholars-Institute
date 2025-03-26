import React from 'react';

const Courses = () => {
  const courses = [
    { code: 'CSC101', title: 'Introduction to Programming', status: 'Registered' },
    { code: 'MTH102', title: 'Calculus I', status: 'Registered' },
    { code: 'PHY103', title: 'Physics for Engineers', status: 'Pending' },
    { code: 'GST104', title: 'Use of English', status: 'Registered' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-4">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-600">{course.code}</h3>
            <p className="text-gray-700 mb-2">{course.title}</p>
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full ${
                course.status === 'Registered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {course.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
