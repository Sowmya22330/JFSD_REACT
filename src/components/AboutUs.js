import React from 'react';
import './AboutUs.css'; // You can add styles for the page here

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>We are passionate about preserving and promoting the art of handloom weaving. Our mission is to bring timeless, handwoven products to global buyers while supporting artisans worldwide.</p>
      </header>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>We are dedicated to showcasing the beauty of handwoven textiles that represent centuries of craftsmanship. Our handloom products are eco-friendly and sustainable, offering a unique and personal touch to your home and wardrobe.</p>
      </section>

      <section className="card-section">
        <h2>Our Handloom Products</h2>
        <div className="card-container">
          <div className="card">
          <img src="https://plus.unsplash.com/premium_photo-1666211974745-8828136e78f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEhhbmR3b3ZlbiUyMFNjYXJ2ZXN8ZW58MHx8MHx8fDA%3D" alt="Product 1" />
            <div className="card-content">
              <h3>Handwoven Scarves</h3>
              <p>Our handwoven scarves are perfect for any occasion. Crafted with intricate patterns, these scarves are a symbol of artistry and culture.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://media.istockphoto.com/id/1224798761/photo/close-up-view-of-indian-woman-sarees-or-saris-stacked-in-retail-display-in-a-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=tLkNe42WxhcmkIVQHljYIwWcvLECLoUQkER8Zaj-tr0=" alt="Product 2" />
            <div className="card-content">
              <h3>Traditional Sarees</h3>
              <p>Our collection of sarees is a blend of tradition and elegance, made using time-honored techniques passed down through generations.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84Rl-rcm8yjp4VIksqNHf1i19EkDijezsPA&s" alt="Product 3" />
            <div className="card-content">
              <h3>Handcrafted Fabrics</h3>
              <p>From textiles to home decor, our handcrafted fabrics offer a unique and sustainable alternative to mass-produced items.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="product-highlights-section">
        <h2>Why Choose Our Handloom Products?</h2>
        <div className="highlights-container">
          <div className="highlight-card">
            <h3>Sustainable Craftsmanship</h3>
            <p>Each of our handloom products is made using sustainable practices that support local artisans while helping the environment.</p>
          </div>
          <div className="highlight-card">
            <h3>Unique Designs</h3>
            <p>Our handwoven fabrics are available in unique designs, crafted with care and attention to detail, making every piece one of a kind.</p>
          </div>
          <div className="highlight-card">
            <h3>Support for Artisans</h3>
            <p>By purchasing our products, you are directly contributing to the livelihood of skilled artisans, empowering their communities.</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy; 2024 Handloom Global. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
