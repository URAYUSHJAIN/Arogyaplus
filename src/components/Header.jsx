import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { translations } from '../data/translations';

const Header = ({ language, setLanguage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const t = translations[language].header;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Arogya<span className="text-blue-400">Plus</span></span>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#home" onClick={(e) => handleNavClick(e, 'home')} className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
              {t.home}
            </a>
            <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
              {t.about}
            </a>
            <a href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
              {t.services}
            </a>
            <a href="/#ai-features" onClick={(e) => handleNavClick(e, 'ai-features')} className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300 font-medium flex items-center gap-2">
              {t.aiPlatform}
              <span className="text-[10px] font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-0.5 rounded-full shadow-lg shadow-blue-500/20">{t.new}</span>
            </a>
            <a href="/#doctors" onClick={(e) => handleNavClick(e, 'doctors')} className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
              {t.doctors}
            </a>
            <a href="/#news" onClick={(e) => handleNavClick(e, 'news')} className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
              {t.news}
            </a>
            <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
              {t.contact}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/20 border border-white/30 text-white font-medium hover:bg-white/30 transition-all duration-300"
            >
              {language === 'en' ? t.english : t.hindi}
            </button>

            {/* ArogyaAlert Emergency Button */}
            <Link 
              to="/emergency"
              className="bg-red-500/10 text-red-400 px-6 py-2.5 rounded-full hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-0.5 transition-all duration-300 font-bold inline-flex items-center gap-2 border border-red-500/50 animate-pulse"
              aria-label="Emergency assistance button"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              {t.arogyaAlert}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-xl" id="mobile-menu">
            <nav className="flex flex-col p-4 space-y-2">
              <a href="/#home" onClick={(e) => handleNavClick(e, 'home')} className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 font-medium">
                {t.home}
              </a>
              <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 font-medium">
                {t.about}
              </a>
              <a href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 font-medium">
                {t.services}
              </a>
              <a href="/#ai-features" onClick={(e) => handleNavClick(e, 'ai-features')} className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 font-medium">
                {t.aiPlatform}
              </a>
              <a href="/#doctors" onClick={(e) => handleNavClick(e, 'doctors')} className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 font-medium">
                {t.doctors}
              </a>
              <a href="/#news" onClick={(e) => handleNavClick(e, 'news')} className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 font-medium">
                {t.news}
              </a>

              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 font-medium border border-white/10 mt-2"
              >
                {language === 'en' ? '🇮🇳 Switch to Hindi' : '🇺🇸 Switch to English'}
              </button>
              
              <Link 
                to="/emergency"
                className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 hover:shadow-2xl transition-all duration-300 font-bold mt-4 text-center shadow-lg shadow-red-500/50 border border-red-500 animate-pulse"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Emergency assistance button"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {t.arogyaAlert}
                </span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
