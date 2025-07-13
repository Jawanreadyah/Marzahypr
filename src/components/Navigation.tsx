import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-lg px-6 py-3">
          <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="https://i.imghippo.com/files/LbbB2454MyE.png" 
                alt="Marza Hypermarket" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`font-inter hover:text-yellow-600 font-medium transition-colors duration-200 ${location.pathname === '/' ? 'text-gray-900' : 'text-gray-600'}`}>
                Home
              </Link>
              <a href="#about" className="font-inter text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200">
                About
              </a>
              <a href="#departments" className="font-inter text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200">
                Departments
              </a>
              <a href="#offers" className="font-inter text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200">
                Offers
              </a>
              <Link to="/careers" className={`font-inter hover:text-yellow-600 font-medium transition-colors duration-200 ${location.pathname === '/careers' ? 'text-gray-900' : 'text-gray-600'}`}>
                Careers
              </Link>
              <a href="#contact" className="font-inter text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.instagram.com/marzahypermarket" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.facebook.com/marzahypermarket" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.tiktok.com/@marzahypermarket" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;