// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/newsreviews">News & Reviews</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/tournaments">Tournaments</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
