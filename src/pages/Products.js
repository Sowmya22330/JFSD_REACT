import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search } from 'lucide-react';
import './Products.css';
import { useCart } from './CartContext'; // Import the Cart context
import banarasi from './banarasi silk.jpg';
import cotton from './cotton shawl.jpg';
import kurthi from './cotton kurthi.jpg';
import saree from './kanichipuram saree.jpg';
import wool from './wool shawl.jpg';
import cushion from './cushion cover.jpg';

const products = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: 599.99,
    category: "sarees",
    material: "silk",
    image: banarasi,
  },
  {
    id: 2,
    name: "Handwoven Cotton Shawl",
    price: 129.99,
    category: "shawls",
    material: "cotton",
    image: cotton,
  },
  {
    id: 3,
    name: "Cotton Kurthi",
    price: 79.99,
    category: "kurthi",
    material: "cotton",
    image: kurthi,
  },
  {
    id: 4,
    name: "Kanchipuram Silk Saree",
    price: 799.99,
    category: "sarees",
    material: "silk",
    image: saree,
  },
  {
    id: 5,
    name: "Pashmina Wool Shawl",
    price: 249.99,
    category: "shawls",
    material: "wool",
    image: wool,
  },
  {
    id: 6,
    name: "Handwoven Cushion Cover",
    price: 45.99,
    category: "home decor",
    material: "cotton",
    image: cushion,
  },
];

const Products = () => {
  const { addToCart, cartCount } = useCart(); // Use the addToCart and cartCount from context
  const [searchQuery, setSearchQuery] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupMessage(`${product.name} has been added to the cart!`);
  };

  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => {
        setPopupMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popupMessage]);

  return (
    <div className="products-page">
      <motion.h1 className="page-heading">Our Collection</motion.h1>

      {/* Cart Icon with Badge */}
      <div className="cart-icon-container">
        <ShoppingBag className="cart-icon" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>

      {/* Popup Message */}
      {popupMessage && <div className="popup-message">{popupMessage}</div>}

      {/* Search Box */}
      <div className="filters">
        <div className="search-box">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Product Grid */}
      <motion.div className="product-grid">
        {filteredProducts.map((product) => (
          <motion.div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="add-to-cart-btn"
              >
                <ShoppingBag />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
