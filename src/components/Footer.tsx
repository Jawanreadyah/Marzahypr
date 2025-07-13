import React from 'react';
import { MapPin, Phone, Mail, Clock, Star, ShoppingBag, Users, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        {/* Top Bar with Location and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 space-y-4 md:space-y-0">
          {/* Location Button */}
          <button className="flex items-center space-x-2 bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200">
            <MapPin size={16} />
            <span>Visit Us: Doha, Qatar</span>
          </button>

          {/* Contact Button */}
          <button className="flex items-center space-x-2 bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors duration-200">
            <Phone size={16} />
            <span>Contact Us Today</span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 space-y-8 lg:space-y-0">
          {/* Left Side - Main Headline */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Ready to Experience<br />
              Premium Shopping?
            </h1>
          </div>

          {/* Right Side - Navigation Menu */}
          <div className="flex flex-wrap items-center gap-6 lg:gap-8">
            <a href="#home" className="flex items-center space-x-2 text-white hover:text-yellow-500 transition-colors duration-200">
              <ShoppingBag size={16} />
              <span className="text-sm">Shop</span>
            </a>
            <a href="#about" className="flex items-center space-x-2 text-white hover:text-yellow-500 transition-colors duration-200">
              <Users size={16} />
              <span className="text-sm">About Us</span>
            </a>
            <a href="#departments" className="flex items-center space-x-2 text-white hover:text-yellow-500 transition-colors duration-200">
              <Award size={16} />
              <span className="text-sm">Departments</span>
            </a>
            <a href="#offers" className="flex items-center space-x-2 text-white hover:text-yellow-500 transition-colors duration-200">
              <Star size={16} />
              <span className="text-sm">Special Offers</span>
            </a>
            <a href="#contact" className="flex items-center space-x-2 text-white hover:text-yellow-500 transition-colors duration-200">
              <Phone size={16} />
              <span className="text-sm">Contact</span>
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-800 mb-12"></div>

        {/* Bottom Section - Contact Information */}
        <div className="grid md:grid-cols-3 gap-16">
          {/* Main Store Location */}
          <div>
            <h4 className="text-base font-normal text-white mb-4">Main Store Location</h4>
            <div className="text-gray-400 text-sm leading-relaxed space-y-1">
              <p>Marza Hypermarket</p>
              <p>Premium Shopping Center</p>
              <p>Al Rayyan Road</p>
              <p>Doha, Qatar</p>
            </div>
          </div>

          {/* Business Hours & Services */}
          <div>
            <h4 className="text-base font-normal text-white mb-4">Store Hours & Services</h4>
            <div className="text-gray-400 text-sm leading-relaxed space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>Daily: 8:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={14} />
                <span>Fresh Produce Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingBag size={14} />
                <span>Home Delivery Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={14} />
                <span>Premium Quality Guarantee</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h4 className="text-base font-normal text-white mb-2">Email</h4>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-yellow-500" />
                <p className="text-gray-400 text-sm">info@marzahypermarket.qa</p>
              </div>
            </div>

            {/* Phone */}
            <div>
              <h4 className="text-base font-normal text-white mb-2">Phone</h4>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-yellow-500" />
                <p className="text-gray-400 text-sm">+974 4444 5555</p>
              </div>
            </div>

            {/* Customer Rating */}
            <div>
              <h4 className="text-base font-normal text-white mb-2">Customer Rating</h4>
              <div className="flex items-center space-x-2">
                <Star size={14} className="text-yellow-500" />
                <p className="text-gray-400 text-sm">4.8/5 (500+ reviews)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <img 
                src="https://i.imghippo.com/files/LbbB2454MyE.png" 
                alt="Marza Hypermarket" 
                className="h-8 w-auto"
              />
              <span className="text-gray-400 text-sm">© 2025 Marza Hypermarket. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#careers" className="hover:text-white transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;