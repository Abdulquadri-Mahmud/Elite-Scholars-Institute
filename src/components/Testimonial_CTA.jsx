// Testimonials Section
const TestimonialsSection = () => {
    const testimonials = [
      { name: "John Doe", quote: "This portal has made everything easier!" },
      { name: "Jane Smith", quote: "I can now access my results faster than ever." },
      { name: "Michael Johnson", quote: "Amazing design and user-friendly interface." }
    ];
  
    return (
      <section className="py-10 container mx-auto mt-10 rounded-md bg-white text-slate-50">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">What Students Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-700 bg-opacity-20 p-6 rounded-lg shadow-lg w-72">
              <p className="italic">"{testimonial.quote}"</p>
              <h3 className="mt-4 font-semibold">- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  // Call to Action Section
  const CallToActionSection = () => {
    return (
      <section className="py-10 mt-10 mx-auto container rounded-2xl bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">Join thousands of students on the GAPOSA portal today!</p>
        <button className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:opacity-90">
          Get Started Now
        </button>
      </section>
    );
  };
  
export { TestimonialsSection, CallToActionSection };
  