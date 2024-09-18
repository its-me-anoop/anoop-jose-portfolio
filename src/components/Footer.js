import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-neutral-light py-8 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>© 2024 Anoop Jose. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/its-me-anoop" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/anoop-jose-0b308a296/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
