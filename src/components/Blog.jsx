const Blog = () => {
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
    <section id="news" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          New Top Articles From Expert Doctors
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Stay informed with the latest health tips and medical insights
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{article.date}</span>
                  <a href="#read-more" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
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
