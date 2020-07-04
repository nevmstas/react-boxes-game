import React from "react";
import logo from "../cloudLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo"></img>
      <ul>
        {/* <li><a href='Game'>Game</a></li> */}
        <li>
          <NavLink to="/Game">Game</NavLink>
        </li>
        {/* <li><a href='Rules'>Rules</a></li> */}
        <li>
          <NavLink to="/Rules">Rules</NavLink>
        </li>
        {/* <li className='about-btn'><a className='about-btn' href='About'>About</a></li> */}
        <li className="about-btn">
          <NavLink className="about-btn" to="/About">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
