import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [showMapsModal, setShowMapsModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero images array
  const heroImages = [
    'https://www.marzahypermarket.com/admin/uploads/slider-images/Image-marza-home-slider-211117110841.png',
    'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ];

  // Refs for GSAP animations
  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // GSAP animations
  useEffect(() => {
    if (heroContentRef.current) {
      // Animate content from bottom
      gsap.fromTo(heroContentRef.current.children, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          delay: 0.5
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleVisitStore = () => {
    setShowMapsModal(true);
  };

  const closeMapsModal = () => {
    setShowMapsModal(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <>
      <section 
        ref={heroRef}
        id="home" 
        className="relative h-[400px] md:h-[450px] lg:h-[580px] bg-gray-50 rounded-3xl mx-6 mt-20 mb-6 overflow-hidden"
        style={{
          backgroundImage: `url(${heroImages[currentSlide]})`
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 z-10"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        <button 
          onClick={goToNextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 z-10"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Logo and Emblem Section - Below Hero Frame */}
      <div className="relative -mt-16 z-20 flex justify-center">
        <div ref={heroContentRef} className="flex items-center space-x-6 bg-white rounded-2xl px-8 py-6 shadow-lg">
          <img 
            src="https://i.imghippo.com/files/LbbB2454MyE.png" 
            alt="Marza Hypermarket" 
            className="h-16 md:h-20 lg:h-24 w-auto"
          />
          {/* Rotated Emblem */}
          <img 
            src="https://i.imghippo.com/files/pWM6612AiA.png" 
            alt="Decorative emblem" 
            className="h-12 md:h-16 lg:h-20 w-auto transform rotate-12"
          />
        </div>
      </div>

      {/* Google Maps Modal */}
      {showMapsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Visit Our Store</h3>
              <button 
                onClick={closeMapsModal}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            
            {/* Maps Content */}
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Marza Hypermarket Location</h4>
                <p className="text-gray-600">Find us at our premium location in Qatar</p>
              </div>
              
              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57707.341477144786!2d51.414998636962885!3d25.313984552053665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dbe7d2a41517%3A0x6ace746c5a8fe4d7!2sMarza%20Hypermarket!5e0!3m2!1sen!2sqa!4v1752322754004!5m2!1sen!2sqa" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Marza Hypermarket Location"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;