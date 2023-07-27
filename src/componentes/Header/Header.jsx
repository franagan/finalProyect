import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="blue-bg"></div>
      <div className="white-bg shadow"></div>
      <div className="content">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="text-container">
          <h1 className="h1">BarrioShop</h1>
          <h2 className="h2">Pequeños comercios, grandes oportunidades</h2>
        </div>
      </div>
      <div className="additional-bg"></div>
    </header>
  );
};

export default Header;