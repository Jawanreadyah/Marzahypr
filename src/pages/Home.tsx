import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import KeyMetrics from '../components/KeyMetrics';
import FeaturedBrands from '../components/FeaturedBrands';
import { Features } from '../components/ui/features-6';
import Heritage from '../components/Heritage';
import Footer from '../components/Footer';
import SectionSeparator from '../components/SectionSeparator';

const Home = () => {
  return (
    <>
      <Hero />
      <SectionSeparator nextSection="Featured Products" />
      <FeaturedProducts />
      <SectionSeparator nextSection="About Us" />
      <About />
      <SectionSeparator nextSection="Key Metrics" />
      <KeyMetrics />
      <SectionSeparator nextSection="Featured Brands" />
      <FeaturedBrands />
      <SectionSeparator nextSection="Premium Features" />
      <Features />
      <SectionSeparator nextSection="Our Heritage" />
      <Heritage />
      <Footer />
    </>
  );
};

export default Home;