import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";

const ProtectedRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
