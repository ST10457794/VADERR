import React from 'react';
import { companyInfo } from '../data/company-data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            About Us
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="bg-neutral p-8 rounded-lg shadow-lg">
              <p className="font-lato text-lg leading-relaxed text-gray-700 mb-6">
                {companyInfo.about.split('\n\n')[0]}
              </p>
              <p className="font-lato text-lg leading-relaxed text-gray-700">
                {companyInfo.about.split('\n\n')[1]}
              </p>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="bg-primary p-8 rounded-lg text-white shadow-lg">
              <h3 className="font-montserrat font-semibold text-2xl mb-6 text-accent">
                Our Commitment
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-lato text-gray-300">Excellence in every project we undertake</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-lato text-gray-300">Reliability and safety as our top priorities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-lato text-gray-300">Innovative solutions that enhance productivity</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-lato text-gray-300">Building lasting partnerships through integrity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;