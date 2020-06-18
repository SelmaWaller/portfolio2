import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="content">
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/">projects</NavLink>
            <div className="navLine"></div>
          </li>
          <li>
            <NavLink to="/cv">cv</NavLink>
            <div className="navLine"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
