import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#ai-features" onClick={(e) => handleNavClick(e, 'ai-features')} className="text-gray-400 hover:text-white transition-colors duration-300">
                  AI Technology
                </a>
              </li>
              <li>
                <Link to="/ai-analysis" className="text-gray-400 hover:text-white transition-colors duration-300">
                  AI Report Analysis
                </Link>
              </li>
              <li>
                <a href="/#doctors" onClick={(e) => handleNavClick(e, 'doctors')} className="text-gray-400 hover:text-white transition-colors duration-300">
                  Our Doctors
                </a>
              </li>
              <li>
                <Link to="/emergency" className="text-red-400 hover:text-red-300 transition-colors duration-300 flex items-center gap-1 font-semibold">
                  <span>🚨</span>
                  Emergency
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-400 hover:text-white transition-colors duration-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/#specialties" onClick={(e) => handleNavClick(e, 'specialties')} className="text-gray-400 hover:text-white transition-colors duration-300">
                  Specialties
                </a>
              </li>
              <li>
                <a href="/#patient-care" onClick={(e) => handleNavClick(e, 'patient-care')} className="text-gray-400 hover:text-white transition-colors duration-300">
                  Patient Care
                </a>
              </li>
              <li>
                <a href="/#mobile-app" onClick={(e) => handleNavClick(e, 'mobile-app')} className="text-gray-400 hover:text-white transition-colors duration-300">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Medical Center Drive, Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@arogyaplus.com" className="hover:text-white transition-colors duration-300">
                  info@arogyaplus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-800 pt-4 mt-6">
          <p className="text-gray-500 text-sm text-center">
            © 2025 ArogyaPlus - AI-Powered Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

