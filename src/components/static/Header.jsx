import React from "react";
import "./Header.css";
import logo from "../../assets/react.svg";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="headerDiv">
      <div className="logoDiv">
        <img src={logo} alt="logo" />
      </div>

      <nav>
        <ul>
          <NavLink to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <li>Home</li>
          </NavLink>

          <NavLink
            to={"/About"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to={"/Service"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <li>Services</li>
          </NavLink>

          <NavLink
            to={"/Contact"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>

      <FaBars className="hamburger" />

      <div className="btnDiv">
        <button>Get Started</button>
      </div>
    </div>
  );
};
