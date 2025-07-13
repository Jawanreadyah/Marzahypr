import React from 'react';
import { ChevronRight, MapPin, Phone, Clock, Star } from 'lucide-react';

const GoogleSubsections = () => {
  const subsections = [
    {
      title: "Stores",
      description: "We deliver an exceptional shopping experience by offering premium quality products, fresh produce, and world-class customer service across our Qatar locations.",
      icon: <MapPin className="w-5 h-5 text-blue-500" />,
      link: "#stores"
    },
    {
      title: "Contact us", 
      description: "How can we help you today? Marza Hypermarket customer service team is available 24/7 to assist with your shopping needs and inquiries.",
      icon: <Phone className="w-5 h-5 text-blue-500" />,
      link: "#contact"
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          {subsections.map((section, index) => (
            <div key={index} className="group">
              <a 
                href={section.link}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className="mt-1">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-blue-400 text-lg font-medium mb-2 group-hover:text-blue-300">
                      {section.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
              </a>
            </div>
          ))}
        </div>
        
        {/* Additional Business Information */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-gray-300">Open 8:00 AM - 11:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-300">4.8/5 (500+ reviews)</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="text-gray-300">Doha, Qatar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleSubsections;