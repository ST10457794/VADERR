import React from 'react';
import { companyInfo } from '../data/company-data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <h3 className="font-montserrat font-bold text-3xl mb-4 text-accent">
            {companyInfo.name}
          </h3>
          <p className="font-lato text-lg mb-8 text-gray-300">
            {companyInfo.tagline}
          </p>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-lato text-gray-400">
                © 2024 Vader R Holdings (Pty) Ltd. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#about" className="font-lato text-gray-400 hover:text-accent transition-colors duration-300">
                  About
                </a>
                <a href="#services" className="font-lato text-gray-400 hover:text-accent transition-colors duration-300">
                  Services
                </a>
                <a href="#projects" className="font-lato text-gray-400 hover:text-accent transition-colors duration-300">
                  Projects
                </a>
                <a href="#contact" className="font-lato text-gray-400 hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;