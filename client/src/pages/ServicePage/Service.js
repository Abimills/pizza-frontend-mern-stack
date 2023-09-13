import React from "react";
import "../LandingPage/landing.css";
import green from "../../assets/images/green.png";
import pizzafam from "../../assets/images/pizzafam.png";
import paparika from "../../assets/images/paparika.png";
import tomatoe from "../../assets/images/tomatoe.png";
const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-header">Our Services</h1>
      <div className="service-boxes">
        <button className="one">Free delivery</button>
        <button className="two">10 Minute after order</button>
        <button className="three"> Delicious Food</button>
      </div>
      <div className="van-container">
        <img src={green} alt="" className="greene" />
        <img src={pizzafam} alt="" className="pizza-fam" />
        <img src={paparika} alt="" className="collect" />
        <img src={tomatoe} alt="" className="collect come" />
      </div>
      <div className="fam-container">
        <p>Visit Our Resturant</p>
        <h3>PizzaFam</h3>
        <p>enjoy it with every bite</p>
      </div>
    </div>
  );
};

export default Service;
