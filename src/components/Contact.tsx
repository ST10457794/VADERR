import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Send, Clock, Award } from "lucide-react";
import { companyInfo } from "../data/company-data";
import emailjs from "@emailjs/browser"; // ✅ updated SDK

// Your EmailJS service details
const SERVICE_ID = "service_u2owwvg";
const TEMPLATE_ID = "template_f45iiav"; 
const PUBLIC_KEY = "oeLIocdAwU8dk0S4d";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", company: "", message: "" });
      })
      .catch((error) => {
        alert("❌ Failed to send message. Please try again later.");
        console.error("EmailJS error:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-neutral to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A94B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="font-montserrat font-bold text-5xl md:text-6xl text-primary mb-6">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-lato text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to discuss your industrial needs? Our expert team is here to
            provide tailored solutions that drive your business forward. Let's
            build something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="font-montserrat font-bold text-3xl text-primary mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-accent to-yellow-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-xl text-primary mb-2">
                      Address
                    </h4>
                    <p className="font-lato text-gray-700 leading-relaxed">
                      {companyInfo.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-accent to-yellow-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-xl text-primary mb-2">
                      Phone
                    </h4>
                    <p className="font-lato text-gray-700 text-lg font-medium">
                      {companyInfo.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-accent to-yellow-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-xl text-primary mb-2">
                      Email
                    </h4>
                    <p className="font-lato text-gray-700 text-lg">
                      {companyInfo.contact.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-accent to-yellow-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                    <Globe className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-xl text-primary mb-2">
                      Website
                    </h4>
                    <p className="font-lato text-gray-700 text-lg">
                      {companyInfo.contact.website}
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Clock className="text-accent" size={20} />
                    <div>
                      <p className="font-montserrat font-semibold text-primary">
                        Business Hours
                      </p>
                      <p className="font-lato text-sm text-gray-600">
                        Mon - Fri: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-accent" size={20} />
                    <div>
                      <p className="font-montserrat font-semibold text-primary">
                        Response Time
                      </p>
                      <p className="font-lato text-sm text-gray-600">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-primary to-gray-800 p-10 rounded-2xl shadow-xl text-white"
            >
              <h3 className="font-montserrat font-bold text-3xl text-accent mb-8">
                Send Us a Message
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-lato font-medium text-gray-300 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block font-lato font-medium text-gray-300 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-lato font-medium text-gray-300 mb-3">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Your company name"
                />
              </div>

              <div className="mb-8">
                <label className="block font-lato font-medium text-gray-300 mb-3">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-yellow-600 text-primary font-montserrat font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50"
              >
                <Send size={22} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
