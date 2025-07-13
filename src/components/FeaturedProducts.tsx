import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Get up to 5% off discounts',
      bgColor: 'from-yellow-400 to-yellow-500'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: '20% sale on groceries!',
      bgColor: 'from-blue-200 to-orange-200'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Wmx rubber zebra shoes',
      bgColor: 'from-orange-400 to-orange-500'
    }
  ];

  const customerAvatars = [
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
  ];

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      
      gsap.fromTo(cards, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 rounded-b-[4rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16">
          {/* Left Side - Headline and CTA */}
          <div className="flex-1">
            <h2 className="font-anton font-bold text-6xl md:text-7xl text-black leading-tight mb-10">
              Qatar's Best Prices on<br />
              <span className="font-bold relative inline-block text-yellow-600">
                Fresh Halal
              </span> Products<br />
              & Electronics
            </h2>
            
            <div className="flex items-center space-x-6 mt-12">
              <ArrowRight size={24} className="text-gray-700" />
              <button className="font-inter bg-gray-900 text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Side - Customer Count */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <div className="flex -space-x-2">
                {customerAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Customer ${index + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="ml-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm font-medium">+</span>
              </div>
            </div>
            <div className="text-center">
              <div className="font-inter text-3xl font-bold text-gray-900">500k+</div>
              <div className="font-inter text-gray-500 text-sm">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg">
                {/* Background Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Buy Now Button - Top Right */}
                <button className="absolute top-4 right-4 bg-blue-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">
                  Buy Now
                </button>
                
                {/* Speech Bubble - Bottom Left */}
                <div className="absolute bottom-4 left-4 bg-white rounded-2xl px-4 py-3 shadow-lg speech-bubble max-w-48">
                  <p className="text-gray-900 font-medium text-sm leading-tight">
                    {product.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;