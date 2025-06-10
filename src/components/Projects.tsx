import React from 'react';
import { majorProjects } from '../data/company-data';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-neutral">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            Major Projects Completed
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto">
            Successfully delivered numerous major projects across various sectors, demonstrating our extensive capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {majorProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-accent group-hover:bg-white px-3 py-1 rounded-full">
                  <span className="font-montserrat font-semibold text-sm text-primary group-hover:text-accent transition-colors duration-300">
                    {project.value}
                  </span>
                </div>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary group-hover:text-accent mb-2 transition-colors duration-300">
                {project.name}
              </h3>
              <div className="w-12 h-1 bg-accent group-hover:bg-white transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;