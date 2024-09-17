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
            <button className="menu-toggle-button" aria-label="Toggle Navigation" onClick={() => setIsOpen(!isOpen)}>
                {isOpen? <FaTimes /> : <FaBars />}
            </button>
      </div>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`} aria-label="Main Navigation">
        <ul className='main-nav'>
          {menuItems.map((item, index) => (
            <li key={index} className="nav-link-container">
              <Link to={item.to} className="nav-link">
                <span className="main-nav-icon">{item.icon}</span>
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