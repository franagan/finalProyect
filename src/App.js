import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider, { useAuth } from "./Context/AuthProvider";
import ProtectedRoute from "./componentes/ProtectedRoute/ProtectedRoute"
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
      <AuthProvider>
        <div>
          <Navbar />
          <Suspense fallback={<div>Cargando página...</div>}>
            <Routes>
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/comercios" element={<ProtectedRoute><Comercios /></ProtectedRoute>} />
              <Route path="/comercio1" element={<ProtectedRoute><Comercio1 /></ProtectedRoute>}/>
              <Route path="/comercio2" element={<ProtectedRoute><Comercio2 /></ProtectedRoute>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            </Routes>
          </Suspense>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
