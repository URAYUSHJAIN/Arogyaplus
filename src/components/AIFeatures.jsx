import { Link, useOutletContext } from 'react-router-dom';
import { translations } from '../data/translations';

const AIFeatures = () => {
  const { language } = useOutletContext();
  const t = translations[language].aiFeatures;

  return (
    <section id="ai-features" className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 - OCR Technology */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-blue-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t.smartReportAnalysis}</h3>
            <p className="text-slate-400 leading-relaxed">{t.smartReportDesc}</p>
          </div>

          {/* Feature Card 2 - Computer Vision */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-purple-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t.predictiveHealth}</h3>
            <p className="text-slate-400 leading-relaxed">{t.predictiveHealthDesc}</p>
          </div>

          {/* Feature Card 3 - Natural Language Processing */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10">
            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-green-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t.ayurvedicIntegration}</h3>
            <p className="text-slate-400 leading-relaxed">{t.ayurvedicDesc}</p>
          </div>

          {/* Feature Card 4 - Personalized Insights */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-orange-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                <path d="M13 10h3m-3 4h3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t.doctorConnection}</h3>
            <p className="text-slate-400 leading-relaxed">{t.doctorDesc}</p>
          </div>

          {/* Feature Card 5 - Health Trend Tracking */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-indigo-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t.secureRecords}</h3>
            <p className="text-slate-400 leading-relaxed">{t.secureDesc}</p>
          </div>

          {/* Feature Card 6 - Integrated Medicine */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-teal-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t.integratedMedicine}</h3>
            <p className="text-slate-400 leading-relaxed">{t.integratedDesc}</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link 
            to="/ai-analysis"
            style={{ color: 'white' }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl text-white font-extrabold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-2 transition-all duration-300 mt-12 inline-block overflow-hidden"
          >
            <span className="relative z-10">{t.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
