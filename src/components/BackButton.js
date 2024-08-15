import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css'; // Import the CSS file for styling

function BackButton() {
  return (
    <div className="back-button">
      <Link to="/" className="back-link">Home</Link>
    </div>
  );
}

export default BackButton;