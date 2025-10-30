import { Link } from 'react-router-dom';

const AIFeatures = () => {
  return (
    <section id="ai-features" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Innovative AI-Powered Healthcare Technology
        </h2>
        <p className="text-gray-600 text-center text-lg mb-12">
          Transform medical report interpretation with enhanced multimodal analysis
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 - OCR Technology */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
            <svg className="text-blue-600 w-12 h-12 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Optical Character Recognition</h3>
            <p className="text-gray-600">Advanced OCR technology extracts text from medical reports, prescriptions, and lab results with high accuracy</p>
          </div>

          {/* Feature Card 2 - Computer Vision */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
            <svg className="text-purple-600 w-12 h-12 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Vision Analysis</h3>
            <p className="text-gray-600">Intelligent image analysis identifies patterns, anomalies, and key medical indicators in diagnostic images</p>
          </div>

          {/* Feature Card 3 - Natural Language Processing */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
            <svg className="text-green-600 w-12 h-12 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Language Processing</h3>
            <p className="text-gray-600">NLP algorithms understand medical terminology and context to provide accurate interpretations of complex reports</p>
          </div>

          {/* Feature Card 4 - Personalized Insights */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
            <svg className="text-orange-600 w-12 h-12 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              <path d="M13 10h3m-3 4h3" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Health Insights</h3>
            <p className="text-gray-600">Receive tailored health recommendations based on your medical history, current conditions, and lifestyle factors</p>
          </div>

          {/* Feature Card 5 - Health Trend Tracking */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
            <svg className="text-indigo-600 w-12 h-12 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Trend Tracking</h3>
            <p className="text-gray-600">Monitor your health metrics over time with intelligent tracking and predictive analytics for better health management</p>
          </div>

          {/* Feature Card 6 - Integrated Medicine */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
            <svg className="text-teal-600 w-12 h-12 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern + Ayurvedic Solutions</h3>
            <p className="text-gray-600">Unique blend of contemporary medical advice and traditional Ayurvedic wisdom for holistic health management</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link 
            to="/ai-analysis"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-8 inline-block"
          >
            Experience AI-Powered Healthcare
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
