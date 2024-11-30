import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-4 lg:px-0 py-[40px] md:py-[70px] lg:py-[100px] bg-[#030d0f]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-12">
          <div className="col-span-2">
            <img src={logo} alt="logo.png" />
            <p className="text-sm md:text-md lg:text-lg text-white mt-3">
              It’s AS TECH, Digital Agency. We love to write code, it’s our
              passoin. We're here to help you, We're here to design your web
              page. We can help you to describe yourself in the best way. No
              matter how difficult your web page is, We'll find an easy way and
              complete your work anyway. Stay connect with us……..😊
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-5 text-white">Explore Link</h2>
            <ul className="text-white flex flex-col gap-2">
              <li>
                <Link
                  to="/about"
                  className="hover:ml-2 hover:text-[#e77529] transition-all duration-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className="hover:ml-2 hover:text-[#e77529] transition-all duration-500"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:ml-2 hover:text-[#e77529] transition-all duration-500"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:ml-2 hover:text-[#e77529] transition-all duration-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-5 text-white">Our Services</h2>
            <ul className="text-white flex flex-col gap-2">
              <li>UI/UX Design</li>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Full Stack Development</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-5 text-white">Follow Me</h2>
            <ul className="flex items-center gap-3">
              <li>
                <Link
                  to="https://www.facebook.com/mdabdulmotaleb.antor/"
                  target="_blank"
                >
                  <div className="group bg-[#e77529] w-10 h-10 flex justify-center items-center rounded-md hover:bg-white transition-all duration-300">
                    <FaFacebookF className="text-white text-xl group-hover:text-[#e77529] transition-all duration-300" />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="https://x.com/MdAntor16617412" target="_blank">
                  <div className="group bg-[#e77529] w-10 h-10 flex justify-center items-center rounded-md hover:bg-white transition-all duration-300">
                    <FaTwitter className="text-white text-xl group-hover:text-[#e77529] transition-all duration-300" />
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/am-antor/"
                  target="_blank"
                >
                  <div className="group bg-[#e77529] w-10 h-10 flex justify-center items-center rounded-md hover:bg-white transition-all duration-300">
                    <FaLinkedinIn className="text-white text-xl group-hover:text-[#e77529] transition-all duration-300" />
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/antor_1999/"
                  target="_blank"
                >
                  <div className="group bg-[#e77529] w-10 h-10 flex justify-center items-center rounded-md hover:bg-white transition-all duration-300">
                    <FaInstagram className="text-white text-xl group-hover:text-[#e77529] transition-all duration-300" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
