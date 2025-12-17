import { useOutletContext } from 'react-router-dom';
import { translations } from '../data/translations';

const Services = () => {
  const { language } = useOutletContext();
  const t = translations[language].services;

  return (
    <section id="services" className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Card 1 - AI Report Analysis */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex items-start gap-6">
            <div className="shrink-0 p-4 bg-blue-500/20 rounded-2xl group-hover:bg-blue-500/30 transition-colors">
              <svg className="text-blue-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{t.service1Title}</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">{t.service1Desc}</p>
              <a href="#ai-features" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                {t.learnMore}
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Card 2 - For a Practice */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10 flex items-start gap-6">
            <div className="shrink-0 p-4 bg-green-500/20 rounded-2xl group-hover:bg-green-500/30 transition-colors">
              <svg className="text-green-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{t.service2Title}</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">{t.service2Desc}</p>
              <a href="#contact" className="text-green-400 hover:text-green-300 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                {t.learnMore}
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Card 3 - DMP Locations */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 flex items-start gap-6">
            <div className="shrink-0 p-4 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/30 transition-colors">
              <svg className="text-purple-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{t.service3Title}</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">{t.service3Desc}</p>
              <a href="#contact" className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                {t.learnMore}
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Card 4 - Connect with Us */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 flex items-start gap-6">
            <div className="shrink-0 p-4 bg-orange-500/20 rounded-2xl group-hover:bg-orange-500/30 transition-colors">
              <svg className="text-orange-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{t.service4Title}</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">{t.service4Desc}</p>
              <a href="#contact" className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                {t.learnMore}
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

