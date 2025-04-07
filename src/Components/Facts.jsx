import React from 'react';

const Facts = () => {
  return (
    <div className="container-xxl bg-primary fact py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          {/* Fact 1 */}
          <div className="col-md-6 col-lg-3 text-center">
            <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
            <h1 className="text-white mb-2">1234</h1>
            <p className="text-white mb-0">Years Experience</p>
          </div>

          {/* Fact 2 */}
          <div className="col-md-6 col-lg-3 text-center">
            <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
            <h1 className="text-white mb-2">1234</h1>
            <p className="text-white mb-0">Team Members</p>
          </div>

          {/* Fact 3 */}
          <div className="col-md-6 col-lg-3 text-center">
            <i className="fa fa-users fa-3x text-secondary mb-3"></i>
            <h1 className="text-white mb-2">1234</h1>
            <p className="text-white mb-0">Satisfied Clients</p>
          </div>

          {/* Fact 4 */}
          <div className="col-md-6 col-lg-3 text-center">
            <i className="fa fa-check fa-3x text-secondary mb-3"></i>
            <h1 className="text-white mb-2">1234</h1>
            <p className="text-white mb-0">Complete Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
