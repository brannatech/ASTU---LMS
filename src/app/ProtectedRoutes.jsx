import { useSelector } from "react-redux";
import React from "react";
import { authProvider } from "./authSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = useSelector(authProvider);
  return auth.token.username ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
