import React from 'react';
import { Shield, CheckCircle, AlertTriangle, FileCheck } from 'lucide-react';

const Safety: React.FC = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "Life Saving Behaviors",
      description: "Our service experts live by the company's Life Saving Behaviors (LSBs), ensuring all work is performed safely"
    },
    {
      icon: CheckCircle,
      title: "Environmental Compliance",
      description: "Meticulous planning and monitoring strategies to minimize environmental impact and ensure regulatory compliance"
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Comprehensive risk assessment and management protocols for every project and operation"
    },
    {
      icon: FileCheck,
      title: "Safety Standards",
      description: "Full compliance with all relevant OHS and environmental safety regulations and industry standards"
    }
  ];

  return (
    <section id="safety" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-accent">
            Health, Safety & Compliance
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Vader R Holdings, the health and safety of our employees and customers is an absolute first. 
            Our dedication to OHS and environmental safety underpins all our operations, ensuring a responsible 
            and sustainable approach to every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {safetyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900 hover:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-accent p-4 rounded-full flex-shrink-0">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl text-accent mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-lato text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center bg-gray-900 p-8 rounded-lg animate-slide-up">
          <h3 className="font-montserrat font-semibold text-2xl text-accent mb-4">
            Our Safety Commitment
          </h3>
          <p className="font-lato text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We are committed to creating a safe working environment through continuous training, 
            regular safety audits, and the implementation of industry-leading safety protocols. 
            Our goal is zero incidents and complete regulatory compliance on every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Safety;