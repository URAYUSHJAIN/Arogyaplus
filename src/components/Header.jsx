import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="ArogyaPlus" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              About
            </a>
            <a href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Services
            </a>
            <a href="/#ai-features" onClick={(e) => handleNavClick(e, 'ai-features')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              AI Platform
              <span className="ml-1 text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-0.5 rounded-full">NEW</span>
            </a>
            <a href="/#doctors" onClick={(e) => handleNavClick(e, 'doctors')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Doctors
            </a>
            <a href="/#news" onClick={(e) => handleNavClick(e, 'news')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              News
            </a>
            <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          {/* Try AI Analysis Button */}
          <div className="hidden md:block">
            <Link 
              to="/ai-analysis"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold inline-block shadow-md"
            >
              Try AI Analysis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
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
          <div className="md:hidden pb-4" id="mobile-menu">
            <nav className="flex flex-col space-y-2">
              <a href="/#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium">
                Home
              </a>
              <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium">
                About
              </a>
              <a href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium">
                Services
              </a>
              <a href="/#ai-features" onClick={(e) => handleNavClick(e, 'ai-features')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium">
                AI Platform
              </a>
              <a href="/#doctors" onClick={(e) => handleNavClick(e, 'doctors')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium">
                Doctors
              </a>
              <a href="/#news" onClick={(e) => handleNavClick(e, 'news')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium">
                News
              </a>
              
              <Link 
                to="/ai-analysis"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold mt-2 inline-block text-center shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Try AI Analysis
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
