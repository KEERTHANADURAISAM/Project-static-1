import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Layout from "./Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <Layout  title="Contact" >
      <Navbar />
    

      <motion.div
        className="container-xxl py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div className="container py-5 px-lg-5" variants={fadeInUp}>
          <motion.div variants={fadeInUp}>
            <p className="section-title text-secondary justify-content-center">
              <span></span>Contact Us<span></span>
            </p>
            <h1 className="text-center mb-5">Contact For Any Query</h1>
          </motion.div>

          <div className="row justify-content-center">
            <div className="col-lg-7">
              <motion.div variants={fadeInUp}>
                <div className="text-center mb-4">
                  <h2 className="mb-4">Let’s Work Together</h2>
                  <p>
                    Have a project in mind or just want to say hi? We’re always open to new ideas, collaborations, or opportunities. Drop us a message and we’ll get back to you as soon as possible.
                  </p>
                </div>

                <form>
                  <div className="row g-3">
                    <motion.div className="col-md-6" variants={fadeInUp}>
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </motion.div>
                    <motion.div className="col-md-6" variants={fadeInUp}>
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </motion.div>
                    <motion.div className="col-12" variants={fadeInUp}>
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </motion.div>
                    <motion.div className="col-12" variants={fadeInUp}>
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </motion.div>
                    <motion.div className="col-12" variants={fadeInUp}>
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Send Message
                      </button>
                    </motion.div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
