import React from 'react'
import "./home.css"
import maveli  from "./assets/maveli-12.png"

const home = () => {
    return (
        <div>
            <div className="container">
                <h1>µ-onam</h1>
                <p>the real hunt begin</p>
                <div className="btn">Start Hunt</div>
            </div>

            <div className="bottom-img-container">
                <img src={maveli} alt="Bottom Image" />
            </div>

        </div>
    )
}

export default home