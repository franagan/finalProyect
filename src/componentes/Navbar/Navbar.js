import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="nav nav-tabs navbar-custom">
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/">
            Inicio
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink
            exact
            activeClassName="active"
            className="nav-link dropdown-toggle"
            to="/comercios"
            role="button"
            aria-expanded="false"
          >
            Comercios
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="dropdown-item"
                to="comercios"
              >
                Comercios
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="dropdown-item"
                to="comercio1"
              >
                Comercio 1
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="dropdown-item"
                to="comercio2"
              >
                Comercio 2
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="dropdown-item"
                to="comercio3"
              >
                Comercio 3
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink
            exact
            activeClassName="active"
            className="nav-link dropdown-toggle"
            to="/login"
            role="button"
            aria-expanded="false"
          >
            Login
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="dropdown-item"
                to="login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="dropdown-item"
                to="register"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            activeClassName="active"
            className="nav-link"
            to="/about"
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
