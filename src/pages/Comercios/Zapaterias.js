import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Comercio.css";

const Zapaterias = () => {
  const [stores, setStores] = useState([]);
  const [query, setQuery] = useState("");

  const getDataStore = async () => {
    try {
      const response = await axios.get(
        "https://backfinalproyect.vercel.app/store/stores"
      );
      setStores(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los datos de las tiendas:", error);
    }
  };

  useEffect(() => {
    getDataStore();
  }, []);

  return (
    <div>
      <header className="inicioContainer">
        <h1>Bienvenido a nuestra página de Tiendas Online</h1>
        <p>
          Baja para explorar una variedad de tiendas en línea donde realizar tus
          compras
        </p>
      </header>

      <div className="inputbox">
        <input
          required="required"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <span>Busca tu tienda</span>
        <i></i>
      </div>

      <div className="cardContainer">
        {stores
          .filter((store) => store.category === "Zapaterias")
          .map((store) => (
            <div key={store._id} className="card">
              <img
                src={store.image}
                className="card-img-top"
                alt="imagen del comercio"
              />
              <div className="card-body">
                <h5 className="card-title">{store.name}</h5>
                <p className="card-text">{store.description}</p>
                <NavLink className="btn btn-primary" to={`/comercio/${store._id}`}>
                  Comprar
                </NavLink>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Zapaterias;
