import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import FullScreenLoader from "../../Loader/FullScreenLoader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <FullScreenLoader />;

  if (user && user.email) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoutes;
