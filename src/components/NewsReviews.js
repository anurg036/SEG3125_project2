// src/NewsReviews.js
import React from 'react';
import './NewsReviews.css';

function NewsReviews() {
  return (
    <div className="news-reviews">
      <h1>News & Reviews</h1>
      <div className="news-list">
        <div className="news-item">
          <img src="path/to/news-image.jpg" alt="News" />
          <div className="news-content">
            <h2>News Title</h2>
            <p>Short Description</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="reviews-list">
        <div className="review-item">
          <img src="path/to/review-avatar.jpg" alt="Review Avatar" />
          <div className="review-content">
            <h2>Review Title</h2>
            <p>Short Description</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsReviews;
