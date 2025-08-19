import React from 'react';

const Projects: React.FC = () => {
  const projectCategories = [
    {
      title: "Mining & Extraction",
      image: "https://images.pexels.com/photos/2101140/pexels-photo-2101140.jpeg",
      description: "Advanced mining equipment and extraction solutions for precious metals and minerals",
      projects: ["Chrome Mining Operations", "Manganese Extraction", "Gold Recovery Systems"]
    },
    {
      title: "Industrial Manufacturing",
      image: "https://images.pexels.com/photos/33407055/pexels-photo-33407055.jpeg",
      description: "Comprehensive manufacturing support and equipment solutions",
      projects: ["Production Line Optimization", "Equipment Maintenance", "Process Automation"]
    },
    {
      title: "Engineering Solutions",
      image: "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg",
      description: "Custom engineering and fabrication services for complex industrial needs",
      projects: ["Steel Fabrication", "CNC Machining", "Electrical Systems"]
    },
    {
      title: "Plant Maintenance",
      image: "https://images.pexels.com/photos/14484347/pexels-photo-14484347.jpeg",
      description: "Comprehensive maintenance and repair services for industrial facilities",
      projects: ["Preventive Maintenance", "Emergency Repairs", "Equipment Upgrades"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-neutral relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="font-montserrat font-bold text-5xl md:text-6xl text-primary mb-6">
            Project <span className="text-accent">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Delivering exceptional results across diverse industrial sectors with precision, 
            innovation, and unwavering commitment to quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="relative h-80">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="font-montserrat font-bold text-2xl text-white mb-3">
                  {category.title}
                </h3>
                <p className="font-lato text-gray-200 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Project List */}
                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.projects.map((project, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="font-lato text-sm text-gray-300">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-slide-up">
          <div className="bg-gradient-to-r from-primary to-gray-800 p-12 rounded-2xl">
            <h3 className="font-montserrat font-bold text-3xl text-accent mb-6">
              Ready to Start Your Next Project?
            </h3>
            <p className="font-lato text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us bring our expertise and proven track record to your next industrial challenge. 
              Contact us today to discuss how we can help achieve your goals.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-yellow-600 text-primary font-montserrat font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-xl"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;