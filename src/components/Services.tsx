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
    <section id="services" className="py-24 bg-gradient-to-b from-neutral to-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Industrial Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="font-montserrat font-bold text-5xl md:text-6xl text-primary mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive engineering and industrial services designed to meet the most complex sector needs 
            with precision, reliability, and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group bg-white hover:bg-primary p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up border border-gray-100 hover:border-accent/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-accent to-yellow-600 group-hover:from-white group-hover:to-gray-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 mx-auto transition-all duration-500 shadow-lg">
                  <IconComponent 
                    className="text-primary group-hover:text-accent transition-colors duration-500" 
                    size={28} 
                  />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-primary group-hover:text-accent mb-4 text-center transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-lato text-gray-600 group-hover:text-gray-300 text-center leading-relaxed transition-colors duration-500 text-sm">
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