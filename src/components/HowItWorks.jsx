import { Link, useOutletContext } from 'react-router-dom';
import { translations } from '../data/translations';

const HowItWorks = () => {
  const { language } = useOutletContext();
  const t = translations[language].howItWorks;

  return (
    <section id="how-it-works" className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]"></div>
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

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 z-0"></div>

          {/* Step 1 - Upload */}
          <div className="relative group">
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-8 mx-auto relative z-10 border border-white/10 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/30">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">1</div>
              <svg className="text-blue-400 w-10 h-10 group-hover:scale-110 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-blue-400 transition-colors duration-300">{t.step1Title}</h3>
            <p className="text-slate-400 text-center leading-relaxed">{t.step1Desc}</p>
          </div>

          {/* Step 2 - Analyze */}
          <div className="relative group">
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-8 mx-auto relative z-10 border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/30">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">2</div>
              <svg className="text-purple-400 w-10 h-10 group-hover:scale-110 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-purple-400 transition-colors duration-300">{t.step2Title}</h3>
            <p className="text-slate-400 text-center leading-relaxed">{t.step2Desc}</p>
          </div>

          {/* Step 3 - Insights */}
          <div className="relative group">
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-8 mx-auto relative z-10 border border-white/10 group-hover:border-green-500/50 transition-all duration-300 shadow-lg shadow-green-500/10 group-hover:shadow-green-500/30">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">3</div>
              <svg className="text-green-400 w-10 h-10 group-hover:scale-110 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-green-400 transition-colors duration-300">{t.step3Title}</h3>
            <p className="text-slate-400 text-center leading-relaxed">{t.step3Desc}</p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-400 mb-2">&lt; 30s</div>
            <div className="text-slate-400 text-sm font-medium">{t.stat1Label}</div>
          </div>

          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-green-400 mb-2">95%+</div>
            <div className="text-slate-400 text-sm font-medium">{t.stat2Label}</div>
          </div>

          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-slate-400 text-sm font-medium">{t.stat3Label}</div>
          </div>

          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-orange-400 mb-2">100+</div>
            <div className="text-slate-400 text-sm font-medium">{t.stat4Label}</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link 
            to="/ai-analysis"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-2 transition-all duration-300 inline-block overflow-hidden"
          >
            <span className="relative z-10">{t.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
