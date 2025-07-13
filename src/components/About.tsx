import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50 rounded-b-[4rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={contentRef} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Marza Hypermarket Experience"
              className="w-full h-96 object-cover transition-all duration-500"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="font-anton font-bold text-5xl text-black mb-8 leading-relaxed" itemProp="headline">
              Qatar's #1 Premium <span className="text-yellow-600">Hypermarket</span>
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-10 leading-relaxed" itemProp="description">
              Since 1999, Marza Hypermarket has been Qatar's most trusted premium shopping destination. 
              With 500K+ satisfied customers, we deliver exceptional quality, fresh halal products, and world-class service across Doha.
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-yellow-600 pl-6">
                <h3 className="font-inter text-xl font-semibold text-gray-900 mb-3">Fresh Halal Products Daily</h3>
                <p className="font-inter text-gray-600 leading-relaxed">Premium fresh produce, halal meats, and organic foods sourced from trusted suppliers worldwide, ensuring the highest quality for Qatar families.</p>
              </div>

              <div className="border-l-4 border-yellow-600 pl-6">
                <h3 className="font-inter text-xl font-semibold text-gray-900 mb-3">Best Prices in Qatar</h3>
                <p className="font-inter text-gray-600 leading-relaxed">Competitive pricing on 50+ product categories including electronics, household items, and family essentials with regular special offers.</p>
              </div>

              <div className="border-l-4 border-yellow-600 pl-6">
                <h3 className="font-inter text-xl font-semibold text-gray-900 mb-3">Home Delivery & Convenience</h3>
                <p className="font-inter text-gray-600 leading-relaxed">Free parking, home delivery across Doha, and convenient shopping hours 8AM-11PM daily for maximum customer convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;