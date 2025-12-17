import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { translations } from '../data/translations';

const Testimonials = () => {
  const { language } = useOutletContext();
  const t = translations[language].testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "The care I received was exceptional. The medical team was professional, compassionate, and truly dedicated to my recovery. I highly recommend their services.",
      name: "Sarah Johnson",
      role: "Cardiology Patient",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop"
    },
    {
      quote: "Outstanding orthopedic care! The doctors took time to explain my treatment options and the rehabilitation process was smooth and effective. Forever grateful!",
      name: "Michael Chen",
      role: "Orthopedics Patient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop"
    },
    {
      quote: "From consultation to follow-up, every step was handled with utmost care and professionalism. The facilities are world-class and the staff is incredibly supportive.",
      name: "Emily Rodriguez",
      role: "General Care Patient",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop"
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
    <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-slate-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2.5rem] rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-500"></div>
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name}
              className="relative w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]"
            />
            
            {/* Floating Quote Icon */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-xl">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="relative">
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed italic mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div>
                <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-blue-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-blue-600 border border-blue-600 flex items-center justify-center text-white hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 group"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
