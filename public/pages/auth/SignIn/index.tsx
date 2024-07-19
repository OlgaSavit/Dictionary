import { Link } from "react-router-dom";
import { RouterPath } from "@/routers/routerPath";
import LayoutComponent from "@/components/Layout";
import React from "react";

const SignIn = () => {
  return (
    <LayoutComponent title={"test"}>
      SignIn
      <Link to={RouterPath.homePage}>Home</Link>
    </LayoutComponent>
  );
};
export default SignIn;
