// src/HomePage.js
import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to The Gamer's Hub</h1>
      <input type="text" placeholder="Search..." />
      <div className="sections">
        <div className="section">Featured News</div>
        <div className="section">Featured Reviews</div>
        <div className="section">Quick Links</div>
      </div>
    </div>
  );
}

export default HomePage;

