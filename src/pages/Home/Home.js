import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

  const users= [
    {
    "id": 1,
    "nombre": "AyPrueba1",
    "texto" : "Compra aquí los últimos modelos de zapatillas Jordan del mercado y encuentra grandes ofertas en los clásicos de esta marca"
    },
    {
    "id": 2,
    "nombre": "Deportes2",
    "texto" : "Compra aquí los últimos modelos de zapatillas Jordan del mercado y encuentra grandes ofertas en los clásicos de esta marca"
    },
    {
      "id": 3,
      "nombre": "CPrueba3",
      "texto" : "Compra aquí los últimos modelos de zapatillas Jordan del mercado y encuentra grandes ofertas en los clásicos de esta marca"
     },
     {
      "id": 4,
      "nombre": "BzPrueba4",
      "texto" : "Compra aquí los últimos modelos de zapatillas Jordan del mercado y encuentra grandes ofertas en los clásicos de esta marca"
     },
     {
      "id": 5,
      "nombre": "Zapateria5",
      "texto" : "Compra aquí los últimos modelos de zapatillas Jordan del mercado y encuentra grandes ofertas en los clásicos de esta marca"
     },
     {
      "id": 6,
      "nombre": "Verduleria6",
      "texto" : "Compra aquí los últimos modelos de zapatillas Jordan del mercado y encuentra grandes ofertas en los clásicos de esta marca"
     }
  ];

  const[query, setQuery]= useState("");
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
        <input required="required" type="text" onChange={e=> setQuery(e.target.value)}/>
        <span>Busca tu tienda</span>
        <i></i>
      </div>

      {/* HAY QUE CAMBIAR LAS RUTAS A LOS NOMBRES */}
      
      <div className="cardContainer" >


          {users.filter((user)=>user.nombre.toLowerCase().includes(query)).map((user) => ( 
            
            <div key={user.id} className="card">
            <img
            src="/Zapatillas.png"
            className="card-img-top"
            alt="imagen del comercio1"
            />
          <div className="card-body" >
            <h5 className="card-title">{user.nombre}</h5>
            <p className="card-text">
              {user.texto}
            </p>
            <Link className="btn btn-primary" to={'/comercio'+user.id}>     
              Comprar
            </Link>
          </div>
        </div>
            ))};
         
      </div>
    </div>
  );
};


export default Home;


// Dejo todo esto comentado, son los originales que hizo ivan por si hay que volver a usarlos. Habra que cambiar la forma de conexion//

/* <div className="card" >
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

        <div className="card" >
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
          
        </div> */

