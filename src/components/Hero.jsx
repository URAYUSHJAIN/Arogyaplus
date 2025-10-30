import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Powered by AI
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Healthcare Intelligence at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              ArogyaPlus combines OCR, computer vision, and natural language processing to transform medical report interpretation. Get personalized health insights with both modern medicine and Ayurvedic solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/ai-analysis"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
              >
                Get Started
              </Link>
              <Link 
                to="/ai-analysis" 
                className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Try AI Report Analyzer
              </Link>
            </div>
          </div>

          {/* Right Column - Enhanced Imagery */}
          <div className="hidden lg:block relative">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=900&fit=crop" 
              alt="Professional medical doctor with AI technology"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />

            {/* Floating Statistics Cards */}
            <div className="absolute top-10 -left-4 bg-white p-4 rounded-xl shadow-2xl animate-pulse">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10k+</div>
                  <div className="text-sm text-gray-600">Reports Analyzed</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -right-4 bg-white p-4 rounded-xl shadow-2xl" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-6 bg-white p-3 rounded-xl shadow-2xl" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-xl font-bold text-gray-900">&lt; 30s</div>
                  <div className="text-xs text-gray-600">Analysis Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
