import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myIma from './Assets/1.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img id="image" src={myIma} alt="Logo" />
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
        {['home', 'about', 'projects', 'contact', 'resume'].map((link) => (
          <li
            key={link}
            className={`navbar-item ${activeLink === link ? 'active' : ''}`}
            onClick={() => handleLinkClick(link)}
          >
            <Link to={`/${link === 'home' ? '' : link}`}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
