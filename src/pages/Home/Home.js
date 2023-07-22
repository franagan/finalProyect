import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header className="inicioContainer">
        <h1>Bienvenido a nuestra página de Tiendas Online</h1>
        <p>
          Baja para explorar una variedad de tiendas en línea donde realizar tus
          compras
        </p>
      </header>

      <div className="cardContainer">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/Zapatillas.png"
            className="card-img-top"
            alt="imagen del comercio1"
          />
          <div className="card-body">
            <h5 className="card-title">Zapaterias</h5>
            <p className="card-text">
              Compra aquí los últimos modelos de zapatillas Jordan del mercado y
              encuentra grandes ofertas en los clásicos de esta marca.
            </p>
            <Link className="btn btn-primary" to="/comercio1">
              Comprar
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/Zapatillas.png"
            className="card-img-top"
            alt="imagen del comercio2"
          />
          <div className="card-body">
            <h5 className="card-title">Tienda Jordan</h5>
            <p className="card-text">
              Compra aquí los últimos modelos de zapatillas Jordan del mercado y
              encuentra grandes ofertas en los clásicos de esta marca.
            </p>
            <Link className="btn btn-primary" to="/comercio2">
              Comprar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
