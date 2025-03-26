import React from 'react';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Profile', path: '/profile' },
];

export default function Header() {
  const location = useLocation();

  return (
    <div className='bg-gradient-to-r from-blue-600 to-green-700 sticky top-0 z-50 text-white shadow-md p-3'>
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex items-center gap-2'>
          <div className=''>
            <Link to='/'>
              <h1 className='text-2xl font-bold'>Elite Scholars Institute</h1>
            </Link>
          </div>
        </div>
        <nav className='hidden md:flex gap-6'>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-lg font-semibold transition-all duration-300 ${location.pathname === link.path ? 'text-slate-100 underline' : 'text-white hover:text-yellow-200'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="bg-slate-100 text-black py-2 px-6 rounded font-bold hover:bg-blue-300 transition-all duration-300 shadow-md">
          <Link to={'/login'}>Login</Link>
        </div>
        <div className='lg:hidden block'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}