import React from 'react';
import heroImage from '../assets/img/hero.png'; // adjust path based on your project
import Facts from './Facts';
import TeamSection from './Team';
import Service from './Service';
import Footer from './Footer';
import Projects from './Projects';
import Testimonial from './Testimonial';
import Features from './Feature';
import wave from '../assets/img/bg-bottom.png'; // adjust path based on your folder structure


const Home = () => {
  return (
    <>
   
<section
  className="hero-section"
  style={{ backgroundColor: '#6c2bd9', color: '#fff', padding: '80px 0', position: 'relative' }}
>
  <div
    className="container"
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
  >
    <div className="hero-text" style={{ maxWidth: '50%' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
      Empowering Brands with Web, App, UI/UX & Digital Growth
      </h1>
      <p style={{ margin: '20px 0' }}>
      From stunning websites and mobile apps to captivating UI/UX design and result-driven digital marketing — we craft solutions that drive growth and make an impact.
      </p>
      <div>
        <button
          style={{
            marginRight: '10px',
            padding: '10px 20px',
            background: '#ffc107',
            border: 'none',
            borderRadius: '5px',
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
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
    <div className="hero-image">
      <img src={heroImage} alt="Hero" style={{ maxWidth: '100%', marginTop: '50px' }} />
    </div>
  </div>

  {/* Wave Image at Bottom */}
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

    <Features/>
    <Facts/>
    <TeamSection/>
    <Testimonial/>
    <Footer/>
       </>
  );
};

export default Home;
