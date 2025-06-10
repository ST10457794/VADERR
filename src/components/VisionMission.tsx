import React from 'react';
import { Target, Eye } from 'lucide-react';
import { companyInfo } from '../data/company-data';

const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="py-20 bg-neutral">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            Vision & Mission
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-accent p-3 rounded-full">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="font-montserrat font-semibold text-2xl text-primary">
                Our Mission
              </h3>
            </div>
            <p className="font-lato text-gray-700 leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>
          
          {/* Vision */}
          <div className="bg-primary p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-accent p-3 rounded-full">
                <Eye className="text-primary" size={24} />
              </div>
              <h3 className="font-montserrat font-semibold text-2xl text-accent">
                Our Vision
              </h3>
            </div>
            <p className="font-lato text-gray-300 leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;