const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our AI-Powered Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Card 1 - AI Report Analysis */}
          <div className="relative bg-blue-100 hover:bg-blue-200 p-6 rounded-xl transition-all duration-300 hover:shadow-lg">
            <span className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
              AI-Powered
            </span>
            <svg className="text-blue-600 w-12 h-12 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Report Analysis</h3>
            <p className="text-gray-600 mb-4">Upload medical reports and get instant AI-powered insights with personalized recommendations</p>
            <a href="#ai-features" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              Learn More
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Service Card 2 - For a Practice */}
          <div className="bg-green-100 hover:bg-green-200 p-6 rounded-xl transition-all duration-300 hover:shadow-lg">
            <svg className="text-green-600 w-12 h-12 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">For a Practice</h3>
            <p className="text-gray-600 mb-4">Join our network of healthcare providers and practices</p>
            <a href="#contact" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
              Learn More
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Service Card 3 - DMP Locations */}
          <div className="bg-purple-100 hover:bg-purple-200 p-6 rounded-xl transition-all duration-300 hover:shadow-lg">
            <svg className="text-purple-600 w-12 h-12 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">DMP Locations</h3>
            <p className="text-gray-600 mb-4">Find our Disease Management Program centers near you</p>
            <a href="#contact" className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
              Learn More
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Service Card 4 - Connect with Us */}
          <div className="bg-orange-100 hover:bg-orange-200 p-6 rounded-xl transition-all duration-300 hover:shadow-lg">
            <svg className="text-orange-600 w-12 h-12 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect with Us</h3>
            <p className="text-gray-600 mb-4">Get in touch with our AI-powered support team for assistance with reports and health queries</p>
            <a href="#contact" className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">
              Learn More
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

