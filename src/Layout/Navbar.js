import React from "react";
import "../style.scss";
const Navbar = () => {
  return (
    // "https://apifortour.onrender.com/"
    <nav className="navContainer">
      <ul className="navContainer__link">
        <li className="navContianer__link--1">
          <a href="#" className="navContainer__link--image">
            Login
          </a>
        </li>
        <li className="navContainer__link--1">
          <a href="#" className="navContainer__link--image">
            Logout
          </a>
        </li>
        <li className="navContainer__link--2">
          <a href="#" className="navContainer__link--image">
            user
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
