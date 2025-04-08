import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: "I was blown away by how intuitive and user-friendly the final design was. They didn’t just make it pretty — they thought about every user touchpoint and how it feels. Our engagement rates have noticeably improved.",
    name: "Anjali M.",
    profession: "Product Manager",
    image: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?uid=R100968296&ga=GA1.1.1864763905.1732424872&semt=ais_hybrid&w=740",
  },
  {
    text: "They built us a fast, responsive, and scalable website that looks great on every device. The backend is clean, and the frontend flows like butter. Tech-wise, these folks know what they’re doing.",
    name: "Karthik S",
    profession: "Tech Lead, SaaS Startup",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOq7pFGh8JcSsWQ7QdTRKkqUC2nR0DHSktg&s"  },
  {
    text: "Their digital strategy helped us double our leads in just a few weeks. From content to campaigns, everything felt data-driven and aligned with our brand voice. Worth every penny.",
    name: "Rina T",
    profession: "Product Manager",
    image: "data:image/jpeg;base64,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",
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
