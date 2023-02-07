import React from 'react';
import logo from "./../../image/Logo.png"
import {NavLink} from "react-router-dom";
import {CiSearch} from 'react-icons/ci';

const Header = () => {
    return (
        <>
            <div id="header">
                <div className="header-line"></div>
              <div className="container">

                  <div className="header-block">

                      <NavLink to={"/Home"}>  <img src={logo} alt=""/>  </NavLink>

                      <div className="header-block--nav">
                          <NavLink className="name" to={"/Home"}>Home</NavLink>
                          <NavLink className="name" to={"/About"}>About Us</NavLink>
                          <NavLink className="name" to={"/Study"}>Study Abroad</NavLink>
                          <NavLink className="name" to={"/Contacts"}>Contacts</NavLink>

                          <div className="header-block--lang">
                              <input
                                  type= "text"  placeholder="        Search"/>
                              <select className="language">
                                  <option>EN</option>
                                  <option>RU</option>
                                  <option>TR</option>
                              </select>
                          </div>
                      </div>


                  </div>
              </div>

            </div>
        </>
    );
};

export default Header;