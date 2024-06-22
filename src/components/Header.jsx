import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.webp";

const Header = () => {
  return (
    <header className="header">
      <NavLink className="logo" to="/">
        <img src={logo} alt="Wealth Health logo" />
        <h1>HRnet</h1>
      </NavLink>
      <nav className="nav">
        <NavLink className="nav__link" to="/">
          <p>Create Employee</p>
        </NavLink>
        <NavLink className="nav__link" to="/employees">
          <p>View Employees</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
