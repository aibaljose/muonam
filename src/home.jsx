import React, { useState } from 'react';
import "./home.css";
import "./modal.css";
import maveli from "./assets/Maveli-12.png";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

    return (
        <div>
            <div className="container">
                <h1>µ-onam</h1>
                <p>the real hunt begin</p>
                <div className="btn" onClick={handleClick}>Start Hunt</div>
            </div>
            <div className="bottom-img-container">
                <img src={maveli} alt="Bottom Image" />
            </div>
           
        </div>
    );
};

export default Home;