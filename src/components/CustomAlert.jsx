// CustomAlert.jsx
import React from 'react';
import './CustomAlert.css'; // Import your custom CSS

const CustomAlert = ({ message, onClose }) => {
 return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
 );
};

export default CustomAlert;
