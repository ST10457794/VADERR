import React from 'react';
import { Download, Phone } from 'lucide-react';
import { companyInfo } from '../data/company-data';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-white text-primary px-4 text-center">
      
      {/* Massive Logo */}
      <img 
        src="https://i.postimg.cc/MH9j29mM/Vader-R-Final.png" 
        alt="Vader R Holdings Logo"
        className="w-56 md:w-72 lg:w-96 mb-8 drop-shadow-xl transition-all duration-300"
      />

      {/* Company Info */}
      <h1 className="text-3xl md:text-5xl font-montserrat font-bold tracking-wide text-primary mb-2">
        {companyInfo.name}
      </h1>
      <p className="text-lg md:text-2xl font-lato font-light text-gray-700 mb-10">
        {companyInfo.tagline}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
       {/*<button className="group bg-accent hover:bg-yellow-600 text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-xl transform hover:-translate-y-1">
          <Download size={20} />
          Download Profile
        </button> */}
        <button 
          onClick={scrollToContact}
          className="group border-2 border-accent text-accent hover:bg-accent hover:text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1"
        >
          <Phone size={20} />
          Contact Us
        </button>
      </div>

    </section>
  );
};

export default Hero;
