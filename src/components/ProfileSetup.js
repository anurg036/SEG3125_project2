// src/ProfileSetup.js
import React from 'react';
import './ProfileSetup.css';

function ProfileSetup() {
  return (
    <div className="profile-setup">
      <h1>Profile Setup</h1>
      <form>
        <label>Username:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
        <label>Age:</label>
        <input type="number" />
        <label>Gender:</label>
        <select>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label>Profession:</label>
        <input type="text" />
        <label>Gaming Preferences:</label>
        <input type="checkbox" /> RPG
        <input type="checkbox" /> FPS
        <label>Bio:</label>
        <textarea></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ProfileSetup;

