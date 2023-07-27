import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Comercio.css";
import { useCart } from "../../Context/CartContext";

const TiendaDetalles = () => {
  const { storeId } = useParams();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [storeData, setStoreData] = useState(null);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    comment: "",
  });
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { cart, addToCart, removeFromCart, calculateTotalUnits, calculateTotal } = useCart();

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

  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isCommentEmpty, setIsCommentEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const comment = formData.get("comment");

    if (email.trim() === '') {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }

    if (comment.trim() === '') {
      setIsCommentEmpty(true);
    } else {
      setIsCommentEmpty(false);
    }

    if (email.trim() !== '' && comment.trim() !== '') {
      //los 2 campos están llenos, se puede enviar el formulario
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
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <div>
        {storeData && (
          <div>
            <header className="inicio">
              <img
                src={storeData.image}
                className="img-fluid"
                alt="imagen del comercio1"
                style={{ width:"40%", height:"auto"}}
              />
              <h1>{storeData.name}</h1>
              <h3>{storeData.description}</h3>
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


        <div className="cardContainer1">
          {products.map((product) => (
            <div key={product._id} className="card">
              <img
                src={product.image}
                className="img-thumbnail"
                alt={product.name}
                style={{ width:"100%",height:"200px"}}
              />
              <h4>{product.name}</h4>
              <div>
                {product.price.toLocaleString("es-ES", {
                  style: "currency",
                  currency: "EUR",
                })}
              </div>
              <p>{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-success"
              >
                {cart.find((item) => item._id === product._id) ? (
                  <>
                    Añadido{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </>
                ) : (
                  <>
                    Añadir{" "}
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
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="inputboxTienda">
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
            {isEmailEmpty && <p className="alert alert-danger">El e-mail no puede estar vacío.</p>}
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
            {isCommentEmpty && <p p className="alert alert-danger">el comentario no puede estar vacío.</p>}
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
        {mensajeEnviado && (
          <p className="mensaje-enviado">
            Mensaje Enviado, en breve nos pondremos en contacto contigo{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-check" viewBox="0 0 16 16" >
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
</svg>
          </p>
        )}
      </div>
    </div>
  );
};

export default TiendaDetalles;