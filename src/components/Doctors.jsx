import { useOutletContext } from 'react-router-dom';
import { translations } from '../data/translations';

const Doctors = () => {
  const { language } = useOutletContext();
  const t = translations[language].doctors;

  const doctors = [
    {
      name: "Dr. Sarah Mitchell",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. James Anderson",
      specialty: "Neurologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Emily Chen",
      specialty: "Orthopedic Surgeon",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Michael Roberts",
      specialty: "General Physician",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section id="doctors" className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]"></div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10"></div>
                <img 
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 relative z-20 -mt-12">
                <div className="bg-slate-800/90 backdrop-blur-sm p-4 rounded-2xl border border-white/5 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{doctor.specialty}</p>
                  <button className="w-full py-3 rounded-xl font-bold text-sm bg-slate-700/50 text-white hover:bg-blue-600 transition-all duration-300 border border-white/10 hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    {t.viewProfile}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
