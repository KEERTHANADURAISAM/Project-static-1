import React from "react";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout title="Contact">
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Contact Us<span></span>
          </p>
          <h1 className="text-center mb-5">Contact For Any Query</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="wow fadeInUp" data-wow-delay="0.3s">
              <p className="text-center mb-4">
              
              <h2 className="mb-4">Let’s Work Together</h2>
        <p className="mb-4">
          Have a project in mind or just want to say hi? We’re always open to new ideas, collaborations, or opportunities. Drop us a message and we’ll get back to you as soon as possible.
        </p>
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "150px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;
