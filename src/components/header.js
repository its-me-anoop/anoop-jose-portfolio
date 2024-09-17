// Header.js

// Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaProjectDiagram, FaEnvelope, FaTimes } from 'react-icons/fa';

// Header Component
const Header = () => {

    /// State
    const [isOpen, setIsOpen] = useState(false);

    // Menu Items
    const menuItems = [
        { to: "/about", label: "About", icon: <FaUser /> },
        { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
        { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
    ];

  return (
    <header className='header'>
        <div className="header-container">
            <h1><Link to="/" aria-label="Home" className="logo">Anoop Jose</Link></h1>
            <button className="md:hidden focus:outline-none text-neutral-light hover:text-accent-light transition duration-300" aria-label="Toggle Navigation" onClick={() => setIsOpen(!isOpen)}>
                {isOpen? <FaTimes /> : <FaBars />}
            </button>
      </div>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`} aria-label="Main Navigation">
        <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0'>
          {menuItems.map((item, index) => (
            <li key={index} className="w-full md:w-auto">
              <Link to={item.to} className="nav-link flex items-center justify-center md:justify-start w-full">
                <span className="mr-2 md:hidden text-accent-light">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;