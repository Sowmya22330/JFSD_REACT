import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faHome, faPhone, faUserTag, faIdCard } from '@fortawesome/free-solid-svg-icons';

function SignUp() {
    const [userType, setUserType] = useState('buyer');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [govtId, setGovtId] = useState('');
    const navigate = useNavigate();

    const validateInputs = () => {
        if (name.trim() === '') {
            alert('Name is required.');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format.');
            return false;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert(
                'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one digit, and one special character.'
            );
            return false;
        }
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return false;
        }
        const govtIdRegex = /^\d{12}$/;
        if (!govtIdRegex.test(govtId)) {
            alert('Government ID (Aadhar) must be exactly 12 digits.');
            return false;
        }
        if (userType === 'artisan') {
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phoneNumber)) {
                alert('Phone number must be a valid 10-digit number.');
                return false;
            }
            if (address.trim() === '') {
                alert('Address is required.');
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateInputs()) return;

        const userData = { name, email, password, address, phoneNumber, userType, govtId };

        try {
            const response = await axios.post('http://localhost:8080/api/signup', userData, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 201) {
                localStorage.setItem('userDetails', JSON.stringify({ name, email, role: userType }));
                alert('Sign-up successful');
                navigate('/Login');
            }
        } catch (error) {
            console.error('Sign-up error:', error);
            alert(error.response?.data || 'Sign-up failed');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Sign Up</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="input-group">
                        <FontAwesomeIcon icon={faUserTag} className="input-icon" />
                        <select
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            required
                            className="input-field"
                        >
                            <option value="buyer">Buyer</option>
                            <option value="artisan">Artisan</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="input-group">
                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="input-group">
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="input-group">
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    {userType === 'artisan' && (
                        <>
                            <div className="input-group">
                                <FontAwesomeIcon icon={faPhone} className="input-icon" />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                    className="input-field"
                                />
                            </div>
                            <div className="input-group">
                                <FontAwesomeIcon icon={faHome} className="input-icon" />
                                <input
                                    type="text"
                                    placeholder="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                    className="input-field"
                                />
                            </div>
                        </>
                    )}
                    <div className="input-group">
                        <FontAwesomeIcon icon={faIdCard} className="input-icon" />
                        <input
                            type="text"
                            placeholder="Government ID (Aadhar)"
                            value={govtId}
                            onChange={(e) => setGovtId(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                </form>
                <div className="login-link">
                    <p>
                        Already have an account? <Link to="/Login">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
