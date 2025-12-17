import { useOutletContext } from 'react-router-dom';
import { translations } from '../data/translations';

const Specialties = () => {
  const { language } = useOutletContext();
  const t = translations[language].specialties;

  return (
    <section className="relative bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Specialty 1 - Medicine & Neurology */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-blue-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t.spec1Title}</h3>
            <p className="text-slate-400 mb-4 text-sm">{t.spec1Desc}</p>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              {t.readMore}
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Specialty 2 - Cardiology */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-red-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t.spec2Title}</h3>
            <p className="text-slate-400 mb-4 text-sm">{t.spec2Desc}</p>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              {t.readMore}
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Specialty 3 - Neurology */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-purple-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t.spec3Title}</h3>
            <p className="text-slate-400 mb-4 text-sm">{t.spec3Desc}</p>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              {t.readMore}
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Specialty 4 - Orthopedic */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-green-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t.spec4Title}</h3>
            <p className="text-slate-400 mb-4 text-sm">{t.spec4Desc}</p>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              {t.readMore}
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Specialty 5 - Surgery */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-orange-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t.spec5Title}</h3>
            <p className="text-slate-400 mb-4 text-sm">{t.spec5Desc}</p>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              {t.readMore}
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Specialty 6 - Dental Care */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-teal-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Dental Care</h3>
            <p className="text-slate-400 mb-4 text-sm">Complete dental health and cosmetic dentistry</p>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Read More
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Specialty 7 - Ophthalmology */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-indigo-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Ophthalmology</h3>
            <p className="text-slate-400 mb-4 text-sm">Expert eye care and vision correction services</p>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Read More
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Specialty 8 - Face & Facilities */}
          <div className="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="text-pink-400 w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Face & Facilities</h3>
            <p className="text-slate-400 mb-4 text-sm">Facial treatments and modern medical facilities</p>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Read More
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

export default Specialties;
