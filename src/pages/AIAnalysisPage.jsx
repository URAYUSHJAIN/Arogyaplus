import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { analyzeReport, validateFile } from '../services/geminiService';
import { saveMedicalSummary } from '../services/emergencyService';
import PillLoader from '../components/PillLoader';
import { translations } from '../data/translations';

const AIAnalysisPage = () => {
  const navigate = useNavigate();
  const { language } = useOutletContext();
  const t = translations[language].aiAnalysis;
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
      
      // Automatically save medical summary for emergency access
      try {
        const medicalSummary = {
          date: new Date().toISOString().split('T')[0],
          summary: result.data.summary || '',
          insights: result.data.insights || '',
          modernMedicine: result.data.modernMedicine || '',
          ayurvedic: result.data.ayurvedic || '',
          lifestyle: result.data.lifestyle || '',
          fullText: result.data.fullText || ''
        };
        saveMedicalSummary(medicalSummary);
      } catch (error) {
        console.warn('Failed to save medical summary for emergency access:', error);
      }
      
      setStage('results');
    } else {
      setError(result.error);
      setStage('upload');
    }
  };

  const handleNewAnalysis = () => {
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
      <div className="bg-slate-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-slate-400">
              {t.subtitle}
            </p>
          </div>

          {/* Upload Area */}
          <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8">
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileSelect}
              className="hidden"
              id="file-input"
            />
            
            {/* Camera Input for Mobile */}
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileSelect}
              className="hidden"
              id="camera-input"
            />

            <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
              {/* Drag & Drop Zone */}
              <label
                htmlFor="file-input"
                className={`flex-1 block border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
                  isDragging
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-slate-600 bg-slate-800/50 hover:bg-slate-700/50 hover:border-blue-400'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-blue-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t.uploadTitle}
                </h3>
                <p className="text-slate-400 text-sm">{t.uploadDesc}</p>
              </label>

              {/* Camera Button */}
              <label
                htmlFor="camera-input"
                className="flex-1 block border-2 border-slate-600 border-dashed rounded-xl p-8 text-center cursor-pointer bg-slate-800/50 hover:bg-slate-700/50 hover:border-blue-400 transition-all duration-300"
              >
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-blue-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t.cameraTitle}
                </h3>
                <p className="text-slate-400 text-sm">{t.cameraDesc}</p>
              </label>
            </div>

            <div className="text-center mb-6">
              <p className="text-sm text-slate-500">{t.supportedFormats}</p>
              <p className="text-xs text-slate-600 mt-1">{t.pdfSupport}</p>
            </div>

            {selectedFile && (
                <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg className="w-8 h-8 text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div className="text-left">
                        <p className="font-semibold text-white">{selectedFile.name}</p>
                        <p className="text-sm text-slate-400">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleRemoveFile();
                      }}
                      className="text-red-400 hover:text-red-300 font-medium"
                    >
                      {t.remove}
                    </button>
                  </div>
                </div>
              )}

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg">
                <p className="font-medium">{error}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 border-2 border-slate-600 text-slate-300 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300"
              >
                {t.backToHome}
              </button>
              
              {selectedFile && (
                <button
                  onClick={handleAnalyze}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  {t.analyzeReport}
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
    return <PillLoader text={t.analyzing} />;
  }

  // Stage 3: Results Display
  if (stage === 'results' && results) {
    return (
      <div className="bg-slate-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-green-500/20 rounded-full mb-4">
              <svg className="w-12 h-12 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.analysisCompleteTitle}
            </h1>
            <p className="text-xl text-slate-400">
              {t.analysisCompleteSubtitle}
            </p>
          </div>

          {/* Results Cards */}
          <div className="space-y-6">
            {/* Summary Card */}
            {results.summary && (
              <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 border-l-4 border-l-blue-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <svg className="w-6 h-6 text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">{t.summaryTitle}</h2>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">{results.summary}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Medical Insights Card */}
            {results.insights && (
              <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 border-l-4 border-l-purple-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <svg className="w-6 h-6 text-purple-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">{t.insightsTitle}</h2>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">{results.insights}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Modern Medicine Recommendations Card */}
            {results.modernMedicine && (
              <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 border-l-4 border-l-green-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <svg className="w-6 h-6 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">{t.modernMedicineTitle}</h2>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">{results.modernMedicine}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Ayurvedic Solutions Card */}
            {results.ayurvedic && (
              <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 border-l-4 border-l-orange-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-lg">
                    <svg className="w-6 h-6 text-orange-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">{t.ayurvedicTitle}</h2>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">{results.ayurvedic}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Lifestyle & Diet Card */}
            {results.lifestyle && (
              <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 border-l-4 border-l-teal-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/20 rounded-lg">
                    <svg className="w-6 h-6 text-teal-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">{t.lifestyleTitle}</h2>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">{results.lifestyle}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Full Text Fallback (if sections weren't parsed well) */}
            {!results.summary && !results.insights && results.fullText && (
              <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Analysis Results</h2>
                <p className="text-slate-300 leading-relaxed whitespace-pre-line">{results.fullText}</p>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-sm text-yellow-400">
              <strong>{t.disclaimer}</strong>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 border-2 border-slate-600 text-slate-300 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300"
            >
              {t.backToHome}
            </button>
            
            <button
              onClick={() => navigate('/emergency')}
              className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 animate-pulse border-2 border-red-600 flex items-center gap-2"
            >
              <span>🚨</span>
              {t.emergencyAccess}
            </button>
            
            <button
              onClick={handleNewAnalysis}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-blue-600"
            >
              {t.analyzeAnother}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default AIAnalysisPage;
