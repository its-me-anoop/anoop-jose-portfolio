/**
 * Represents the main Home Page component of the application.
 * 
 * The HomePage component renders the HeroSection and Skills components,
 * which provide the main content for the home page.
 */

import React from 'react';
import HeroSection from '../components/hero-section';
import Skills from '../components/skills';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Skills />
    </div>
  );
};

export default HomePage;