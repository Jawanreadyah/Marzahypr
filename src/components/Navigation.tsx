import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on ESC or click outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Always show the original navbar */}
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
                  <Link to="/" className={`font-inter hover:text-yellow-600 font-medium transition-colors duration-200 ${location.pathname === '/' ? 'text-gray-900' : 'text-gray-600'}`}>Home</Link>
                  <a href="#about" className="font-inter text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200">About</a>
                  <a href="#departments" className="font-inter text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200">Departments</a>
                  <a href="#offers" className="font-inter text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200">Offers</a>
                  <Link to="/careers" className={`font-inter hover:text-yellow-600 font-medium transition-colors duration-200 ${location.pathname === '/careers' ? 'text-gray-900' : 'text-gray-600'}`}>Careers</Link>
                  <a href="#contact" className="font-inter text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200">Contact</a>
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

      {/* Mobile Floating Menu Button (extra navigation) */}
      <button
        className="md:hidden fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-lg border border-gray-200/50 shadow-xl rounded-full p-4 flex items-center justify-center transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((v) => !v)}
        style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex items-end justify-end bg-black/40 backdrop-blur-sm transition-all animate-fade-in-up">
          <div
            ref={menuRef}
            className="w-full max-w-xs bg-white/90 backdrop-blur-lg border border-gray-200/50 rounded-t-3xl shadow-2xl p-8 pb-12 flex flex-col gap-6 animate-slide-right relative"
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <nav className="flex flex-col gap-4 mt-2">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`font-inter text-lg font-semibold transition-colors duration-200 ${location.pathname === '/' ? 'text-yellow-600' : 'text-gray-800'}`}>Home</Link>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-inter text-lg text-gray-800 font-semibold transition-colors duration-200">About</a>
              <a href="#departments" onClick={() => setMobileMenuOpen(false)} className="font-inter text-lg text-gray-800 font-semibold transition-colors duration-200">Departments</a>
              <a href="#offers" onClick={() => setMobileMenuOpen(false)} className="font-inter text-lg text-gray-800 font-semibold transition-colors duration-200">Offers</a>
              <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className={`font-inter text-lg font-semibold transition-colors duration-200 ${location.pathname === '/careers' ? 'text-yellow-600' : 'text-gray-800'}`}>Careers</Link>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-inter text-lg text-gray-800 font-semibold transition-colors duration-200">Contact</a>
            </nav>
            <div className="flex items-center gap-6 mt-8">
              <a 
                href="https://www.instagram.com/marzahypermarket" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
              >
                <Instagram size={22} />
              </a>
              <a 
                href="https://www.facebook.com/marzahypermarket" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
              >
                <Facebook size={22} />
              </a>
              <a 
                href="https://www.tiktok.com/@marzahypermarket" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;