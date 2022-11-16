import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./Navbar.scss";
import logo from "../../images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <div className="navbar-navbar">
      <div className="container">
        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" className="img-fluid" />
        </Link>
        <div
          className={`mobile-container d-flex justify-content-between align-items-center${
            isMobile && isOpen ? " active" : ""
          }`}
        >
          <header className="d-flex d-md-none">
            <div className="mobile-logo">
              <img src={logo} alt="logo" />
            </div>
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => {
                isMobile ? setIsOpen(false) : null;
              }}
            >
              <MdClose />
            </button>
          </header>
          <nav className="d-flex align-items-center">
            <NavLink to="/">home</NavLink>
            <NavLink to="/about">about us</NavLink>
            <NavLink to="/teachers">teachers</NavLink>
            <NavLink to="/resources">resources</NavLink>
          </nav>
          <div className="auth-btns">
            <Link to="signin">sign in</Link>
            <Link to="signup" className="signup">
              sign up
            </Link>
          </div>
        </div>
        <div className="ms-auto d-flex align-items-center">
          <button
            type="button"
            className="d-block d-md-none toggle"
            onClick={() => {
              isMobile ? setIsOpen(true) : null;
            }}
          >
            <FaBars />
          </button>
        </div>
      </div>
      <div
        className={`overlay${isOpen ? " active" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
}

export default Navbar;
