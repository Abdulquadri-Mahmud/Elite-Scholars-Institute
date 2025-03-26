import React, { createContext, useEffect, useState } from 'react';
import { MdSpaceDashboard, MdPayment } from 'react-icons/md';
import { FaUserGraduate, FaWallet, FaRegChartBar, FaCog, FaSignOutAlt, FaBookOpen } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import { FaUser } from 'react-icons/fa6';
import { GrDiamond } from 'react-icons/gr';
// import UserLogoutButton from '../components/UserLogout';

const navLinks = [
  { title: 'Dashboard', icon: <GrDiamond />, path: '/dashboard' },
  { title: 'Profile', icon: <FaUserGraduate />, path: 'profile' },
  { title: 'Courses', icon: <FaBookOpen />, path: 'courses' },
  { title: 'Payments', icon: <FaWallet />, path: 'payments' },
  { title: 'Results', icon: <FaRegChartBar />, path: 'results' },
  { title: 'Settings', icon: <FaCog />, path: 'settings' },
  { title: 'Logout', icon: <FaSignOutAlt />, path: '/' },
];

const studentName = 'Olayiwola oluwadamilola abisola';
const matricNumber = '23010231089';

const Sidebar = ({ isOpen, toggleSidebar }) => {
const location = useLocation();

return (
  <div className={`h-screen p-3 overflow-y-auto pb-5 z-20 bg-gray-50 text-black fixed lg:static ${isOpen ? 'w-70' : 'w-0'} transition-all duration-300`}>
    <div className="px-5 py-6 flex flex-col items-start justify-between rounded-lg bg-slate-200">
      <div>
        <Link to='/' className=''>
          <h2 className="text-2xl font-bold mb-4">Student Portal</h2>
        </Link>
      </div>
      <div>
        <p className="mb-2 font-medium">Welcome, {studentName}</p>
        <p className="text-sm mb-6">Matric No: {matricNumber}</p>
      </div>
      <button onClick={toggleSidebar} className="absolute right-0 text-white text-2xl lg:hidden focus:outline-none" aria-label="Close Sidebar">
        <IoClose className='cursor-pointer'/>
      </button>
    </div>
    <nav className="flex flex-col gap-2 mt-5">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className={`px-4 py-3 font-normal duration-200 rounded-md flex items-center gap-2 ${location.pathname === link.path ? 'bg-slate-200 text-black hover:bg-slate-400 duration-200 font-semibold' : 'hover:bg-slate-200 hover:text-blue-500'}`}
        >
          {link.icon}
          {link.title}
        </Link>
      ))}
    </nav>
  </div>
);
};


const Header = ({ toggleSidebar }) => (
  <header className="text-white z-10 top-0 sticky bg-slate-50 shadow rounded-b-lg">
    <div className="flex lg:justify-end items-center justify-between px-6 py-4">
      <button onClick={toggleSidebar} className="text-2xl p-2 text-slate-50 lg:hidden focus:outline-none" aria-label="Open Sidebar">
        ☰
      </button>
      {/* <UserLogoutButton /> */}
      <div className="w-[50px] h-[50px] rounded-full p-1 bg-slate-300">
        <img src="/passport.jpg" alt="avatar" className='w-[50px] h-[40px] rounded-full object-center'/>
        {/* <FaUser className='text-2xl'/> */}
      </div>
    </div>
  </header>
);

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth >= 992);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col relative max-h-[100vh]">
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="overflow-x-hidden h-[100vh] flex-1 overflow-y-auto bg-gray-50 text-black">
          <Header toggleSidebar={toggleSidebar} />
          <div className="p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
