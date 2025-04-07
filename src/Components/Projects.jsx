import React from 'react';
import Layout from './Layout';

const projectFilters = ['All', 'Web Design', 'Graphic Design'];

const projectData = [
  { img: 'img/portfolio-1.jpg', category: 'first', delay: '0.1s' },
  { img: 'img/portfolio-2.jpg', category: 'second', delay: '0.3s' },
  { img: 'img/portfolio-3.jpg', category: 'first', delay: '0.5s' },
  { img: 'img/portfolio-4.jpg', category: 'second', delay: '0.1s' },
  { img: 'img/portfolio-5.jpg', category: 'first', delay: '0.3s' },
  { img: 'img/portfolio-6.jpg', category: 'second', delay: '0.5s' },
];

const Projects = () => {
  return (
    <Layout title="Projects">
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Our Projects<span></span>
          </p>
          <h1 className="text-center mb-5">Recently Completed Projects</h1>
        </div>

        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12 text-center">
            <ul className="list-inline mb-5" id="portfolio-flters">
              {projectFilters.map((filter, index) => (
                <li
                  key={index}
                  className={`mx-2 ${index === 0 ? 'active' : ''}`}
                  data-filter={filter === 'All' ? '*' : `.${filter.toLowerCase().replace(' ', '')}`}
                >
                  {filter}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row g-4 portfolio-container">
          {projectData.map((project, index) => (
            <div
              className={`col-lg-4 col-md-6 portfolio-item ${project.category} wow fadeInUp`}
              data-wow-delay={project.delay}
              key={index}
            >
              <div className="rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={project.img} alt={`Project ${index + 1}`} />
                  <div className="portfolio-overlay">
                    <a
                      className="btn btn-square btn-outline-light mx-1"
                      href={project.img}
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                    <a className="btn btn-square btn-outline-light mx-1" href="">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light p-4">
                  <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                  <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Projects;
