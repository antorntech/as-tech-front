import React from "react";
import banner from "../../assets/images/banner.jpg";
import { TypeAnimation } from "react-type-animation";
import PrimaryButton from "../primarybutton/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div
      className="flex justify-center items-center h-screen overflow-hidden"
      style={{
        background: `url(${banner}) no-repeat center center / cover`,
      }}
    >
      <div className="w-full h-full px-4 lg:px-0 text-white">
        <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center">
          <div>
            <h1 className="text-[35px] md:text-[50px] lg:text-[60px] tracking-wide uppercase font-bold">
              Hello, <span className="text-[#e77529]">AS TECH</span>
            </h1>
            <p className="text-[40px] md:text-[50px] lg:text-[60px] tracking-wide font-bold">
              <TypeAnimation
                sequence={[
                  "Web Development",
                  1000,
                  "Web Design",
                  1000,
                  "UI/UX Design",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-white"
                style={{
                  fontSize: "clamp(35px, 5vw, 60px)", // Responsive font size between 24px to 60px
                  fontWeight: "bold", // Optional for better appearance
                  textAlign: "center", // Ensures it aligns well across devices
                }}
              />
            </p>
            <p className="w-full md:w-2/4 mt-5 text-gray-100">
              It’s AS TECH, Digital Agency. We love to write code, it’s our
              passoin. We're here to help you, We're here to design your web
              page. We can help you to describe yourself in the best way. No
              matter how difficult your web page is, We'll find an easy way and
              complete your work anyway. Stay connect with us……..😊
            </p>
          </div>
          <div className="flex gap-4 items-center mt-10">
            <PrimaryButton btnText="About Us" handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
