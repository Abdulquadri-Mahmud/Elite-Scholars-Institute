import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="p-5">
      <div className="h-[80vh] flex flex-col items-center justify-center text-white rounded-lg bg-gradient-to-r from-blue-600 to-green-700 shadow-lg">
        <h1 className="text-center text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Elite Scholars Institute</h1>
        <p className="text-lg mb-8 opacity-90 text-center font-semibold">Empowering Students with Knowledge and Innovation — fostering <br /> curiosity, creativity, and a lifelong love for learning, <br /> preparing you for a future of endless possibilities.</p>
        <Link to="/login" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-all duration-300 shadow-md">
          Login to Portal
        </Link>
      </div>
    </div>
  );
}
