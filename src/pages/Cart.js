import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Use Cart context
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Access context
  const navigate = useNavigate(); // Initialize navigation

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 10.0 : 0;
  const total = subtotal + shipping;

  // Function to handle checkout button click
  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-content">
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button onClick={() => removeFromCart(item.id)}>
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <h3>Total: ${total.toFixed(2)}</h3>
            {/* Checkout button with navigation */}
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <ShoppingBag />
          <p>Your cart is empty</p>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;