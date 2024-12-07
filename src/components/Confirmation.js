import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa'; // Importing icons

function Confirmation() {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate('/feedback'); // Navigate to the Feedback page
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-message">
        <FaCheckCircle className="confirmation-icon" />
        <h2>Order Confirmed!</h2>
        <p>Thank you for your purchase. Your order has been placed successfully.</p>
      </div>
      <button onClick={handleNextStep} className="next-step-button">
        <FaArrowLeft className="next-step-icon" />
        Next Step
      </button>
    </div>
  );
}

export default Confirmation;
