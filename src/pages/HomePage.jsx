import Hero from '../components/Hero';
import About from '../components/About';
import AIFeatures from '../components/AIFeatures';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import PatientCare from '../components/PatientCare';
import Specialties from '../components/Specialties';
import Testimonials from '../components/Testimonials';
import Doctors from '../components/Doctors';
import Blog from '../components/Blog';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <AIFeatures />
      <HowItWorks />
      <Services />
      <PatientCare />
      <Specialties />
      <Testimonials />
      <Doctors />
      <Blog />
    </>
  );
};

export default HomePage;
