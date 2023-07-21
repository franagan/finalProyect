import React, { createContext, useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const [formUser, setFormUser] = useState(INITIAL_STATE);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    setIsLoggedIn(!!storedToken);
    setIsLoading(false);
  }, []);

  const loginUser = async (username, password) => {
    const fakeUser = {
      username: "Jacinto91",
      password: "1234",
    };

    if (username === fakeUser.username && password === fakeUser.password) {
      const fakeToken = "fake_token_here";
      sessionStorage.setItem("token", fakeToken);
      setIsLoggedIn(true);
      console.log("isLoggedIn del Auth is true");
      setFormUser(INITIAL_STATE);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {

      console.log("isLoggedIn es true en el AuthProvider");
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn && <Navigate to="/" />}
      <AuthContext.Provider value={{ isLoggedIn, isLoading, login: loginUser, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;