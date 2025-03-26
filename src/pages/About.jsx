import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen  flex justify-center items-center px-1 sm:px-2 lg:px-4 my-10">
        <div className="max-w-5xl w-full bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold text-center text-gray-670 mb-4">About Gateway ICT Polytechnic Saapade</h1>
          <p className="text-gray-700 leading-relaxed">
            Gateway ICT Polytechnic Saapade (GAPOSA) is a leading institution committed to providing quality education in technology, innovation, and entrepreneurship. 
            Located in the heart of Ogun State, Nigeria, GAPOSA offers a wide range of programs designed to equip students with the skills and knowledge needed for a dynamic world.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To be a world-class institution producing highly skilled graduates, fostering creativity, and driving technological advancements.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            - To provide cutting-edge, practical education in ICT and related fields.
            <br />- To develop students' entrepreneurial mindset and innovative capabilities.
            <br />- To collaborate with industries for skill development and research.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Why Choose GAPOSA?</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Experienced and passionate lecturers</li>
            <li>Modern facilities and tech-driven learning environments</li>
            <li>Strong industry partnerships and internship opportunities</li>
            <li>Entrepreneurship and skill development programs</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;