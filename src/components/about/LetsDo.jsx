import React from "react";
import banner from "../../assets/images/contactBG.png";
import PrimaryButton from "../primarybutton/PrimaryButton";
import { useNavigate } from "react-router-dom";

const LetsDo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full px-4 lg:px-0 py-[40px] md:py-[70px] lg:py-[100px]">
      <div className="w-full h-full text-white overflow-hidden">
        <div
          className="max-w-screen-xl mx-auto h-full flex flex-col justify-center rounded-md text-center py-[50px] md:py-[70px] lg:py-[100px] bg-animated"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div>
            <p>Get Started</p>
            <h1 className="text-[24px] md:text-[34px] lg:text-[44px] uppercase font-bold my-3">
              Let’s do something <br /> new with me!
            </h1>
            <div className="flex gap-4 items-center justify-center">
              <PrimaryButton
                btnText="Contact With Me"
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsDo;
