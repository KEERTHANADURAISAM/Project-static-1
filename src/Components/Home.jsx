import React from 'react';
import heroImage from '../assets/img/hero.png'; // adjust path
import wave from '../assets/img/bg-bottom.png'; // adjust path
import Facts from './Facts';
import TeamSection from './Team';
import Service from './Service';
import Footer from './Footer';
import Projects from './Projects';
import Testimonial from './Testimonial';
import Features from './Feature';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Navbar/>
      <section
        className="hero-section"
        style={{
          backgroundColor: '#6c2bd9',
          color: '#fff',
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
           {/* Hero Text */}
<div className="col-lg-6 text-center text-lg-start mt-5 mt-lg-5"> {/* Increased margin-top */}
  <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', lineHeight: '1.3' }}>
    Empowering Brands with Web, App, UI/UX & Digital Growth
  </h1>
  <p className="my-4">
    From stunning websites and mobile apps to captivating UI/UX design and result-driven digital marketing — we craft solutions that drive growth and make an impact.
  </p>
  <div className="d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
  <Link
    to="/about"
    style={{
      padding: '10px 20px',
      background: '#ffc107',
      border: 'none',
      borderRadius: '5px',
      color: '#000',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'inline-block',
    }}
  >
    Read More
  </Link>
  <Link
    to="/contact"
    style={{
      padding: '10px 20px',
      background: '#fff',
      color: '#000',
      borderRadius: '5px',
      border: 'none',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'inline-block',
    }}
  >
    Contact Us
  </Link>
</div>

</div>

{/* Hero Image */}
<div className="col-lg-6 text-center">
  <img
    src={heroImage}
    alt="Hero"
    className="img-fluid mt-5 mt-lg-0"
    style={{ height: '500px', width: '100%', objectFit: 'contain' }} // Increased height
  />
</div>

          </div>
        </div>

        {/* Wave Image */}
        <img
          src={wave}
          alt="Wave"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 1,
          }}
        />
      </section>

      {/* Sections */}
      <Features />
      <Facts />
      <TeamSection />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
