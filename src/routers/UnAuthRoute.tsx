import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { RouterPath } from "@/routers/routerPath";
const UnAuthRoute = () => {
  const { isAuthenticated } = useSelector((store: RootState) => store.auth);
  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={RouterPath.homePage} replace />
  );
};
export default UnAuthRoute;
