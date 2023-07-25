import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Comercio.css";

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
  const [showCart, setShowCart] = useState(false); // visibilidad del carrito


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

  //carrito//

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const calculateTotalUnits = (cart) => {
    const totalUnits = cart.reduce((total, product) => total + product.quantity, 0);
    return totalUnits;
  };


  const addToCart = (product) => {
    console.log(`Añadir ${product.name} al carrito`);
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        const updatedCart = prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const [cart, setCart] = useState([]);

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === productId);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          return prevCart.filter((product) => product._id !== productId);
        } else {
          const updatedCart = prevCart.map((item) =>
            item._id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          return updatedCart;
        }
      }
      return prevCart;
    });
  };

  const calculateTotal = (cart) => {
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    return totalPrice.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
  };

  //carrito//

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
            <div key={product._id} className="card">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "150px" }}
              />
              <h4>{product.name}</h4>
              <div>{product.price.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}</div>
              <p>{product.description}</p>
              <button
                onClick={() => addToCart(product)}
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
                      class="bi bi-cart-check"
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
                      class="bi bi-cart"
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

      <div>
      <button onClick={handleCartClick}>
            {showCart ? "Ocultar Carrito" : "Mostrar Carrito"}
          </button>
          {showCart && (
      <aside className="shopping">
      <h4>Carrito de compras</h4>
      <p>Cantidad de productos: {calculateTotalUnits(cart)}</p>
      <ul  style={{ listStyle: "none" }}>
        {cart.map((product) => (
          <li key={product._id}>
            <div>
              <img src={product.image} alt={product.name} style={{ width: "150px" }} />
            </div>
            <div>{product.name}</div>
            <div>{product.price.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}</div>
            <div>
              <button onClick={() => removeFromCart(product._id)} className="btn btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-bag-dash" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </button>
              <div className="count">{product.quantity}</div>
              <button onClick={() => addToCart(product)} className="btn btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">Total: {calculateTotal(cart)}</div>
    </aside>
    )}
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

export default TiendaDetalles;
