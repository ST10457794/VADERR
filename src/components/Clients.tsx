import React from 'react';
import { Building2, Briefcase, Factory, Shield } from 'lucide-react';

const Clients: React.FC = () => {
  const clientTypes = [
    {
      icon: Building2,
      title: "Global Consumer Goods Corporations",
      description: "Leading multinational companies across various consumer sectors"
    },
    {
      icon: Briefcase,
      title: "Engineering & Technology Companies",
      description: "Innovative firms driving technological advancement and engineering excellence"
    },
    {
      icon: Factory,
      title: "Industrial & Manufacturing Entities",
      description: "Major industrial manufacturers and production facilities worldwide"
    },
    {
      icon: Shield,
      title: "Government & Public Sector",
      description: "Government agencies and public sector organizations requiring specialized services"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-neutral">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            Our Clients & Partners
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We maintain a strong track record of successful collaborations with leading organizations across various sectors. 
            Our commitment to delivering high-quality services has fostered lasting partnerships built on trust and mutual success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <div
                key={index}
                className="group bg-white hover:bg-primary p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-accent group-hover:bg-white p-4 rounded-full flex-shrink-0 transition-colors duration-300">
                    <IconComponent 
                      className="text-primary group-hover:text-accent transition-colors duration-300" 
                      size={32} 
                    />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl text-primary group-hover:text-accent mb-3 transition-colors duration-300">
                      {client.title}
                    </h3>
                    <p className="font-lato text-gray-700 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                      {client.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;