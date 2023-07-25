import React from 'react';
import AuthProvider, { useAuth } from '../../Context/AuthProvider';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
