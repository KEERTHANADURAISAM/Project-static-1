import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'img/team-1.jpg',
  },
  {
    name: 'Jessica Brown',
    role: 'Web Designer',
    image: 'img/team-2.jpg',
  },
  {
    name: 'Tony Johnson',
    role: 'SEO Expert',
    image: 'img/team-3.jpg',
  },
];

const TeamSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div>
          <p className="section-title text-secondary justify-content-center">
            <span></span>Our Team<span></span>
          </p>
          <h1 className="text-center mb-5">Our Team Members</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="team-item bg-light rounded">
                <div className="text-center border-bottom p-4">
                  <img
                    className="img-fluid rounded-circle mb-4"
                    src={member.image}
                    alt={member.name}
                  />
                  <h5>{member.name}</h5>
                  <span>{member.role}</span>
                </div>
                <div className="d-flex justify-content-center p-4">
                  <a className="btn btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
