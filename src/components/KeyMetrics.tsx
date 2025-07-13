import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const KeyMetrics = () => {
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
    <section ref={sectionRef} id="key-metrics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Top Left - Key Metrics Header */}
          <div className="border-b border-r border-gray-200 p-12 flex flex-col justify-center">
            <div className="mb-8">
              <span className="font-inter inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                Key Metrics
              </span>
            </div>
            <h2 className="font-anton font-bold text-5xl text-black mb-8 leading-tight">
              Define Our Excellence
            </h2>
            <p className="font-inter text-gray-600 leading-relaxed">
              We believe exceptional shopping begins with trust. 
              That's why we prioritize world-class service and quality.
            </p>
          </div>

          {/* Top Right - 500K+ */}
          <div className="border-b border-l border-gray-200 p-12 flex flex-col justify-center">
            <div className="font-inter text-6xl font-bold text-gray-900 mb-6">
              500K+
            </div>
            <p className="font-inter text-gray-600 leading-relaxed">
              Happy customers served annually,<br />
              building lasting relationships.
            </p>
          </div>

          {/* Bottom Left - 25+ */}
          <div className="border-t border-r border-gray-200 p-12 flex flex-col justify-center">
            <div className="font-inter text-6xl font-bold text-gray-900 mb-6">
              25+
            </div>
            <p className="font-inter text-gray-600 leading-relaxed">
              Years of trusted service in Qatar
            </p>
          </div>

          {/* Bottom Right - 50+ */}
          <div className="border-t border-l border-gray-200 p-12 flex flex-col justify-center">
            <div className="font-inter text-6xl font-bold text-gray-900 mb-6">
              50+
            </div>
            <p className="font-inter text-gray-600 leading-relaxed">
              Product categories from fresh produce<br />
              to premium electronics and home essentials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;