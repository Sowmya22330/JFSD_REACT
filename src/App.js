import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


import Navbar from './components/Navbar';
import HomeNavbar from './components/HomeNavbar';
import Home from './pages/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Cart from './pages/Cart';
import AboutUs from './components/AboutUs';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ManageUsers from './components/ManageUser';
import CheckoutForm from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import Confirmation from './components/Confirmation';
import Feedback from './components/Feedback';
import AddProduct from './components/AddProduct';
import './App.css'; // CSS
import { CartProvider } from './pages/CartContext';

// Layout Component to dynamically select Navbar
function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAuthPage = ['/signup', '/login', '/aboutus', 'Login'].includes(location.pathname);
  const isCheckoutPage = ['/checkout', '/summary', '/confirmation'].includes(location.pathname);

  // Don't render Navbar for /aboutus page
  if (location.pathname === '/aboutus') {
    return null; // No navbar for About Us page
  }

  // Use HomeNavbar for specific pages, otherwise Navbar
  return isHomePage || isAuthPage || isCheckoutPage ? <HomeNavbar /> : <Navbar />;
}

function App() {
  const [userDetails, setUserDetails] = useState(null);

  return (
    <BrowserRouter basename="/JFSD_REACT">
      <CartProvider>
        {/* Conditionally render Navbar */}
        <Layout />
        <div className="main-content">
          <Routes>
            {/* --------------------- Public Routes --------------------- */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/Feedback" element={<Feedback />} />

            {/* --------------------- Admin Routes --------------------- */}
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/manageusers" element={<ManageUsers />} />

            {/* --------------------- Checkout Routes --------------------- */}
            <Route
              path="/checkout"
              element={<CheckoutForm onSubmit={(data) => setUserDetails(data)} />}
            />
            <Route
              path="/summary"
              element={
                userDetails ? (
                  <OrderSummary
                    userDetails={userDetails}
                    onConfirm={() => setUserDetails(null)}
                  />
                ) : (
                  <div>Please complete the checkout form first.</div>
                )
              }
            />
            <Route path="/confirmation" element={<Confirmation />} />

            {/* --------------------- Artisan Routes --------------------- */}
            <Route path="/artisan/products" element={<Products />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
