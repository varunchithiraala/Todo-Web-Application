import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    return isAuthenticated() ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
