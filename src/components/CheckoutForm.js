import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaEnvelope,
  FaAddressCard,
  FaCity,
  FaMapPin,
  FaMoneyBill,
  FaCreditCard,
  FaPhone,
} from 'react-icons/fa';
import './CheckoutForm.css';

function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    qrCode: '',
    phoneNumber: '',
    totalAmount: 0, // Ensure this is set based on your application logic
  });
  const [errors, setErrors] = useState({});
  const [sendingLink, setSendingLink] = useState(false);
  const navigate = useNavigate();

  const validateCardNumber = (cardNumber) => {
    const cardNumberPattern = /^\d{16}$/; // 16 digits
    return cardNumberPattern.test(cardNumber);
  };

  const validateExpiryDate = (expiryDate) => {
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    return expiryDatePattern.test(expiryDate);
  };

  const validateCVV = (cvv) => {
    const cvvPattern = /^\d{3}$/; // 3 digits
    return cvvPattern.test(cvv);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts editing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSendPaymentLink = async () => {
    if (!formData.phoneNumber) {
      alert('Please enter your phone number.');
      return;
    }
    setSendingLink(true);
    try {
      const response = await fetch('/api/send-payment-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: formData.phoneNumber }),
      });
      if (response.ok) {
        alert('Payment link sent successfully!');
      } else {
        alert('Failed to send the payment link.');
      }
    } catch (error) {
      console.error('Error sending payment link:', error);
      alert('Error sending the payment link. Please try again.');
    } finally {
      setSendingLink(false);
    }
  };

  const handlePayPalPayment = () => {
    navigate('/paypal', { state: { amount: formData.totalAmount } });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.paymentMethod === 'Credit Card') {
      if (!validateCardNumber(formData.cardNumber)) {
        newErrors.cardNumber = 'Card number must be 16 digits.';
      }
      if (!validateExpiryDate(formData.expiryDate)) {
        newErrors.expiryDate = 'Expiry date must be in MM/YY format.';
      }
      if (!validateCVV(formData.cvv)) {
        newErrors.cvv = 'CVV must be 3 digits.';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (formData.paymentMethod === 'PayPal') {
      handlePayPalPayment();
    } else {
      onSubmit(formData); // Pass form data to parent component
      navigate('/summary'); // Navigate to Order Summary page
    }
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        {/* Basic Information */}
        <div className="form-group">
          <FaUser className="icon" />
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FaEnvelope className="icon" />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FaAddressCard className="icon" />
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FaCity className="icon" />
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FaMapPin className="icon" />
          <input
            name="zip"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>

        {/* Payment Method */}
        <div className="form-group">
          <FaMoneyBill className="icon" />
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </div>

        {/* Conditional Rendering for Payment Method */}
        {formData.paymentMethod === 'Credit Card' && (
          <div>
            <div className="form-group">
              <FaCreditCard className="icon" />
              <input
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
              {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
            </div>
            <div className="form-group">
              <input
                name="expiryDate"
                placeholder="Expiry Date (MM/YY)"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
              {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
            </div>
            <div className="form-group">
              <input
                name="cvv"
                placeholder="CVV"
                type="password"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
              {errors.cvv && <span className="error">{errors.cvv}</span>}
            </div>
          </div>
        )}

        {formData.paymentMethod === 'PayPal' && (
          <div>
            <div className="form-group">
              <FaPhone className="icon" />
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="button"
              className="send-link-button"
              onClick={handleSendPaymentLink}
              disabled={sendingLink}
            >
              {sendingLink ? 'Sending...' : 'Send Payment Link'}
            </button>
          </div>
        )}

        <button type="submit" className="submit-button">
          Proceed to Summary
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
