import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewsReviews from './components/NewsReviews';
import Marketplace from './components/Marketplace';
import ProfileSetup from './components/ProfileSetup';
import Tournaments from './components/Tournaments';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news-reviews" element={<NewsReviews />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/tournaments" element={<Tournaments />} />
      </Routes>
    </Router>
  );
}

export default App;
