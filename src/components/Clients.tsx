import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    {
      name: "Samancor",
      logo: "https://www.samancor.com/wp-content/uploads/2019/06/samancor-logo.png",
      description: "Leading chrome and manganese mining company"
    },
    {
      name: "Jubilee Metals",
      logo: "https://www.jubileemetalsgroup.com/wp-content/uploads/2019/11/jubilee-metals-logo.png",
      description: "Diversified metal recovery business"
    },
    {
      name: "B&E International",
      logo: "https://www.be-int.com/wp-content/uploads/2020/01/BE-International-Logo.png",
      description: "Engineering and construction services"
    },
    {
      name: "Sibanye-Stillwater",
      logo: "https://www.sibanyestillwater.com/images/logo.png",
      description: "Global precious metals mining company"
    }
  ];

  return (
    <section id="clients" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Industrial Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="font-montserrat font-bold text-5xl md:text-6xl text-white mb-6">
            Our Trusted <span className="text-accent">Partners</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We maintain strong partnerships with industry leaders, delivering exceptional results 
            through collaboration, trust, and shared commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="bg-gray-50 group-hover:bg-white p-6 rounded-xl mb-6 transition-colors duration-300">
                  <div className="h-16 flex items-center justify-center">
                    <span className="font-montserrat font-bold text-2xl text-primary">
                      {client.name}
                    </span>
                  </div>
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-3">
                  {client.name}
                </h3>
                <p className="font-lato text-gray-600 text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Statement */}
        <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-2xl text-center animate-slide-up">
          <h3 className="font-montserrat font-semibold text-3xl text-accent mb-6">
            Building Lasting Partnerships
          </h3>
          <p className="font-lato text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Our success is measured by the success of our partners. We work closely with leading organizations 
            across various sectors, providing tailored solutions that drive growth, efficiency, and innovation. 
            Together, we build a stronger industrial future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;