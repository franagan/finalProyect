import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar/Navbar";


const Home = lazy(() => import("./pages/Home/Home"));
const Comercios = lazy(() => import("./pages/Comercios/Comercios"));
const Comercio1 = lazy(() => import("./pages/Comercios/Comercio1"));
const Comercio2 = lazy(() => import("./pages/Comercios/Comercio2"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const About = lazy(() => import("./pages/About/About"));

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<div>Cargando página...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comercios" element={<Comercios />} />
            <Route path="/comercio1" element={<Comercio1 />} />
            <Route path="/comercio2" element={<Comercio2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
