import React from "react";
import PortfolioTab from "../portfolio-tab/PortfolioTab";

const HomePortfolio = () => {
  return (
    <div className="bg-[#fcdec73b] px-4 lg:px-0 py-[40px] md:py-[70px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto h-full">
        <div
          className="flex items-center justify-center gap-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src="/rec.png" alt="rec.png" className="w-5 h-5" />
          <p className="text-sm">Our Projects</p>
        </div>
        <div
          className="relative z-10 flex justify-center items-center text-center overflow-hidden"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1
            style={{ lineHeight: "1.2" }}
            className="text-2xl lg:text-5xl font-bold w-full my-4 lg:my-6 z-30 relative"
          >
            VISIT OUR PROJECTS
          </h1>
          <div className="flex justify-center items-center gap-2 mt-2 absolute right-[25%] md:right-[35%] bottom-3 md:bottom-7 z-20 rotate-[-5deg] ">
            <img
              src="/orange-line.png"
              alt="orange-line"
              className="scale-in-bl"
            />
          </div>
        </div>
        <PortfolioTab />
      </div>
    </div>
  );
};

export default HomePortfolio;
