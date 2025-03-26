import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignIn = () => {
  const [matricNumber, setMatricNumber] = useState('');
  const [surname, setSurname] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!matricNumber || !surname) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Simulate a successful login
    if (matricNumber && surname) {
      navigate('/dashboard');
    } else {
      setError('Invalid matric number or surname');
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gradient-to-r m-6 rounded-lg from-blue-600 to-green-700 items-center justify-center lg:p-6 p-3">
        <div className="w-full max-w-md rounded-lg glass shadow-lg lg:p-8 p-6">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Sign In</h2>
          {error && <p className="text-red-500 text-center mb-4 font-semibold">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="matricNumber" className="mb-2 text-sm font-medium text-white">Matric Number</label>
              <input type="number" id="matricNumber" className="overflow-hidden w-full text-white rounded border border-gray-200 p-3 focus:border-blue-500 outline-none focus:ring focus:ring-blue-200" placeholder="Enter your matric number" value={matricNumber} onChange={(e) => setMatricNumber(e.target.value)} required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="surname" className="mb-2 text-sm font-medium text-white">Surname</label>
              <input type="password" id="surname" className="w-full text-white rounded border border-gray-200 p-3 focus:border-blue-500 outline-none focus:ring focus:ring-blue-200" placeholder="Enter your surname" value={surname} onChange={(e) => setSurname(e.target.value)} required />
            </div>

            <p className="text-center text-sm text-white">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-blue-600 hover:underline">Sign Up</Link>
            </p>

            <button type="submit" className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-[#ADF802] text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400" disabled={loading}>
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
