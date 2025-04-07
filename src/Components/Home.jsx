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
            <div className="col-lg-6 text-center text-lg-start mt-5 mt-lg-0">
              <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                Empowering Brands with Web, App, UI/UX & Digital Growth
              </h1>
              <p className="my-4">
                From stunning websites and mobile apps to captivating UI/UX design and result-driven digital marketing — we craft solutions that drive growth and make an impact.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
                <button
                  style={{
                    padding: '10px 20px',
                    background: '#ffc107',
                    border: 'none',
                    borderRadius: '5px',
                    color: '#000',
                    fontWeight: 'bold',
                  }}
                >
                  Read More
                </button>
                <button
                  style={{
                    padding: '10px 20px',
                    background: '#fff',
                    color: '#000',
                    borderRadius: '5px',
                    border: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="col-lg-6 text-center">
              <img
                src={heroImage}
                alt="Hero"
                className="img-fluid mt-4 mt-lg-0"
                style={{ maxHeight: '400px', width: '100%', objectFit: 'contain' }}
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
