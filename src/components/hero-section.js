/**
 * The `HeroSection` component represents the hero section of the website, which includes the user's profile information, a call-to-action, and social media links.
 *
 * This component is responsible for rendering the hero section of the website, which is typically the first section users see when they visit the site. It includes the user's name, job title, a brief description, buttons to view the user's work and download their CV, and links to the user's GitHub and LinkedIn profiles.
 *
 * The component uses several sub-components and external libraries, such as `react-icons` for the social media icons. It also imports an image of the user, which is displayed in the hero section.
 *
 * @returns {JSX.Element} The rendered `HeroSection` component.
 */

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AnoopJoseImage from '../images/anoop-jose.png';
import CV from '../assets/cv.pdf';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Anoop Jose</span></h1>
        <h2>Software Developer & Tech Enthusiast</h2>
        <p>
          I specialize in building modern web and mobile applications using React, Flutter, and iOS/Android platforms. 
          With a background in Nano Science and Technology, I bring a unique perspective to software development.
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="primary-btn">View My Work</Link>
          <a href={CV} download className="secondary-btn">Download CV</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/its-me-anoop" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <p>Github</p>
          </a>
          <a href="https://www.linkedin.com/in/anoop-jose-0b308a296/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={AnoopJoseImage} alt="Anoop Jose" />
      </div>
    </div>
  );
};

export default HeroSection;