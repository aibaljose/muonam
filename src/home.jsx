import React, { useState } from 'react';
import "./home.css";
import "./modal.css";
import maveli from "./assets/Maveli-12.png";


const Home = () => {
    return (
        <div>
            <div className="container">
                <h1>µ-onam</h1>
                <p>the real hunt begin</p>
                <div className="btn" onClick={() => setShowModal(true)}>Start Hunt</div>
            </div>
            <div className="bottom-img-container">
                <img src={maveli} alt="Bottom Image" />
            </div>
           
        </div>
    );
};

export default Home;