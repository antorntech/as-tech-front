/* eslint-disable no-unused-vars */
import React from "react";
import homeServicetBg from "../../assets/images/background.png";
import { ImEmbed2 } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import { TbSettingsCode } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaInfo, FaMobileAlt } from "react-icons/fa";
import { LuBarChart3 } from "react-icons/lu";

const HomeServices = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const myServices = [
    {
      id: 1,
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually appealing interfaces to enhance user experience.",
      icon: "/services-icons/pentool",
    },
    {
      id: 2,
      title: "Web Design",
      description:
        "Designing responsive and modern websites focused on aesthetics and usability.",
      icon: "/services-icons/webdesign",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Building dynamic and scalable websites with front-end and back-end integration.",
      icon: "/services-icons/development",
    },
    {
      id: 4,
      title: "Backend Development",
      description:
        "Developing robust backend systems with APIs, databases, and server-side logic.",
      icon: "/services-icons/backend",
    },
  ];

  return (
    <div className="w-full px-4 md:px-0 py-[40px] md:py-[70px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto h-full">
        <div
          className="flex items-center justify-center gap-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src="/rec.png" alt="rec.png" className="w-5 h-5" />
          <p className="text-sm">Our Services</p>
        </div>
        <div
          className="relative z-10 flex justify-center items-center text-center overflow-hidden"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1
            style={{ lineHeight: "1.2" }}
            className="text-2xl lg:text-5xl font-bold w-full my-4 lg:my-6 z-40 relative"
          >
            Services We offer
          </h1>
          <div className="flex justify-center items-center gap-2 mt-2 absolute right-[25%] md:right-[35%] bottom-3 md:bottom-8 z-20 rotate-[-5deg] ">
            <img
              src="/orange-line.png"
              alt="orange-line"
              className="scale-in-bl"
            />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 md:mt-8"
        >
          {myServices.map((service) => (
            <div class="service-card group p-5 bg-white border border-[#00637e60] rounded-md transition-all duration-300 cursor-pointer hover:bg-[#00637e]">
              <div class="service-icon">
                <img
                  src={`${service.icon}-dark.png`}
                  alt="pentool icon"
                  class="group-hover:hidden mx-auto aspect-square w-20 h-20"
                />
                <img
                  src={`${service.icon}-light.png`}
                  alt="pentool icon"
                  class="hidden group-hover:block mx-auto aspect-square w-20 h-20"
                />
              </div>
              <div class="service-info text-center mt-2">
                <h1 class="text-xl md:text-2xl font-semibold text-black group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h1>
                <p class="text-sm md:text-md text-gray-600 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
