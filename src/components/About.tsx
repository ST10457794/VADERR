import React from 'react';
import { companyInfo } from '../data/company-data';
import { Award, Users, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="font-montserrat font-bold text-5xl md:text-6xl text-primary mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established in 2021, we are a dynamic leader in industrial services, 
            specializing in plant hire, maintenance, and equipment trading.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Industrial Operations"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-montserrat font-bold text-2xl mb-2">Industrial Excellence</h3>
                <p className="font-lato text-lg opacity-90">Delivering world-class solutions</p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              <p className="font-lato text-lg leading-relaxed text-gray-700">
                {companyInfo.about.split('\n\n')[0]}
              </p>
              <p className="font-lato text-lg leading-relaxed text-gray-700">
                {companyInfo.about.split('\n\n')[1]}
              </p>
              
              <div className="bg-gradient-to-r from-primary to-gray-800 p-8 rounded-xl text-white mt-8">
                <h3 className="font-montserrat font-semibold text-2xl mb-6 text-accent">
                  Our Commitment
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Award className="text-accent flex-shrink-0" size={20} />
                    <p className="font-lato text-sm">Excellence in every project</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-accent flex-shrink-0" size={20} />
                    <p className="font-lato text-sm">Reliability and safety first</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-accent flex-shrink-0" size={20} />
                    <p className="font-lato text-sm">Innovative solutions</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="text-accent flex-shrink-0" size={20} />
                    <p className="font-lato text-sm">Lasting partnerships</p>
                  </div>
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