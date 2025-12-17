import { Link, useOutletContext } from 'react-router-dom';
import { translations } from '../data/translations';

const Hero = () => {
  const { language } = useOutletContext();
  const t = translations[language].hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28">
      {/* Background Gradients/Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-start text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xl mb-8 hover:-translate-y-1 transition-transform duration-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-100 text-sm font-medium tracking-wide">{t.poweredBy}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              {t.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {t.subtitle}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              {t.description}
            </p>
            
            <div className="flex flex-wrap gap-5">
              <Link 
                to="/ai-analysis"
                style={{ color: 'white' }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl text-white font-extrabold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">{t.getStarted}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
               
              <Link 
                to="/emergency"
                className="group px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl text-white font-bold text-lg hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                {t.emergencyHelp}
              </Link>
            </div>
          </div>

          {/* Right Column - 3D Glass Cards */}
          <div className="relative hidden lg:block h-[600px]">
             {/* Main Image Card */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/0 rounded-[2.5rem] border border-white/10 backdrop-blur-sm p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-[1.02]">
               <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=900&fit=crop" 
                alt="Doctor using AI" 
                className="w-full h-full object-cover rounded-[2rem] shadow-inner"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating Glass Card 1 - Stats */}
            <div className="absolute top-10 -left-12 bg-slate-800/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 animate-float-slow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">10k+</p>
                  <p className="text-sm text-slate-400">{t.reportsAnalyzed}</p>
                </div>
              </div>
            </div>

            {/* Floating Glass Card 2 - Accuracy */}
            <div className="absolute bottom-20 -right-8 bg-slate-800/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 animate-float-medium delay-150">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">98.5%</p>
                  <p className="text-sm text-slate-400">{t.accuracyRate}</p>
                </div>
              </div>
            </div>

             {/* Floating Glass Card 3 - Speed */}
             <div className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-slate-800/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 animate-float-fast delay-300">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-purple-500/20 rounded-lg">
                   <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                 </div>
                 <div>
                   <p className="text-lg font-bold text-white">&lt; 30s</p>
                   <p className="text-xs text-slate-400">{t.processingSpeed}</p>
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
