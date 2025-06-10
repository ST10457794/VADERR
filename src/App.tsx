import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Industries from './components/Industries';
import Clients from './components/Clients';
import Safety from './components/Safety';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="font-lato">
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Expertise />
      <Projects />
      <Industries />
      <Clients />
      <Safety />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;