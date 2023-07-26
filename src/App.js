import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Navbar from './componentes/Navbar/Navbar';
import NotFound from '../src/pages/NotFound/NotFound';
import ProtectedRoute from './componentes/ProtectedRoute/ProtectedRoute';


const Home = lazy(() => import('./pages/Home/Home'));
const Zapaterias = lazy(() => import('./pages/Comercios/Zapaterias'));
const Fruterias = lazy(() => import('./pages/Comercios/Fruterias'));
const Floristerias = lazy(() => import('./pages/Comercios/Floristerias'));
const TiendaDetalles = lazy(() => import('./pages/Comercios/TiendaDetalles'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const About = lazy(() => import('./pages/About/About'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const EditProfile = lazy(() => import('./pages/Profile/EditProfile'));


const App = () => {
    return (
      <Router>
        <AuthProvider>
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
              <Route path="*" element={<NotFound />} />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="/editProfile/:userId" element={<EditProfile />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </Router>
    );
};

export default App;