import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="blue-bg"></div>
      <div className="white-bg shadow"></div>
      <div className="content">
        <div className="logo-container">
          <a href="/" className="logo-link">
            <img src="/logo.png" alt="Logo" className="logo" />
          </a>
        </div>
        <div className="text-container">
          <h1 className="titulo-h1">BarrioShop</h1>
          <h2 className="titulo-h2">
            Pequeños comercios, grandes oportunidades
          </h2>
        </div>
      </div>
      <div className="additional-bg"></div>
    </header>
  );
};

export default Header;
