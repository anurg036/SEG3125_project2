// src/Tournaments.js
import React from 'react';
import './Tournaments.css';

function Tournaments() {
  return (
    <div className="tournaments">
      <h1>Tournaments</h1>
      <button>Create Tournament</button>
      <div className="tournament-list">
        <div className="tournament-item">
          <h2>Tournament Title</h2>
          <p>Date and Time</p>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Tournaments;

