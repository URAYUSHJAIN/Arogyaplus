import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "The care I received was exceptional. The medical team was professional, compassionate, and truly dedicated to my recovery. I highly recommend their services.",
      name: "Sarah Johnson",
      role: "Cardiology Patient"
    },
    {
      quote: "Outstanding orthopedic care! The doctors took time to explain my treatment options and the rehabilitation process was smooth and effective. Forever grateful!",
      name: "Michael Chen",
      role: "Orthopedics Patient"
    },
    {
      quote: "From consultation to follow-up, every step was handled with utmost care and professionalism. The facilities are world-class and the staff is incredibly supportive.",
      name: "Emily Rodriguez",
      role: "General Care Patient"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Testimonials */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our track record speaks for itself
            </h2>

            {/* Testimonial Card */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <svg className="text-blue-600 w-10 h-10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-gray-700 text-lg mb-6 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div>
                <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-6">
              <button 
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Statistics Badge */}
            <p className="text-gray-600 text-sm mt-4">
              We have provided service to many patients
            </p>
          </div>

          {/* Right Column - Medical Team Imagery & Rating */}
          <div>
            {/* Rating Display */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-5xl font-bold text-gray-900">4.9</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="text-yellow-400 w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">Based on 2,500+ reviews</p>
            </div>

            {/* Medical Professional Image */}
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop" 
              alt="Healthcare professional with technology"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
