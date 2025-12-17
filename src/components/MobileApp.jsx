import { useOutletContext } from 'react-router-dom';
import { translations } from '../data/translations';

const MobileApp = () => {
  const { language } = useOutletContext();
  const t = translations[language].mobileApp;

  return (
    <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - App Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {t.title}
            </h2>

            {/* Rating Display */}
            <div className="flex items-center gap-3 mb-8 bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border border-white/5 inline-flex">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold text-white ml-2">4.9</span>
              <span className="text-slate-400 text-sm border-l border-slate-700 pl-3 ml-1">{t.ratingCount}</span>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {t.description}
            </p>

            {/* AI Features List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-slate-300 group">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <svg className="text-green-400 w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="group-hover:text-white transition-colors duration-300">{t.feature1}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 group">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <svg className="text-green-400 w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="group-hover:text-white transition-colors duration-300">{t.feature2}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 group">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <svg className="text-green-400 w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="group-hover:text-white transition-colors duration-300">{t.feature3}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 group">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <svg className="text-green-400 w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="group-hover:text-white transition-colors duration-300">{t.feature4}</span>
              </div>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#app-store" 
                className="bg-slate-800 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-700 transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-slate-400">{t.downloadOn}</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>

              <a 
                href="#google-play" 
                className="bg-slate-800 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-700 transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-slate-400">{t.getItOn}</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-[550px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 shadow-blue-500/20 animate-float">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-10 border-b border-x border-slate-800"></div>
              
              {/* Screen Area */}
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden flex items-center justify-center relative">
                {/* Screen Content */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=1000&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                
                <div className="text-white text-center p-6 relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">ArogyaPlus</h3>
                  <p className="text-sm text-blue-200 mb-8">AI Health Insights</p>
                  <button className="w-full py-3 bg-blue-600 rounded-xl font-bold shadow-lg shadow-blue-600/30">Get Started</button>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 -left-10 bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Analysis Complete</div>
                  <div className="text-sm font-bold text-white">Healthy Heart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
