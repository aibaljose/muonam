import React, { useState } from 'react';
import "./home.css";
import "./modal.css";
import maveli from "./assets/Maveli-12.png";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
     if (deferredPrompt) {
    deferredPrompt.prompt();
  }
  };
    const handleClick2 = () => {
    navigate("/instructions");
  };

    return (
        <div>
            <div className="container">
                <h2>µLearn</h2>
                <h1>µ-onam</h1>
            

                <p>the real hunt begin</p>
                <div className="btn" onClick={handleClick}>Start Hunt</div>
                <div className="btnc" onClick={handleClick2}>instructions</div>
            </div>
            <div className="bottom-img-container">
                <img src={maveli} alt="Bottom Image" />
            </div>
           
        </div>
    );
};

export default Home;