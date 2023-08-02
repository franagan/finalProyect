import React from "react";
import "./Carrito.css";
import { useCart } from "../../Context/CartContext";

const Carrito = () => {
  const { cart, addToCart, removeFromCart, calculateTotalUnits, calculateTotal, resetCart } = useCart();

  const handleClearCart = () => {
    resetCart();
  };

  return (
    <div>
      <aside className="shopping">
        <h4>Carrito de compras</h4>
        <p>Cantidad de productos: {calculateTotalUnits(cart)}</p>
        <ul style={{ listStyle: "none" }}>
          {cart.map((product) => (
            <li key={product._id}>
              <div>
                <img src={product.image}  className="imagen" alt={product.name} style={{ width: "100px" }} />
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

        {cart.length > 0 && (
          <button onClick={handleClearCart} className="btn btn-warning">
            Pagar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-back" viewBox="0 0 16 16">
              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
            </svg>
          </button>
        )}
      </aside>
    </div>
  );
};

export default Carrito;