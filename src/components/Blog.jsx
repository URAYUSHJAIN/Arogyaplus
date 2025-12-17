import { useOutletContext } from 'react-router-dom';
import { translations } from '../data/translations';

const Blog = () => {
  const { language } = useOutletContext();
  const t = translations[language].blog;

  const articles = [
    {
      category: "Cardiology",
      title: "10 Ways to Keep Your Heart Healthy",
      excerpt: "Learn essential tips for maintaining cardiovascular health and preventing heart disease through lifestyle changes and regular checkups.",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop",
      date: "Jan 15, 2025"
    },
    {
      category: "Mental Health",
      title: "Managing Stress in Modern Life",
      excerpt: "Discover effective strategies for stress management and maintaining mental wellness in today's fast-paced world.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
      date: "Jan 12, 2025"
    },
    {
      category: "Nutrition",
      title: "Balanced Diet for Better Health",
      excerpt: "Expert nutritionists share insights on creating a balanced diet plan that supports overall health and wellbeing.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
      date: "Jan 10, 2025"
    }
  ];

  return (
    <section id="news" className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10"></div>
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold z-20 shadow-lg shadow-blue-600/20">
                  {article.category}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">{article.date}</span>
                  <a href="#read-more" className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    {t.readMore}
                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
