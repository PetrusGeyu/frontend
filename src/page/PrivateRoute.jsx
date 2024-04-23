import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import Home from './Home';

const PrivateRoute = ({ element: Component, auth, ...rest }) => {
  if (!auth) {
    return <Navigate to='/login' />;
  }

  return <Route {...rest}  element={<Home />} />;
};

export default PrivateRoute;
