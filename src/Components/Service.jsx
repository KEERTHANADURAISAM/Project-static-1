import React from 'react';
import Layout from './Layout';
import Testimonial from './Testimonial';

const services = [
  {
    icon: 'fa-search',
    title: 'SEO Optimization',
    delay: '0.1s',
  },
  {
    icon: 'fa-laptop-code',
    title: 'Web Design',
    delay: '0.3s',
  },
  {
    icon: 'fab fa-facebook-f',
    title: 'Social Media Marketing',
    delay: '0.5s',
  },
  {
    icon: 'fa-mail-bulk',
    title: 'Email Marketing',
    delay: '0.1s',
  },
  {
    icon: 'fa-thumbs-up',
    title: 'PPC Advertising',
    delay: '0.3s',
  },
  {
    icon: 'fab fa-android',
    title: 'App Development',
    delay: '0.5s',
  },
];

const Service = () => {
  return (
    <>
    <Layout title="Service">
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Our Services<span></span>
          </p>
          <h1 className="text-center mb-5">What Solutions We Provide</h1>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={service.delay}
              key={index}
            >
              <div className="service-item d-flex flex-column text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className={`fa ${service.icon} fa-2x`}></i>
                </div>
                <h5 className="mb-3">{service.title}</h5>
                <p className="m-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a className="btn btn-square" href="#">
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Testimonial/>
    </Layout>
    </>
  );
};

export default Service;
