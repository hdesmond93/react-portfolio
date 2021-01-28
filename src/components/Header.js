import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>Web Development and Design</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Social Media Management"]}
                    typeSpeed={60}
                    backSpeed={60}
                    loop
                />
                <Link
                    activeClass="active"
                    className="btn-main-offer"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                 >
                     Contact me
                 </Link>
            </div>
            
        </div>
    )
}

export default Header
