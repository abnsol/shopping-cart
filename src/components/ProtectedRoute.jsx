import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

const ProtectedRoute = () => {
  const auth = useAuth();
  if (!auth.authenticated) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoute;