const PatientCare = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features List */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              We Provide Finest Patient's Care with AI-Powered Amenities
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 text-lg">AI-Powered Medical Report Analysis</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 text-lg">Personalized Health Insights with Machine Learning</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 text-lg">Care for Life - Comprehensive health management</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 text-lg">Pelvic Inflammatory Disease treatment</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 text-lg">24/7 Emergency Services</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 text-lg">Advanced Diagnostic Facilities</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 text-lg">Experienced Medical Team</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 text-lg">Patient-Centered Approach</p>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mt-8 border-2 border-blue-600">
              Try AI Analysis
            </button>
          </div>

          {/* Right Column - Statistics & Imagery */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=600&fit=crop" 
              alt="Medical team providing patient care"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />
            
            {/* Statistics Card */}
            <div className="absolute bottom-4 right-4 bg-white p-6 rounded-xl shadow-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-1">10k+</div>
              <div className="text-gray-600 font-medium">AI Analyses</div>
              <div className="text-gray-600 font-medium mt-2">22 Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientCare;
