import React from 'react';
import logo2 from "./../../image/Logo2.png"
import {NavLink} from "react-router-dom";
import {AiOutlineInstagram, AiOutlineYoutube} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="container">

                    <div className="footer">
                        <img src={logo2} alt=""/>

                        <div className="footer--block">
                            <NavLink className="name" to={"/Home"}>Home</NavLink>
                            <NavLink className="name" to={"/Home"}>About Us</NavLink>
                            <NavLink className="name" to={"/Home"}>Study Abroad</NavLink>
                            <NavLink className="name" to={"/Home"}>Contacts</NavLink>
                        </div>

                        <div className="footer-icons">
                            <div className="footer-icons--icon">
                                <AiOutlineYoutube/>
                            </div>
                            <div className="footer-icons--icon" >
                                <FaTelegramPlane/>
                            </div>

                            <div className="footer-icons--icon">
                                <AiOutlineInstagram/>
                            </div>
                        </div>
                    </div>

                    <div className="footer--line"></div>

                    <div className="par">
                        <p>c 2023 Motion Study LLC</p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Footer;