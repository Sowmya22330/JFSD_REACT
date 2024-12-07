import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scissors, ShoppingCart, User } from 'lucide-react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: 'Guest',
        email: '',
        role: 'Visitor',
    });
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || {
            name: 'Guest',
            email: '',
            role: 'Visitor',
        };

        // Log the retrieved user details to debug
        console.log("Retrieved user details:", storedUserDetails);

        setUserDetails(storedUserDetails);
    }, []);

    const handleLogout = () => {
        // Clear user data from localStorage and sessionStorage
        localStorage.removeItem('userDetails');
        sessionStorage.removeItem('authToken');
        setUserDetails({ name: 'Guest', email: '', role: 'Visitor' });
        navigate('/');
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="navbar"
        >
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <Link to="/" className="logo">
                        <Scissors className="logo-icon" />
                        <span className="logo-text">Heritage Looms</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="nav-links">
                        <Link to="/home" className="nav-link">Home</Link>
                        <Link to="/products" className="nav-link">Products</Link>
                        <Link to="/aboutus" className="nav-link">About Us</Link>
                        <Link to="/cart" className="cart-icon-container">
                            <ShoppingCart className="cart-icon" />
                        </Link>
                        <Link to="/addproduct" className="nav-link">AddProduct</Link>

                        {/* Profile Dropdown */}
<div className="profile-dropdown">
    <User
        className="profile-icon nav-link"
        onClick={toggleDropdown}
    />
    {showDropdown && (
        <div className="dropdown-menu">
            <div className="dropdown-item">
                <strong>{userDetails.name}</strong> {/* Displaying the username */}
                <p>{userDetails.email}</p> {/* Displaying the email */}
                <p>{userDetails.role}</p> {/* Displaying the role */}
            </div>
            <span className="dropdown-item logout-item" onClick={handleLogout}>
                Logout
            </span>
        </div>
    )}
</div>

                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
