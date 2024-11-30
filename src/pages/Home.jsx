// eslint-disable-next-line no-unused-vars
import React from "react";
import HomeAbout from "../components/home/HomeAbout";
import Hero from "../components/home/Hero";
import HomeServices from "../components/home/HomeServices";
import ClientSay from "../components/home/ClientSay";
import HomePortfolio from "../components/home/HomePortfolio";
import LatestBlogs from "../components/home/LatestBlogs";
import HomeContact from "../components/home/HomeContact";
import Footer from "../components/shared/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <ClientSay />
      <HomePortfolio />
      <LatestBlogs />
      <HomeContact />
    </div>
  );
};

export default Home;
