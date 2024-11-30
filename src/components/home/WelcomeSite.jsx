/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import welcomeSiteBg from "../../assets/images/background.png";
import { FaBriefcase, FaDollarSign, FaShieldAlt } from "react-icons/fa";

const WelcomeSite = () => {
  return (
    <div className="bg-transparent w-full px-4 lg:px-0 flex justify-center items-center py-12 lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center items-center overflow-hidden">
        <header
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center items-center text-center"
        >
          <div className="relative z-10">
            <h1 className="text-3xl lg:text-5xl font-bold z-40 relative">
              Welcome To My Site
            </h1>
            <div className="flex justify-center items-center gap-2 mt-2 absolute right-0 bottom-0 z-20 rotate-[-5deg] ">
              <img
                src="/orange-line.png"
                alt="orange-line"
                className="scale-in-bl"
              />
            </div>
          </div>

          <p className="my-3 lg:w-3/4 text-gray-500 text-sm md:text-md lg:text-lg mt-5">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis
            sodales quis. Integer sit amet mattis quam.Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nulla mollis dapibus nunc
          </p>
        </header>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5 lg:mt-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="card"
          >
            <FaBriefcase className="text-[#00637e]" size={30} />
            <h1 className="text-xl font-bold">Want An Expert</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
              doloret quas saepe autem, dolor set.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="card"
          >
            <FaShieldAlt className="text-[#00637e]" size={30} />
            <h1 className="text-xl font-bold">Unlimited Revisions</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
              doloret quas saepe autem, dolor set.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="card"
          >
            <FaDollarSign className="text-[#00637e]" size={30} />
            <h1 className="text-xl font-bold">Let's Discuss</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
              doloret quas saepe autem, dolor set.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSite;
