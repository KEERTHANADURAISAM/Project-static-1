import React from 'react';

const galleryImages = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=600&auto=format&fit=crop&q=60',
  },
  {
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60',
  },
  {
    img: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=600&auto=format&fit=crop&q=60',
  },
  {
    img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop&q=60',
  },
  {
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60',
  },
    
  { 
    img: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D'  
  }
];

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-light footer">
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          {/* Address */}
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Address<span></span></p>
            <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-instagram"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
            <a className="btn btn-link" href="#">About Us</a>
            <a className="btn btn-link" href="#">Contact Us</a>
            <a className="btn btn-link" href="#">Privacy Policy</a>
            <a className="btn btn-link" href="#">Terms & Condition</a>
            <a className="btn btn-link" href="#">Career</a>
          </div>

          {/* Gallery */}
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
            <div className="row g-2">
              {galleryImages.map((img, idx) => (
                <div className="col-4" key={idx}>
                  <img className="img-fluid" src={img.img} alt={`Gallery ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Newsletter<span></span></p>
            <p>Subscribe to get latest updates on web, mobile, and digital marketing trends.</p>
            <div className="position-relative w-100 mt-3">
              <input
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="Your Email"
                style={{ height: '48px' }}
              />
              <button
                type="button"
                className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
              >
                <i className="fa fa-paper-plane text-primary fs-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              Designed & Developed by Keerthana Duraisamy &copy; 2025
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="#">Home</a>
                <a href="#">Cookies</a>
                <a href="#">Help</a>
                <a href="#">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
