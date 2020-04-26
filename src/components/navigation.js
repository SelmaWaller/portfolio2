import React from "react";
import { NavLink } from "react-router-dom";

import logo from "./../images/logo.svg";
const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">projects</NavLink>
          <div className="navLine"></div>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
          <div className="navLine"></div>
        </li>
        <li>
          <NavLink to="/cv">cv</NavLink>
          <div className="navLine"></div>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
          <div className="navLine"></div>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
