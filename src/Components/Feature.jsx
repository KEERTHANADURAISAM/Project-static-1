import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMailBulk, FaSearch, FaLaptopCode } from "react-icons/fa";

const features = [
  {
    icon: <FaMailBulk className="text-primary mb-3" size={48} />,
    title: "Digital Marketing",
    description:
      "We help brands grow by driving more traffic, leads, and engagement through digital campaigns.",
    delay: "100",
  },
  {
    icon: <FaSearch className="text-primary mb-3" size={48} />,
    title: "SEO & Backlinks",
    description:
      "Boost your online visibility and rank higher on search engines with tailored SEO strategies.",
    delay: "300",
  },
  {
    icon: <FaLaptopCode className="text-primary mb-3" size={48} />,
    title: "Design & Development",
    description:
      "We build stunning websites and applications with a focus on performance, usability, and design.",
    delay: "500",
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className="bg-light rounded text-center p-4 h-100 shadow-sm">
                {feature.icon}
                <h5 className="mb-3">{feature.title}</h5>
                <p className="mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
