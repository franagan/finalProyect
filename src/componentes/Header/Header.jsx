import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="blue-bg"></div>
      <div className="white-bg shadow"></div>
      <div className="content">
        <h1>Nombre de la página</h1>
        <h5>
          Eslogan o pequeña descripción
        </h5>
      </div>
    </header>
  );
};

export default Header;