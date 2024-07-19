import { Link } from "react-router-dom";
import { RouterPath } from "@/routers/routerPath";
import LayoutComponent from "@/components/Layout";
import React from "react";

const Account = () => {
  return (
    <LayoutComponent title={"test"}>
      Account
      <Link to={RouterPath.homePage}>Home</Link>
    </LayoutComponent>
  );
};
export default Account;
