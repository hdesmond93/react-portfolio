import React from "react";
import me from "../Me.jpg";

const About = () => {
    return (
        <div className="about-container" id="about">
            <div className="about-image">
                <img 
                    src={ me } 
                    alt="me" 
                    className="me-image"
                />
            </div>
            <div className="about-info">
                <h2>About Me</h2>
                <p>Hello! My name is Heaven. I've been designing websites since I was a kid playing on Neopets, but I chose to move towards development in 2017. I specialize in ReactJS, but I have also worked with NodeJS and Angular.</p>
                <p>My desire to build beautiful things on the web has lead to a diverse skillset, including everything from Wordpress theme development to video editing to Unity game design.</p>
            </div>
        </div>
    )
}

export default About
