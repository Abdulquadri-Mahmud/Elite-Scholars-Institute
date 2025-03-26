import React from 'react';
import { FaUserGraduate, FaBookOpen, FaWallet, FaRegChartBar, FaCog, FaSignOutAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const studentName = 'Olayiwola oluwadamilola abisola';
  const matricNumber = '23010231089';

  const features = [
    { title: 'Profile', icon: <FaUserGraduate />, path: 'profile' },
    { title: 'Courses', icon: <FaBookOpen />, path: 'courses' },
    { title: 'Payments', icon: <FaWallet />, path: 'payments' },
    { title: 'Results', icon: <FaRegChartBar />, path: 'results' },
    { title: 'Settings', icon: <FaCog />, path: 'settings' },
    { title: 'Logout', icon: <FaSignOutAlt />, path: '/' },
  ];

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col rounded-lg lg:p-7 p-5">
      {/* Greeting Section */}
      <h1 className="text-3xl font-bold mb-4">Welcome, {studentName}!</h1>
      <p className="text-gray-600 mb-4">Matric Number: {matricNumber}</p>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-50 shadow rounded-lg">
          <h3 className="text-xl font-semibold">Registered Courses</h3>
          <p className="text-gray-600">5 Courses</p>
        </div>
        <div className="p-4 bg-slate-50 shadow rounded-lg">
          <h3 className="text-xl font-semibold">Payment Status</h3>
          <p className="text-green-500">Cleared</p>
        </div>
        <div className="p-4 bg-slate-50 shadow rounded-lg">
          <h3 className="text-xl font-semibold">CGPA</h3>
          <p className="text-yellow-500">3.78</p>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <FaExclamationCircle /> Pending Course Registration
        </h3>
        <p className="text-sm">You have 2 courses pending registration. Ensure to complete it before the deadline.</p>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 p-4 bg-slate-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
        <div className="flex gap-4">
          <Link to="/register-courses" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Register Courses</Link>
          <Link to="/payment" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Make Payment</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
