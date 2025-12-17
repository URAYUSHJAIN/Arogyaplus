import { useOutletContext } from 'react-router-dom';
import { translations } from '../data/translations';

const About = () => {
  const { language } = useOutletContext();
  const t = translations[language].about;

  return (
    <section id="about" className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image Collage */}
          <div className="relative">
            {/* Main Circle Image */}
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-8 border-slate-800/50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop" 
                alt="Medical Professional" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Floating Small Circle 1 */}
            <div className="absolute top-0 left-0 z-20 w-24 h-24 rounded-full overflow-hidden border-4 border-slate-800 shadow-xl animate-float-slow hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop" 
                alt="Doctor" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Small Circle 2 */}
            <div className="absolute bottom-10 right-10 z-20 w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 shadow-xl animate-float-medium hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop" 
                alt="AI Analysis" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {t.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t.subtitle}</span>
            </h2>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.feature1Title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {t.feature1Desc}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.feature2Title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {t.feature2Desc}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.feature3Title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {t.feature3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
