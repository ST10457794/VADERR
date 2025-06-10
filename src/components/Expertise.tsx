import React from 'react';
import { Award, Users, Globe, Clock } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-accent">
            Our Expertise
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Vader R Holdings is powered by a skilled workforce of technicians and backed by years of experience 
            and daily application, ensuring the highest quality and precision in all our services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-slide-up">
            <div className="bg-accent p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary" size={28} />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2 text-accent">17+ Years</h3>
            <p className="font-lato text-gray-300">Combined Engineering Experience</p>
          </div>
          
          <div className="text-center animate-slide-up">
            <div className="bg-accent p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="text-primary" size={28} />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2 text-accent">Expert Team</h3>
            <p className="font-lato text-gray-300">Qualified Mechanical Engineers</p>
          </div>
          
          <div className="text-center animate-slide-up">
            <div className="bg-accent p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="text-primary" size={28} />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2 text-accent">Global Reach</h3>
            <p className="font-lato text-gray-300">International Project Experience</p>
          </div>
          
          <div className="text-center animate-slide-up">
            <div className="bg-accent p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="text-primary" size={28} />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2 text-accent">24/7 Support</h3>
            <p className="font-lato text-gray-300">Emergency Response Teams</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl animate-slide-up">
          <div className="text-center">
            <h3 className="font-montserrat font-semibold text-2xl mb-6 text-accent">
              Leadership Excellence
            </h3>
            <p className="font-lato text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Our managing director, with years of combined experience has gained vast expertise, skill, leadership, and project management in various aspects of the 
              Engineering field. This extensive experience, including international work, prepares us to deliver 
              world-class service, solutions, and support wherever our clients may be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;