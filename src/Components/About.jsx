import React from 'react';
import Layout from './Layout';
import Features from './Feature';
import TeamSection from './Team';
import Testimonial from './Testimonial';
import Facts from './Facts';

const About = () => {
  return (
    <Layout title="About">
      <Features />

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-3 px-lg-5">
          <div className="row g-5 align-items-center">
            
            {/* Content Column */}
            <div className="col-lg-6">
              <p className="section-title text-secondary">About Us<span></span></p>
              <h1 className="mb-4">#1 Crafting Innovative Solutions for the Digital-First World</h1>
              <p className="mb-4">
                At our core, we are a creative digital agency driven by passion and innovation.
                We specialize in building stunning websites, high-performing mobile applications,
                intuitive UI/UX experiences, and impactful digital marketing strategies.
              </p>
              <p className="mb-4">
                Our mission is simple — to deliver digital excellence and help brands thrive in
                an ever-evolving digital landscape.
              </p>

              {/* Skills Section */}
              {[
                { label: 'Digital Marketing', percent: 85, color: 'primary' },
                { label: 'SEO & Backlinks', percent: 90, color: 'secondary' },
                { label: 'Design & Development', percent: 95, color: 'dark' },
              ].map((skill, index) => (
                <div className="skill mb-4" key={index}>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">{skill.label}</p>
                    <p className="mb-2">{skill.percent}%</p>
                  </div>
                  <div className="progress">
                    <div
                      className={`progress-bar bg-${skill.color}`}
                      role="progressbar"
                      style={{ width: `${skill.percent}%` }}
                      aria-valuenow={skill.percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}

              <a href="#" className="btn btn-primary py-2 px-4 rounded-pill mt-3">
                Read More
              </a>
            </div>

            {/* Image Column */}
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid rounded shadow-sm"
                src="https://img.freepik.com/free-vector/modern-perspective-technology-background_1035-9593.jpg?uid=R100968296&ga=GA1.1.1864763905.1732424872&semt=ais_hybrid&w=740"
                alt="About Us"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Facts />
      <TeamSection />
      <Testimonial />
    </Layout>
  );
};

export default About;
