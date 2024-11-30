/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import availableBg from "../../assets/images/available.png";
import { FaPaintBrush } from "react-icons/fa";
import { SiSemanticweb, SiSimilarweb } from "react-icons/si";

const HomeAvailable = () => {
  return (
    <div
      className="min-h-screen w-full px-4 lg:px-[100px] flex justify-center items-center py-12 lg:py-0"
      style={{
        background: `url(${availableBg}) no-repeat center center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <header
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center items-center text-center text-white"
        >
          <h1 className="text-3xl lg:text-5xl">I'm Available For Hire</h1>
          <div className="flex justify-center items-center gap-2 mt-2">
            <div className="w-[60px] h-[2px] bg-[#00637e]"></div>
            <div className="w-4 h-4 bg-[#00637e] rounded-full"></div>
            <div className="w-[60px] h-[2px] bg-[#00637e]"></div>
          </div>
          <p className="my-3 lg:w-3/4 text-sm">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis
            sodales quis. Integer sit amet mattis quam.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 text-white">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="bg-opacity-5 bg-white backdrop-blur-sm shadow-lg rounded-md p-8 flex flex-col items-center text-center gap-4 hover:bg-black hover:text-white hover:bg-opacity-75 transition duration-300"
          >
            <FaPaintBrush className="text-[#00637e]" size={40} />
            <h1 className="text-xl">Web Design</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
              doloret quas saepe autem, dolor set.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="bg-opacity-5 bg-white backdrop-blur-sm shadow-lg rounded-md p-8 flex flex-col items-center text-center gap-4 hover:bg-black hover:text-white hover:bg-opacity-75 transition duration-300"
          >
            <SiSimilarweb className="text-[#00637e]" size={40} />
            <h1 className="text-xl">Web Development</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
              doloret quas saepe autem, dolor set.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="bg-opacity-5 bg-white backdrop-blur-sm shadow-lg rounded-md p-8 flex flex-col items-center text-center gap-4 hover:bg-black hover:text-white hover:bg-opacity-75 transition duration-300"
          >
            <SiSemanticweb className="text-[#00637e]" size={40} />
            <h1 className="text-xl">Full Stack Development</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
              doloret quas saepe autem, dolor set.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAvailable;
