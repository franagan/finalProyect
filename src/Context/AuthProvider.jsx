import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const INITIAL_STATE = {
    email: "",
    password: "",
  };

  const [formUser, setFormUser] = useState(INITIAL_STATE);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedToken = sessionStorage.getItem("token");
      setIsLoggedIn(!!storedToken);
    };

    checkLoginStatus();
  }, []);

  const loginUser = async (email, password) => {
    try {
      if (!email || !password) {
        setError("Debes ingresar un email y una contraseña.");
        return false;
      }

      const response = await fetch('https://backfinalproyect.vercel.app/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        setFormUser(INITIAL_STATE);
        setError("");
        navigate('/');
        return true;
      } else {
        const data = await response.json();
        setError(data.message || "Usuario o contraseña incorrectos");
        return false;
      }
    } catch (error) {
      setError("Error de inicio de sesión");
      return false;
    }
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login: loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;