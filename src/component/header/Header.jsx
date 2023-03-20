import React, { useState } from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header" id="header">
      <div className="header_wrapper">
        <a href="" className="logo">
          <img src="assets/home/logo.svg" alt="" />
        </a>
        <nav className = {isOpen ? "active" : ""}>
          <a href="">Destinations</a>
          <a href="">Hotels</a>
          <a href="">Flights</a>
          <a href="">Bookings</a>
          <a href="">Login</a>
          <a href="" className="sign_up">
            Sign up
          </a>
          <a href="">EN</a>
        </nav>
        <div
          className= "menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </div>
      </div>
    </div>
  );
};
