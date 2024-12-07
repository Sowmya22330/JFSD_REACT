import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa'; // Importing icons
import './OrderSummary.css'

function OrderSummary({ userDetails, onConfirm }) {
  const navigate = useNavigate();

  const handleConfirm = () => {
    onConfirm(); // Optional: Clear form data after confirmation
    navigate('/confirmation'); // Navigate to Confirmation page
  };

  if (!userDetails) {
    return <p>No order details available. Please complete checkout first.</p>;
  }

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <div className="order-detail">
        <FaUser className="icon" />
        <p><strong>Name:</strong> {userDetails.name}</p>
      </div>
      <div className="order-detail">
        <FaEnvelope className="icon" />
        <p><strong>Email:</strong> {userDetails.email}</p>
      </div>
      <div className="order-detail">
        <FaMapMarkerAlt className="icon" />
        <p><strong>Address:</strong> {userDetails.address}, {userDetails.city} - {userDetails.zip}</p>
      </div>
      <div className="order-detail">
        <FaCreditCard className="icon" />
        <p><strong>Payment Method:</strong> {userDetails.paymentMethod}</p>
      </div>
      <button onClick={handleConfirm}>Confirm Order</button>
    </div>
  );
}

export default OrderSummary;
