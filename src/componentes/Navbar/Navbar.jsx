import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import './Navbar.css';

export const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();

    return (
        <div className="navbar-container">
            <ul className="nav nav-tabs navbar-custom">
                <li className="nav-item">
                    <NavLink
                        exact
                        activeClassName="active"
                        className="nav-link"
                        to="/"
                    >
                        Inicio
                    </NavLink>
                </li>
                <li className="nav-item dropdown">
                    <div
                        exact
                        activeClassName="active"
                        className="nav-link dropdown-toggle"
                        to="/comercios"
                        role="button"
                        aria-expanded="false"
                    >
                        Comercios
                    </div>
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
                                    <NavLink
                                        exact
                                        activeClassName="active"
                                        className="dropdown-item"
                                        to="/profile"
                                    >
                                        Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact
                                        activeClassName="active"
                                        className="dropdown-item"
                                        to="/registerseller"
                                    >
                                        Registrar Vendedor
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/"
                                        onClick={logout}
                                    >
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
            </ul>
        </div>
    );
};

export default Navbar;
