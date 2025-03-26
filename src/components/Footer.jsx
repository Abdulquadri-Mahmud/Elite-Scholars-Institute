import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-gray-950 text-white py-8 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link to='/'>
            <h1 className='text-2xl font-bold'>Elite Scholars Institute</h1>
          </Link>
          <p className="text-sm mt-2">© {new Date().getFullYear()} GAPOSA Student Portal. All rights reserved.</p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          <Link to="/faq" className="hover:text-gray-200">FAQ</Link>
        </div>

        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-200"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-200"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-200"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-200"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
