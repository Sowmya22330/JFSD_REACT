import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import './Feedback.css'; // Keep the CSS for neat styling

function Feedback() {
    const navigate = useNavigate(); // Initialize useNavigate

    // Handle the navigation back to the Products page
    const handleReturnToProducts = () => {
        navigate("/products"); // Navigate to the Products page
    };

    return (
        <div className="App">
            <h1>Feedback Form</h1>
            <div className="form-container">
                <p>We appreciate your feedback! Please click the link below to fill out our feedback form:</p>
                <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSddL2bYPugYvcVQ4LWlKbhPJ7emvbl7V6copV7EGTTHNrB-6w/viewform?usp=header" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="feedback-link"
                >
                    Fill Out Feedback Form
                </a>
            </div>
            <button onClick={handleReturnToProducts} className="return-button">
                Return to Products
            </button>
        </div>
    );
}

export default Feedback;
