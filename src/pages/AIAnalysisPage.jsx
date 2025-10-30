import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeReport, validateFile } from '../services/geminiService';

const AIAnalysisPage = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState('upload'); // 'upload' | 'loading' | 'results'
  const [selectedFile, setSelectedFile] = useState(null);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // File handling functions
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validation = validateFile(file);
      if (validation.valid) {
        setSelectedFile(file);
        setError(null);
      } else {
        setError(validation.error);
        setSelectedFile(null);
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    
    const file = event.dataTransfer.files[0];
    if (file) {
      const validation = validateFile(file);
      if (validation.valid) {
        setSelectedFile(file);
        setError(null);
      } else {
        setError(validation.error);
        setSelectedFile(null);
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setStage('loading');
    setError(null);

    const result = await analyzeReport(selectedFile);

    if (result.success) {
      setResults(result.data);
      setStage('results');
    } else {
      setError(result.error);
      setStage('upload');
    }
  };

  const handleReset = () => {
    setStage('upload');
    setSelectedFile(null);
    setResults(null);
    setError(null);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setError(null);
  };

  // Stage 1: Upload UI
  if (stage === 'upload') {
    return (
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI-Powered Medical Report Analysis
            </h1>
            <p className="text-xl text-blue-100">
              Upload your medical report and get instant personalized insights
            </p>
          </div>

          {/* Upload Area */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileSelect}
              className="hidden"
              id="file-input"
            />

            <label
              htmlFor="file-input"
              className={`block border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300 ${
                isDragging
                  ? 'border-blue-600 bg-blue-100'
                  : 'border-blue-400 bg-blue-50 hover:bg-blue-100'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              {/* Upload Icon */}
              <svg
                className="w-20 h-20 mx-auto mb-4 text-blue-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>

              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {selectedFile ? selectedFile.name : 'Drag and drop your report here'}
              </h3>
              <p className="text-gray-600 mb-2">or click to browse</p>
              <p className="text-sm text-gray-500">JPG, PNG (Max 10MB)</p>
              <p className="text-xs text-gray-400 mt-2">PDF support coming soon</p>

              {selectedFile && (
                <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">{selectedFile.name}</p>
                        <p className="text-sm text-gray-600">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleRemoveFile();
                      }}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </label>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p className="font-medium">{error}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Back to Home
              </button>
              
              {selectedFile && (
                <button
                  onClick={handleAnalyze}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Analyze Report
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Stage 2: Loading Animation
  if (stage === 'loading') {
    return (
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          {/* Animated Spinner */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 border-8 border-white/30 rounded-full"></div>
            <div className="absolute inset-0 border-8 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Analyzing Your Report...
          </h2>

          {/* Progress Indicators */}
          <div className="space-y-4 text-white">
            <div className="flex items-center justify-center gap-3 animate-pulse">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg">Extracting text with OCR...</p>
            </div>

            <div className="flex items-center justify-center gap-3 animate-pulse" style={{ animationDelay: '0.2s' }}>
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-lg">Analyzing medical data...</p>
            </div>

            <div className="flex items-center justify-center gap-3 animate-pulse" style={{ animationDelay: '0.4s' }}>
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p className="text-lg">Generating personalized insights...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Stage 3: Results Display
  if (stage === 'results' && results) {
    return (
      <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Analysis Complete
            </h1>
            <p className="text-xl text-gray-600">
              Here are your personalized health insights
            </p>
          </div>

          {/* Results Cards */}
          <div className="space-y-6">
            {/* Summary Card */}
            {results.summary && (
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Summary</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{results.summary}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Medical Insights Card */}
            {results.insights && (
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Medical Insights</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{results.insights}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Modern Medicine Recommendations Card */}
            {results.modernMedicine && (
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Modern Medicine Recommendations</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{results.modernMedicine}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Ayurvedic Solutions Card */}
            {results.ayurvedic && (
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <svg className="w-6 h-6 text-orange-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Ayurvedic Solutions</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{results.ayurvedic}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Lifestyle & Diet Card */}
            {results.lifestyle && (
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-lg">
                    <svg className="w-6 h-6 text-teal-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Lifestyle & Diet</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{results.lifestyle}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Full Text Fallback (if sections weren't parsed well) */}
            {!results.summary && !results.insights && results.fullText && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Analysis Results</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{results.fullText}</p>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> This AI analysis is for informational purposes only and should not replace professional medical consultation. Always consult with qualified healthcare professionals for medical advice and treatment.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Back to Home
            </button>
            
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Analyze Another Report
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default AIAnalysisPage;
