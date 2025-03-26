import React from 'react';

const HomePageFeatureSection = () => {
  return (
    <section className="bg-white container mx-auto rounded-md mt-10 text-slate-700 py-12 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Elite Scholars Institute?</h2>
        <p className="text-lg mb-8">Empowering tomorrow's leaders with world-class education, innovation, and endless opportunities.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-700 bg-opacity-20 text-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">📘 Academic Excellence</h3>
            <p>Top-notch educators, cutting-edge curricula, and a focus on critical thinking and creativity.</p>
          </div>
          <div className="p-6 bg-slate-700 bg-opacity-20 text-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">🚀 Future-Ready Skills</h3>
            <p>Hands-on experience, mentorship, and industry connections to propel you into your dream career.</p>
          </div>
          <div className="p-6 bg-slate-700 bg-opacity-20 text-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">🌟 Thriving Student Community</h3>
            <p>An inspiring, supportive environment filled with diverse cultures, clubs, and exciting events.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageFeatureSection;
