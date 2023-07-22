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
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedToken = sessionStorage.getItem("token");
      if (storedToken) {
        try {
          const response = await fetch('/api/verify-token', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error('Error during token verification:', error);
          setIsLoggedIn(false);
        }
      }
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  const loginUser = async (email, password) => {
    try {
      if (!email || !password) {
        console.error("Email y contraseña son obligatorios.");
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
        navigate('/'); // Redirect to home page after successful login
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error during login:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        },
      });

      sessionStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/login'); // Redirect to login page after successful logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <>
      {isLoading ? (
        // You can display a loading spinner or some other indicator while checking the login status
        <div>Loading...</div>
      ) : (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, login: loginUser, logout }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};

export default AuthProvider;