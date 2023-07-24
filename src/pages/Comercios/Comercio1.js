import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Comercio.css";

const Comercio1 = () => {
  const { storeId } = useParams();
  const [storeData, setStoreData] = useState(null);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    comment: "",
  });
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  useEffect(() => {
    const getStoreData = async () => {
      try {
        const response = await axios.get(
          `https://backfinalproyect.vercel.app/store/${storeId}`
        );
        setStoreData(response.data);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };

    getStoreData();
  }, [storeId]);

  const addToCart = (product) => {
    console.log(`Añadir ${product.name} al carrito`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const comment = formData.get("comment");
    console.log("Email:", email);
    console.log("Comment:", comment);
    setFormData({
      email: "",
      comment: "",
    });
    setMensajeEnviado(true);
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 7000);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        {storeData && (
          <div>
            <header className="inicioContainer">
              <img
                src={storeData.image}
                className="foto"
                alt="imagen del comercio1"
              />
              <h2>{storeData.name}</h2>
              <h4>{storeData.description}</h4>
              <p>Dirección: {storeData.direction}</p>
              <p>Teléfono: {storeData.phone}</p>
              <p>Localidad: {storeData.province}</p>
              <p>Provincia: {storeData.city}</p>
              <p>Página web: {storeData.web}</p>
              <p>E-mail: {storeData.mail}</p>
              <p>Categoría: {storeData.category}</p>
            </header>
          </div>
        )}

        <h4>Productos disponibles</h4>
        <div className="cardContainer">
          {products.map((product) => (
            <div key={product.name} className="card">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "150px" }}
              />
              <h4>{product.name}</h4>
              <p>Precio: {product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-success"
              >
                Añadir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "5px" }}
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="inputbox">
        <h4>Formulario de contacto</h4>
        <p>(contacta directamente con la tienda)</p>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInputDisabled"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput">Tu Email</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2Disabled"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="floatingTextarea">¿En qué podemos ayudarte?</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
        {mensajeEnviado && (
          <p className="mensaje-enviado">
            Mensaje Enviado, en breve nos pondremos en contacto contigo.
          </p>
        )}
      </div>
    </div>
  );
};

export default Comercio1;
