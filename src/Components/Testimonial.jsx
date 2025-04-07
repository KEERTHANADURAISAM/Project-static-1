import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
    name: "Client Name",
    profession: "Profession",
    image: "img/testimonial-1.jpg",
  },
  {
    text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
    name: "Client Name",
    profession: "Profession",
    image: "img/testimonial-2.jpg",
  },
  {
    text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
    name: "Client Name",
    profession: "Profession",
    image: "img/testimonial-3.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <p className="section-title text-secondary justify-content-center">
          <span></span>Testimonial<span></span>
        </p>
        <h1 className="text-center mb-5">What Say Our Clients!</h1>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item bg-light rounded my-4 p-4">
                <p className="fs-5">
                  <i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>
                  {testimonial.text}
                </p>
                <div className="d-flex align-items-center mt-4">
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{ width: '65px', height: '65px' }}
                  />
                  <div className="ps-4">
                    <h5 className="mb-1">{testimonial.name}</h5>
                    <span>{testimonial.profession}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
