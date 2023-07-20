import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="nav nav-tabs navbar-custom">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Incio</Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Comercios</Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="comercios">Comercios</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="comercio1">Comercio 1</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="comercio2">Comercio 2</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Login</Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="login">
                Login
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="register">
                Register
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
