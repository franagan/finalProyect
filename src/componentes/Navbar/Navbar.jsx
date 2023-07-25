import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import "./Navbar.css";
import Carrito from "../../componentes/Carrito/Carrito";
import { useCart } from "../../Context/CartContext";

export const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [showCart, setShowCart] = useState(false);
  const { cart } = useCart();

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

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
                to="zapaterias"
              >
                Zapaterias
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="dropdown-item"
                to="floristerias"
              >
                Floristerias
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="dropdown-item"
                to="fruterias"
              >
                Fruterias
              </NavLink>
            </li>

          </ul>
        </li>
        <li className="nav-item dropdown">
          {isLoggedIn ? (
            <>
              <NavLink
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Logout
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/" onClick={logout}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            <>
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
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    className="dropdown-item"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            </>
          )}
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

        {isLoggedIn && (
          <li className="nav-item">
            <div className="nav-link" onClick={handleCartClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>

              <span className="cart-count">{cart.length}</span>
            </div>

            {showCart && <Carrito handleCartClick={handleCartClick} />}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;