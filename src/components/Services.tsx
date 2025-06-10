import React from 'react';
import { 
  Truck, Zap, Package, Settings, Wrench, Leaf, Hammer, Building 
} from 'lucide-react';
import { services } from '../data/company-data';

const iconMap = {
  Truck, Zap, Package, Settings, Wrench, Leaf, Hammer, Building
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering and industrial services designed to meet complex sector needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group bg-neutral hover:bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-accent group-hover:bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto transition-colors duration-300">
                  <IconComponent 
                    className="text-primary group-hover:text-accent transition-colors duration-300" 
                    size={28} 
                  />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-primary group-hover:text-accent mb-4 text-center transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-lato text-gray-700 group-hover:text-gray-300 text-center leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;