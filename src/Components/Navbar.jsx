import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0">SK BYTE WORKS</h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
        >
          <span className="fa fa-bars"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`}
          id="navbarCollapse"
        >
          <div className="navbar-nav mx-auto py-0">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/service" className="nav-item nav-link">Service</Link>
            <Link to="/project" className="nav-item nav-link">Project</Link>

            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Pages
              </span>
              <div className="dropdown-menu m-0">
                <Link to="/team" className="dropdown-item">Our Team</Link>
                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                <Link to="*" className="dropdown-item">404 Page</Link>
              </div>
            </div>

            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
          <Link to="#" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
