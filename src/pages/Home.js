import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Your styles for the page
import foreigner1 from './foreigner1.jpeg'
import foreigner2 from './foreigner2.jpeg'
import foreigner3 from './foreigner3.jpg'

const Home = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
      <h1 className="headline">Experience the Art of Handloom from Around the World</h1>
        <br></br>
        <p className="subheadline">
          Support artisans and bring timeless handwoven products to your doorstep.
        </p>
        <br></br>
        {/* Shop Now button redirects to Signup page */}
       
       
        <Link to="/signup">
          <button className="cta-button">Shop Now</button>
        </Link>
      </header>

      <section className="about-section">
        <h2>Why Choose Handloom?</h2>
        <p>
          Handloom products are not only eco-friendly but also carry centuries of tradition. By purchasing handwoven items, you are supporting artisans across the world and promoting sustainable craftsmanship.
        </p>
      </section>

      {/* Learn More Section with Link to About Us */}
      <section className="learn-more-section">
        <h2>Explore Our Handloom Collection</h2>
        <p>
          Our handwoven textiles represent the finest craftsmanship from artisans worldwide. Each piece tells a unique story. Whether you're looking for vibrant scarves, traditional sarees, or handcrafted fabrics, our collection has something for everyone.
        </p>
        <Link to="/aboutus">
          <button className="cta-button">Discover More</button>
        </Link>
      </section>

      <section className="social-proof">
  <h3>What Our Global Buyers Say</h3>
  <div className="testimonials">
    {/* First Testimonial */}
    <div className="testimonial-card">
      <img
        src={foreigner1}
        alt="Maria K."
        className="testimonial-image"
      />
      <div className="testimonial-content">
        <p>
          "The quality of the handloom fabrics is exceptional, and I love the unique patterns!"
        </p>
        <span>- Maria K., Spain</span>
      </div>
    </div>

    {/* Second Testimonial */}
    <div className="testimonial-card">
      <img
        src={foreigner2}
        alt="John M."
        className="testimonial-image"
      />
      <div className="testimonial-content">
        <p>
          "I’ve never seen such beautiful handwoven products. Truly a piece of art!"
        </p>
        <span>- John M., USA</span>
      </div>
    </div>

    {/* Third Testimonial */}
    <div className="testimonial-card">
      <img
        src={foreigner3}
        alt="Liu X."
        className="testimonial-image"
      />
      <div className="testimonial-content">
        <p>
          "Purchasing handloom products feels great knowing that I’m supporting skilled artisans!"
        </p>
        <span>- Liu X., China</span>
      </div>
    </div>
  </div>
</section>


      <footer className="footer">
        <p>&copy; 2024 Handloom Global. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
