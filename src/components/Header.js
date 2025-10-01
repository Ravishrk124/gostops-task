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
        <span className="nav-link">Destinations ▾</span>
        <span className="nav-link">Workation</span>
        <span className="nav-link">Coliving</span>
        <span className="nav-link">goSTOPS for Business ▾</span>
        <span className="nav-link">Collaborate with Us ▾</span>
      </nav>
      <div className="header-actions">
        <button className="btn-download">Download App</button>
        <button className="btn-login">Login</button>
      </div>
    </header>
  );
};

export default Header;