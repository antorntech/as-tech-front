// TestimonialCarousel.js
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css"; // Make sure styles don't override anything

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Johan Smith",
    position: "CEO, Google",
    image: "/clients/1.jpg", // Adjusting image path
    feedback: `“Contrary to popular belief, Lorem Ipsum is not simply random text. 
               It has roots in classical Latin literature from 45 BC.”`,
  },
  {
    id: 2,
    name: "David Johnson",
    position: "CTO, Facebook",
    image: "/clients/2.jpg",
    feedback: `“Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”`,
  },
  {
    id: 3,
    name: "Emma Watson",
    position: "Lead Designer, Apple",
    image: "/clients/3.jpg",
    feedback: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”`,
  },
];

const TestimonialCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide
  const sliderRef = useRef(null); // Reference to the slider

  // Settings for Slick Carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex), // Track active slide
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  // Handle avatar click to jump to a specific slide
  const handleAvatarClick = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="w-full md:h-[80vh] px-4 md:px-0 py-[40px] md:py-[70px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-center gap-5 md:gap-12">
        {/* Left Section: Image */}
        <div className="w-full h-full md:w-1/3">
          <img
            src={testimonials[activeSlide].image}
            alt={testimonials[activeSlide].name}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Right Section: Carousel Content */}
        <div className="w-full md:w-2/3">
          <h3 className="text-[#00637e] text-sm uppercase mb-2 flex items-center gap-2">
            <FaQuoteRight className="text-[#00637e]" />
            Testimonial
          </h3>
          <h2 className="text-3xl font-bold mb-6">My Customer Say</h2>

          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="space-y-4">
                <p className="text-gray-500 italic">{testimonial.feedback}</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </Slider>

          {/* User Avatars for Quick Selection */}
          <div className="flex gap-3 mt-6">
            {testimonials.map((testimonial, index) => (
              <img
                key={testimonial.id}
                src={testimonial.image}
                alt={testimonial.name}
                onClick={() => handleAvatarClick(index)}
                className={`w-10 h-10 rounded-full cursor-pointer ${
                  activeSlide === index ? "ring-2 ring-[#00637e]" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
