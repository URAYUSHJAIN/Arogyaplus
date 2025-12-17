import { Link, useNavigate, useLocation } from 'react-router-dom';
import { translations } from '../data/translations';

const Footer = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const t = translations[language].footer;

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-400 hover:text-white transition-colors">
                  {t.aboutUs}
                </a>
              </li>
              <li>
                <a href="/#ai-features" onClick={(e) => handleNavClick(e, 'ai-features')} className="text-slate-400 hover:text-white transition-colors">
                  {t.aiTechnology}
                </a>
              </li>
              <li>
                <Link to="/ai-analysis" className="text-slate-400 hover:text-white transition-colors">
                  {t.aiReportAnalysis}
                </Link>
              </li>
              <li>
                <a href="/#doctors" onClick={(e) => handleNavClick(e, 'doctors')} className="text-slate-400 hover:text-white transition-colors">
                  {t.ourDoctors}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-400">{t.services}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-400 hover:text-white transition-colors">
                  {t.ourServices}
                </a>
              </li>
              <li>
                <a href="/#specialties" onClick={(e) => handleNavClick(e, 'specialties')} className="text-slate-400 hover:text-white transition-colors">
                  {t.specialties}
                </a>
              </li>
              <li>
                <a href="/#patient-care" onClick={(e) => handleNavClick(e, 'patient-care')} className="text-slate-400 hover:text-white transition-colors">
                  {t.patientCare}
                </a>
              </li>
              <li>
                <Link to="/emergency" className="text-red-400 hover:text-red-300 font-semibold">
                  {t.emergencyServices}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-cyan-400">{t.contactUs}</h3>
            <ul className="space-y-2 text-slate-400">
              <li>B-Block, Sector 18, Noida, UP</li>
              <li>
                <a href="tel:+911124567890" className="hover:text-white">
                  +91 11 2456 7890
                </a>
              </li>
              <li>
                <a href="mailto:info@arogyaplus.com" className="hover:text-white">
                  info@arogyaplus.com
                </a>
              </li>
              <li className="flex gap-4 mt-2">
                <a href="tel:108" className="text-red-400 hover:text-red-300 font-semibold">
                  Emergency: 108
                </a>
                <a href="tel:102" className="text-green-400 hover:text-green-300 font-semibold">
                  Ambulance: 102
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} ArogyaPlus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
