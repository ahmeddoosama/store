import React from "react";
import { Link, NavLink } from "react-router-dom";

// import Style
import "./style.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
