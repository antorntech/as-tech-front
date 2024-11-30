// eslint-disable-next-line no-unused-vars
import React from "react";
import PageHeading from "../components/shared/PageHeading";
import HomeAbout from "../components/home/HomeAbout";
import TestimonialCarousel from "../components/about/TestimonialCarousel";
import LetsDo from "../components/about/LetsDo";

const About = () => {
  return (
    <div>
      <PageHeading pageName="About" />
      <HomeAbout />
      <TestimonialCarousel />
      <LetsDo />
    </div>
  );
};

export default About;
