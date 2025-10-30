const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About ArogyaPlus
            </h2>
            <h3 className="text-xl text-blue-600 font-semibold mb-4">
              AI-Powered Healthcare Intelligence
            </h3>

            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              ArogyaPlus uses cutting-edge AI to instantly analyze medical reports, providing clear insights that combine modern medicine with Ayurvedic wisdom.
            </p>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Our platform makes healthcare accessible to everyone with personalized recommendations available 24/7.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">AI-powered report analysis</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Modern + Ayurvedic solutions</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Instant personalized insights</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="text-green-500 w-6 h-6 shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Available 24/7</p>
              </div>
            </div>

            <a 
              href="#ai-features" 
              className=" text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block border-2 border-blue-600"
            >
              Learn More
            </a>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=600&fit=crop" 
              alt="AI medical technology and healthcare innovation"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />

            {/* Floating Statistics Cards */}
            <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-2xl">
              <div className="text-3xl font-bold text-blue-600">10k+</div>
              <div className="text-gray-600 text-sm font-medium">Reports Analyzed</div>
            </div>

            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-2xl">
              <div className="text-3xl font-bold text-purple-600">95%</div>
              <div className="text-gray-600 text-sm font-medium">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
