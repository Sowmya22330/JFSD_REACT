import React from 'react';
import './Landing.css';
import fabrics from './kanchipuram.jpg';
import Scarves from './Scarves.jpg';
import  Shawls from './Shawls.jpg';
import handman from './hanloom_machine.webp';
import map from './map.webp'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="Home">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>Discover the Art of Handloom Fashion</h1>
          <p>Support artisans. Celebrate culture. Wear timeless tradition.</p>
          <Link to="/products" className="cta-btn">Explore Products</Link>
        </div>
      </section>

      {/* Product Categories */}
      <section id="categories" className="categories-section">
        <h2>Explore Our Collections</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src={fabrics}/>
            <h3>Sarees</h3>
            <p>Elegant, handwoven sarees from the finest artisans.</p>
          </div>
          <div className="category-card">
            <img 
              src={Scarves}
            />
            <h3>Scarves</h3>
            <p>Luxurious scarves crafted with care and tradition.</p>
          </div>
          <div className="category-card">
            <img 
              src={Shawls} 
            />
            <h3>Shawls</h3>
            <p>Handcrafted shawls for every occasion.</p>
          </div>
        </div>
      </section>

      {/* Artisan Spotlight */}
      <section id="artisan-spotlight" className="artisan-spotlight">
        <h2>Meet the Artisans</h2>
        <p>Learn about the craftsmanship behind each handloom product.</p>
        <div className="artisan-profile">
          <img 
            src={handman}
            alt="Artisan" 
          />
          <div className="artisan-info">
            <h3>Rajesh, Master Weaver</h3>
            <p>Rajesh has been weaving intricate designs for over 30 years, preserving the ancient art of handloom weaving passed down through generations.</p>
          </div>
        </div>
      </section>

      {/* About Handloom */}
      <section id="about-handloom" className="about-handloom">
        <h2>The Story of Handloom</h2>
        <p>Handloom textiles are more than just fabrics; they are woven stories of culture, tradition, and sustainability. Learn about the rich history behind handloom products and their environmental benefits.</p>
      </section>

      {/* Global Reach */}
      <section id="global-reach" className="global-reach">
        <h2>Our Global Impact</h2>
        <p>Connecting artisans with buyers across the globe. See how our platform makes the world smaller for handloom fashion.</p>
        <br></br>
        <div id="map">
          {/* Placeholder for interactive map */}
          
          {/* <img 
            src={map}
          /> */}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <h2>Customer Reviews</h2>
        <div className="testimonial">
          <p>"The saree I purchased was absolutely beautiful. The craftsmanship is unmatched!" - Sarah</p>
        </div>
        <div className="testimonial">
          <p>"Such a unique shawl! I love the cultural significance behind every weave." - John</p>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="cta-section">
        <h2>Join the Handloom Community</h2>
        <p>Become an artisan, buyer, or supporter today.</p>
        <a href="#join-us" className="cta-btn">Join Us</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Contact Us: info@handloomfashion.com</p>
          <div className="social-links">
            <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
          </div>
          <a href="#faq">FAQ</a> | <a href="#support">Customer Support</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
