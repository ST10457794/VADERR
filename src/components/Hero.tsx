import React from 'react';
import { Download, Phone, ArrowDown } from 'lucide-react';
import { companyInfo } from '../data/company-data';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCatalogue = () => {
    // This would link to your PDF catalogue
    window.open('/catalogue.pdf', '_blank');
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Industrial Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="https://i.postimg.cc/MH9j29mM/Vader-R-Final.png" 
            alt="Vader R Holdings Logo"
            className="w-48 md:w-64 lg:w-80 mx-auto drop-shadow-2xl transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Company Info */}
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold tracking-wide text-white mb-4">
            {companyInfo.name}
          </h1>
          <p className="text-xl md:text-3xl font-lato font-light text-accent mb-12 tracking-wide">
            {companyInfo.tagline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={downloadCatalogue}
            className="group bg-accent hover:bg-yellow-600 text-primary font-montserrat font-semibold px-10 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
          >
            <Download size={22} />
            Download Catalogue
          </button>
          <button 
            onClick={scrollToContact}
            className="group border-2 border-accent text-accent hover:bg-accent hover:text-primary font-montserrat font-semibold px-10 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-2 hover:scale-105 backdrop-blur-sm bg-white/10"
          >
            <Phone size={22} />
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-white/70 hover:text-accent transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;