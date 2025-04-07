import React from 'react';
import aboutImg from '../assets/img/about.png'; // Update the path as per your structure
import Layout from './Layout';
import Features from './Feature';
import TeamSection from './Team';
import Testimonial from './Testimonial';
import Facts from './Facts';

const About = () => {
  return (
    <>
    <Layout title="About">
    <Features/>
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <p className="section-title text-secondary">About Us<span></span></p>
            <h1 className="mb-5">#1 Digital solution with 10 years of experience</h1>
            <p className="mb-4">
              Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, 
              sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet
            </p>

            {/* Skill 1 */}
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Digital Marketing</p>
                <p className="mb-2">85%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: '85%' }}
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">SEO & Backlinks</p>
                <p className="mb-2">90%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: '90%' }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Design & Development</p>
                <p className="mb-2">95%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  style={{ width: '95%' }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <a href="#" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">
              Read More
            </a>
          </div>

          {/* Image */}
          <div className="col-lg-6">
            <img className="img-fluid" src={aboutImg} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
    
     <Facts/>
     <TeamSection/>
     <Testimonial/>
    </Layout>
    
     </>
  );
};

export default About;
