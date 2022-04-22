import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar-container">
      <div className="top-bar-left">
        <span className="logo">Social App</span>
      </div>
      <div className="top-bar-center">
        <div className="search-bar">
          <i class="fa fa-search" aria-hidden="true"></i>

          <input
            placeholder="Search for a friend, post or video"
            className="search-input"
          />
        </div>
      </div>
      <div className="top-bar-right">
        <div className="top-bar-links">
          <span className="top-bar-link">Homepage</span>
          <span className="top-bar-link">Timeline</span>
        </div>
        <div className="top-bar-icons">
          <div className="top-bar-icon-item">
            <i class="fa fa-user"></i>
            <span className="top-bar-icon-badge">1</span>
          </div>
          <div className="top-bar-icon-item">
            <i class="fas fa-comment-alt"></i>
            <span className="top-bar-icon-badge">2</span>
          </div>
          <div className="top-bar-icon-item">
            <i class="fas fa-bell"></i>
            <span className="top-bar-icon-badge">3</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="top-bar-img" />
      </div>
    </div>
  );
};

export default TopBar;
