// src/components/Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-logo">
        <span className="logo-go">go</span><span className="logo-stops">STOPS</span>
      </div>
      <nav className="header-nav">
        <a href="#" className="nav-link">Destinations ▾</a>
        <a href="#" className="nav-link">Workation</a>
        <a href="#" className="nav-link">Coliving</a>
        <a href="#" className="nav-link">goSTOPS for Business ▾</a>
        <a href="#" className="nav-link">Collaborate with Us ▾</a>
      </nav>
      <div className="header-actions">
        <button className="btn-download">Download App</button>
        <button className="btn-login">Login</button>
      </div>
    </header>
  );
};

export default Header;