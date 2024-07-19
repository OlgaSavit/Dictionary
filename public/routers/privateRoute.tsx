import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { RouterPath } from "@/routers/routerPath";
const PrivateRoute = () => {
  const { isAuthenticated } = useSelector((store: RootState) => store.auth);
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={RouterPath.signInPage} replace />
  );
};
export default PrivateRoute;
