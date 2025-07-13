import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const brands = [
  {
    name: 'Coca Cola',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg'
  },
  {
    name: 'Nestle',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Nestl%C3%A9.svg/320px-Nestl%C3%A9.svg.png'
  },
  {
    name: 'Unilever',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Unilever.svg/250px-Unilever.svg.png'
  },
  {
    name: 'Lays',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lay%27s_logo_2019.svg/330px-Lay%27s_logo_2019.svg.png'
  },
  {
    name: 'Johnson & Johnson',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/JNJ_Logo_New.svg/500px-JNJ_Logo_New.svg.png'
  },
  {
    name: 'Kraft Heinz',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/H._J._Heinz_Company_-_Logo.svg/500px-H._J._Heinz_Company_-_Logo.svg.png'
  },
  {
    name: 'Kelloggs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Kellanova_logo.svg/375px-Kellanova_logo.svg.png'
  },
  {
    name: 'Sony',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1200px-Sony_logo.svg.png'
  },
  {
    name: 'Mars',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mars_Incorporated_2019_logo.svg/500px-Mars_Incorporated_2019_logo.svg.png'
  },
  {
    name: 'Danone',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Nescafe_logo_2014.png/330px-Nescafe_logo_2014.png'
  },
  {
    name: 'Mondelez',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Philips_logo_new.svg/500px-Philips_logo_new.svg.png'
  },
  {
    name: 'Colgate',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/330px-Xiaomi_logo_%282021-%29.svg.png'
  }
];

const FeaturedBrands = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const elements = headerRef.current.children;
      
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

    if (gridRef.current) {
      const logos = gridRef.current.children;
      
      gsap.fromTo(logos, 
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
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
    <section ref={sectionRef} id="brands" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-anton font-bold text-5xl text-black mb-6">
            Our leading Brands
          </h2>
        </div>

        {/* Brand Grid - Two Rows */}
        <div ref={gridRef} className="space-y-12">
          {/* First Row */}
          <div className="flex items-center justify-center space-x-16 flex-wrap gap-y-8">
            {brands.slice(0, 6).map((brand, index) => (
              <img
                key={index}
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{ maxWidth: '140px' }}
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="flex items-center justify-center space-x-16 flex-wrap gap-y-8">
            {brands.slice(6, 12).map((brand, index) => (
              <img
                key={index}
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{ maxWidth: '140px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;