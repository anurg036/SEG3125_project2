// src/Marketplace.js
import React from 'react';
import './Marketplace.css';

function Marketplace() {
  return (
    <div className="marketplace">
      <h1>Marketplace</h1>
      <div className="filters">
        <label>Game Category:</label>
        <select>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
        </select>
        <label>Price Range:</label>
        <input type="range" min="0" max="100" />
        <label>Condition:</label>
        <input type="checkbox" /> New
        <input type="checkbox" /> Used
      </div>
      <div className="listings">
        <div className="listing-item">
          <img src="path/to/game-image.jpg" alt="Game" />
          <div className="listing-content">
            <h2>Game Title</h2>
            <p>Price</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
