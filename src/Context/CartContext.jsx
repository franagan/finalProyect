import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const [cart, setCart] = useState(storedCart);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        const updatedCart = prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === productId);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          return prevCart.filter((product) => product._id !== productId);
        } else {
          const updatedCart = prevCart.map((item) =>
            item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
          );
          return updatedCart;
        }
      }
      return prevCart;
    });
  };

  const calculateTotalUnits = (cart) => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const calculateTotal = (cart) => {
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    return totalPrice.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
  };

  const resetCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotalUnits, calculateTotal, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}