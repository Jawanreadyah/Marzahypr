import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Heritage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const elements = contentRef.current.children;
      
      gsap.fromTo(elements, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Years Badge */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main Badge */}
              <div className="relative bg-white p-12 border-8 border-yellow-600 inline-block">
                <div className="text-center">
                  <div className="font-inter text-7xl font-black text-gray-900 mb-2">25</div>
                  <div className="font-inter text-lg font-semibold text-gray-700 uppercase tracking-wide">
                    Years of<br />experience
                  </div>
                </div>
                
                {/* Corner Decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-l-4 border-t-4 border-yellow-600"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-r-4 border-t-4 border-yellow-600"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-4 border-b-4 border-yellow-600"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-4 border-b-4 border-yellow-600"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="mb-8">
              <span className="font-inter text-yellow-600 font-semibold text-lg tracking-wide uppercase">
                Since 1999
              </span>
              <h2 className="font-anton font-bold text-5xl text-black mt-4 mb-8 leading-relaxed">
                Qatar's Most Trusted<br />
                <span className="text-yellow-600">Premium Hypermarket</span><br />
                Since 1999
              </h2>
            </div>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <p className="font-inter text-lg leading-relaxed">
                Founded in 1999 by visionary entrepreneurs in Doha's Souq district, 
                Marza Hypermarket has grown to become Qatar's #1 premium shopping destination. 
                From humble beginnings to serving 500K+ customers annually, we've built our 
                reputation on quality, trust, and exceptional service. Today, we're proud to be 
                Qatar's most trusted hypermarket, offering the finest products and shopping experience in Doha.
              </p>
              
              <button className="inline-flex items-center font-inter text-gray-900 font-semibold hover:text-yellow-600 transition-colors duration-200 group mt-8">
                <span className="border-b-2 border-gray-900 group-hover:border-yellow-600 transition-colors duration-200">
                  READ MORE
                </span>
                <svg 
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-inter text-3xl font-bold text-gray-900">500K+</div>
                <div className="font-inter text-gray-600 text-sm uppercase tracking-wide">Annual Customers</div>
              </div>
              <div className="text-center">
                <div className="font-inter text-3xl font-bold text-gray-900">50+</div>
                <div className="font-inter text-gray-600 text-sm uppercase tracking-wide">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="font-inter text-3xl font-bold text-gray-900">#1</div>
                <div className="font-inter text-gray-600 text-sm uppercase tracking-wide">Hypermarket Qatar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;