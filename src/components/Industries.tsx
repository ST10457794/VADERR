import React from 'react';
import { industries } from '../data/company-data';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            Industries Served
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto">
            Providing products and services to diverse industries, ensuring robust and efficient operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-neutral hover:bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                <span className="font-lato text-gray-700 group-hover:text-gray-300 font-medium transition-colors duration-300">
                  {industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;