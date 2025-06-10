import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';
import { companyInfo } from '../data/company-data';
import emailjs from 'emailjs-com';

// Your EmailJS service details
const SERVICE_ID = 'service_u2owwvg';
const TEMPLATE_ID = 'template_vpocrer';
const PUBLIC_KEY = 'oeLIocdAwU8dk0S4d';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      time: new Date().toLocaleString()
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log('Message sent:', result.text);
        // Optionally clear form
        setFormData({ name: '', email: '', company: '', message: '' });
        // Show success feedback here
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        // Show error feedback here
      });
  };

  return (
    <section id="contact" className="py-20 bg-neutral">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">Contact Us</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to discuss your industrial needs and discover how we can help your business succeed
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="font-montserrat font-semibold text-2xl text-primary mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent p-3 rounded-full flex-shrink-0"><MapPin className="text-primary" size={20} /></div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg text-primary mb-2">Address</h4>
                  <p className="font-lato text-gray-700">{companyInfo.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent p-3 rounded-full flex-shrink-0"><Phone className="text-primary" size={20} /></div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg text-primary mb-2">Phone</h4>
                  <p className="font-lato text-gray-700">{companyInfo.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent p-3 rounded-full flex-shrink-0"><Mail className="text-primary" size={20} /></div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg text-primary mb-2">Email</h4>
                  <p className="font-lato text-gray-700">{companyInfo.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent p-3 rounded-full flex-shrink-0"><Globe className="text-primary" size={20} /></div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg text-primary mb-2">Website</h4>
                  <p className="font-lato text-gray-700">{companyInfo.contact.website}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
         {/* <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-montserrat font-semibold text-2xl text-primary mb-6">Send Us a Message</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-lato font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block font-lato font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-lato font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="mb-6">
                <label className="block font-lato font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-yellow-600 text-primary font-montserrat font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div> 
    </section>
  );
};

export default Contact;
