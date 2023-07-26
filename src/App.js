import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider, { useAuth } from "./Context/AuthProvider";
import {CartProvider} from "./Context/CartContext";
import ProtectedRoute from "./componentes/ProtectedRoute/ProtectedRoute";
import Header from "./componentes/Header/Header";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer"
import Gpt from "./componentes/Chat/Gpt";

const Home = lazy(() => import("./pages/Home/Home"));
const Zapaterias = lazy(() => import("./pages/Comercios/Zapaterias"));
const Fruterias = lazy(() => import("./pages/Comercios/Fruterias"));
const Floristerias = lazy(() => import("./pages/Comercios/Floristerias"));
const TiendaDetalles = lazy(() => import("./pages/Comercios/TiendaDetalles"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const About = lazy(() => import("./pages/About/About"));
const Carrito = lazy(() => import("./componentes/Carrito/Carrito"));

const App = () => {
  return (
    <>
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <Navbar />
          <Suspense fallback={<div>Cargando página...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/zapaterias" element={<Zapaterias />} />
              <Route path="/fruterias" element={<Fruterias />} />
              <Route path="/floristerias" element={<Floristerias />} />
              <Route
                path="/tienda/:storeId"
                element={<ProtectedRoute element={<TiendaDetalles />} />}
                />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/tienda" element={<Carrito />} />
            </Routes>
            <Gpt></Gpt>
          </Suspense>
          <Footer/>
        </CartProvider>
      </AuthProvider>
    </Router>
      </>
  );
};

export default App;
