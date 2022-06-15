import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Products from "./Products";
import "../styles/Navbar.css"; 
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="main">
      <Navbar/>
     <div className="front">
      <div className="front-text">Welcome</div>
      </div>
      <div className="deals">
        <div className="deals-text">Our best deals of the Day!!!</div>
      </div>   
      <Carousel/>
      <Products/>
      </div>
  );
};

export default Home;
