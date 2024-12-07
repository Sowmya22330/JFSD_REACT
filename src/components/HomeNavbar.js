import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import { Scissors, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import './Navbar.css';

// Navbar Component
const Navbar = () => {
  const location = useLocation(); // Get the current location

  // Check if current page is Home, Signup, or Login
  const isAuthPage = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login' || location.pathname ==='/aboutus';

  // Render simplified navbar for Home, Signup, and Login pages
  if (isAuthPage) {
    return (
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="navbar"
      >
        <div className="container">
          <div className="navbar-content">
            {/* Title on the left */}
            <Link to="/" className="logo">
              <Scissors className="logo-icon" />
              <span className="logo-text">Heritage Looms</span>
            </Link>

            {/* Links on the right (for Home, Signup, Login) */}
            <div className="nav-links">
              <Link to="/signup" className="nav-link">SignUp</Link>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/aboutus" className="nav-link">AboutUs</Link>

            </div>
          </div>
        </div>
      </motion.nav>
    );
  }

  // Render regular navbar for all other pages
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar"
    >
      <div className="container">
        <div className="navbar-content">
          {/* Title on the left */}
          <Link to="/" className="logo">
            <Scissors className="logo-icon" />
            <span className="logo-text">Heritage Looms</span>
          </Link>

          {/* Links on the right */}
          <div className="nav-links">
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/cart" className="cart-icon-container">
              <ShoppingCart className="cart-icon" />
              <span className="cart-badge">0</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
