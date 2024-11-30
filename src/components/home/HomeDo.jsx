/* eslint-disable no-unused-vars */
import React from "react";
import Tabs from "../shared/Tabs";

const HomeDo = () => {
  return (
    <div className="min-h-screen w-full px-4 lg:px-[100px] bg-gray-100">
      <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <header
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center items-center text-center mt-8 lg:mt-12"
        >
          <h1 className="text-3xl lg:text-5xl">I Love What I Do</h1>
          <div className="flex justify-center items-center gap-2 mt-2">
            <div className="w-[60px] h-[2px] bg-[#00637e]"></div>
            <div className="w-4 h-4 bg-[#00637e] rounded-full"></div>
            <div className="w-[60px] h-[2px] bg-[#00637e]"></div>
          </div>
          <p className="my-3 lg:w-3/4 text-gray-500 text-sm">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis
            sodales quis. Integer sit amet mattis quam.
          </p>
        </header>
        <Tabs />
      </div>
    </div>
  );
};

export default HomeDo;
