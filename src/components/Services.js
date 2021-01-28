import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPalette, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="service-container" id="services">
            <h2>Services</h2>
            <div className="service-info">
                <div className="caption">
                    <div className="service">
                        <FontAwesomeIcon 
                            icon={ faLaptopCode } 
                            style={{ color: "#00bcd4" }} 
                            size= '5x'
                            className= "icon"
                         />
                        <h3>Web Development</h3>
                    </div>
                </div>
                <div className="caption">
                    <div className="service">
                        <FontAwesomeIcon 
                            icon={ faPalette } 
                            style={{ color: "#00bcd4" }} 
                            size= '5x'
                            className= "icon"
                        />
                        <h3>Web Design</h3>
                    </div>
                </div>
                <div className="caption">
                    <div className="service">
                        <FontAwesomeIcon 
                            icon={ faMobileAlt } 
                            style={{ color: "#00bcd4" }} 
                            size= '5x'
                            className= "icon"
                        />
                        <h3>Social Media Management</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
