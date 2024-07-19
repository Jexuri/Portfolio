import React from "react";
import Navbar from "..//components/Navbar";
import HeroImg from "..//components/HeroImg";
import Footer from "..//components/Footer";
import Work from "../components/Work";
import Quotes from "../components/Quotes";
const Home = () => {
  return (
  <div>
    <Navbar/>
    <HeroImg/>
    <Quotes/>
    <Work/>
    <Footer/>
  </div>
  ); 
};

export default Home
