import React from "react";
import AuthProvider, { useAuth } from "../../Context/AuthProvider";
import { BrowserRouter as  Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;