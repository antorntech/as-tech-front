import React from "react";
import resume from "../../assets/resume.pdf"; // Import the resume PDF
import PrimaryButton from "../primarybutton/PrimaryButton";
import { useNavigate } from "react-router-dom";

const HomeAbout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="w-full h-full px-4 lg:px-0 py-[40px] md:py-[70px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto h-full">
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 lg:gap-20">
          <div className="col-span-1">
            <div
              className="w-full h-full"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img
                src="/about.jpg"
                alt="about.jpg"
                className="w-full h-full rounded-tr-[20px] md:rounded-tr-[30px] lg:rounded-tr-[50px] rounded-bl-[20px] md:rounded-bl-[30px] lg:rounded-bl-[50px] shadow-lg"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div
              className="flex items-center gap-2"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src="/rec.png" alt="rec.png" className="w-5 h-5" />
              <p className="text-sm">About Us</p>
            </div>

            <div
              className="relative z-10"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h1
                style={{ lineHeight: "1.2" }}
                className="text-2xl lg:text-5xl font-bold w-full my-4 lg:my-8 z-40 relative"
              >
                We Can Design & Develop Anything You Want
              </h1>
              <div className="flex justify-center items-center gap-2 mt-2 absolute left-28 md:left-80 bottom-2 z-20 rotate-[-5deg] ">
                <img
                  src="/orange-line.png"
                  alt="orange-line"
                  className="scale-in-bl"
                />
              </div>
            </div>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              We specialize in both design and development, offering end-to-end
              solutions tailored to your needs. Whether you need a sleek,
              user-friendly interface or powerful backend functionality, We
              bring creativity and technical expertise together to turn your
              ideas into reality. From websites and applications to unique
              digital experiences, We ensure everything is crafted with
              precision, innovation, and attention to detail.
            </p>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="mt-5 md:mt-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-12 lg:gap-20">
                <div className="flex items-center gap-3">
                  <div>
                    <img src="/icons/check.png" alt="check.png" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold">50+</p>
                    <p className="text-xl">Complete Projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <img src="/icons/clock.png" alt="clock.png" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold">2.5+</p>
                    <p className="text-xl">Years of Experience</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 md:mt-10">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <img src="/icons/check-box.png" alt="check-box" />
                    <p>Work simple and cline design</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/icons/check-box.png" alt="check-box" />
                    <p>New idea and user friendly design</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <img src="/icons/check-box.png" alt="check-box" />
                    <p>Web Design Full stack</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/icons/check-box.png" alt="check-box" />
                    <p>Unlimited Revisions</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 md:mt-10">
                <PrimaryButton btnText="Learn More" handleClick={handleClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
