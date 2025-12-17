import { useOutletContext } from 'react-router-dom';
import { translations } from '../data/translations';

const PatientCare = () => {
  const { language } = useOutletContext();
  const t = translations[language].patientCare;

  return (
    <section id="patient-care" className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Features List */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              {t.title}
            </h2>
            
            <div className="space-y-5 mb-10">
              {[
                t.item1,
                t.item2,
                t.item3,
                t.item4,
                t.item5,
                t.item6,
                t.item7,
                t.item8
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-500/30 transition-colors duration-300">
                    <svg className="text-green-400 w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-300 text-lg group-hover:text-white transition-colors duration-300">{item}</p>
                </div>
              ))}
            </div>

            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-2 transition-all duration-300 inline-block overflow-hidden">
              <span className="relative z-10">{t.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Column - Statistics & Imagery */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=600&fit=crop" 
                alt="Medical team providing patient care"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            
            {/* Statistics Card */}
            <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10 animate-float">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">{t.stat1Value}</div>
              <div className="text-white font-bold text-lg">{t.stat1Label}</div>
              <div className="text-slate-400 font-medium mt-2 text-sm">{t.stat2Label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientCare;
