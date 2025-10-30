import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          How ArogyaPlus AI Works
        </h2>
        <p className="text-gray-600 text-center text-lg mb-16">
          Simple, fast, and accurate medical report analysis in three easy steps
        </p>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Step 1 - Upload */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              1
            </div>
            <svg className="text-blue-600 w-16 h-16 mb-4 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Upload Your Report</h3>
            <p className="text-gray-600 text-center">Simply upload your medical reports, lab results, or prescriptions in any format - PDF, image, or scanned document</p>
          </div>

          {/* Step 2 - Analyze */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              2
            </div>
            <svg className="text-purple-600 w-16 h-16 mb-4 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">AI Analysis</h3>
            <p className="text-gray-600 text-center">Our advanced AI engine uses OCR, computer vision, and NLP to extract, interpret, and analyze your medical data in seconds</p>
          </div>

          {/* Step 3 - Insights */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              3
            </div>
            <svg className="text-green-600 w-16 h-16 mb-4 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Get Personalized Insights</h3>
            <p className="text-gray-600 text-center">Receive easy-to-understand health insights, actionable recommendations, and both modern and Ayurvedic treatment suggestions</p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-4 bg-white rounded-lg shadow-md">
            <svg className="w-12 h-12 text-blue-600 mx-auto mb-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-3xl font-bold text-gray-900 mb-1">&lt; 30 sec</div>
            <div className="text-gray-600 text-sm">Analysis Time</div>
          </div>

          <div className="text-center p-4 bg-white rounded-lg shadow-md">
            <svg className="w-12 h-12 text-green-600 mx-auto mb-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-3xl font-bold text-gray-900 mb-1">95%+</div>
            <div className="text-gray-600 text-sm">Accuracy Rate</div>
          </div>

          <div className="text-center p-4 bg-white rounded-lg shadow-md">
            <svg className="w-12 h-12 text-purple-600 mx-auto mb-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
            <div className="text-gray-600 text-sm">Available</div>
          </div>

          <div className="text-center p-4 bg-white rounded-lg shadow-md">
            <svg className="w-12 h-12 text-orange-600 mx-auto mb-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
            <div className="text-gray-600 text-sm">Report Types</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link 
            to="/ai-analysis"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Start Your Free Analysis
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
