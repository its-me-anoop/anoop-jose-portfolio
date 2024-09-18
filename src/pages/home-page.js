/**
 * Represents the main Home Page component of the application.
 * 
 * The HomePage component renders the HeroSection and Skills components,
 * which provide the main content for the home page.
 */

import React from 'react';
import HeroSection from '../components/hero-section';
import Skills from '../components/skills';
import LatestProjects from '../components/latest-projects';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Skills />
      <LatestProjects />
    </div>
  );
};

export default HomePage;