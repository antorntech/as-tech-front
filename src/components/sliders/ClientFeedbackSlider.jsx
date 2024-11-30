import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="next-arrow">
      <BiSolidRightArrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="prev-arrow">
      <BiSolidLeftArrow />
    </div>
  );
}

const ClientFeedbackSlider = () => {
  const reviews = [
    {
      id: 1,
      name: "Mr. Kamal",
      designation: "CEO, ISSL Ltd.",
      image: "/clients/1.jpg",
      description:
        "“Their expertise in developing custom CRM solutions has streamlined our customer management processes and improved overall client satisfaction.”",
    },
    {
      id: 2,
      name: "Mrs. Rotna",
      designation: "CFO, NRECA International LTD.",
      image: "/clients/2.jpg",
      description:
        "“The ERP system they built for us has optimized our financial operations and enabled seamless integration across departments.”",
    },
    {
      id: 3,
      name: "Mr. Jakir",
      designation: "CTO, Olion IT LTD.",
      image: "/clients/3.jpg",
      description:
        "“Their SaaS platform provided us with scalable solutions that reduced infrastructure costs and accelerated business growth.”",
    },
    {
      id: 4,
      name: "Mr. Jamil",
      designation: "CMO, SkyLark IT LTD.",
      image: "/clients/4.jpg",
      description:
        "“The custom web applications they delivered, including a tailored CRM and ERP, have enhanced our operational efficiency and marketing strategies.”",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div className="border border-gray-500  w-5 h-5 flex justify-center items-center rounded-full">
        <div className="custom-dot w-3 h-3 rounded-full bg-gray-300 hover:bg-orange-500" />
      </div>
    ),
    appendDots: (dots) => (
      <div className="custom-dots-container mt-5">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="customer-say"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="home-customer-say">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div className="py-8" key={review.id}>
              <div className="mx-5 md:mx-10">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg md:text-2xl">
                      {review.name}
                    </h3>
                    <h6>{review.designation}</h6>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm md:text-lg text-gray-500">
                    {review.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientFeedbackSlider;
