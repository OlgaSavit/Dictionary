import { RouterPath } from "@/routers/routerPath";
import LayoutComponent from "@/components/Layout";

import React from "react";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Home = () => {
  const { isDarkTheme } = useSelector((store: RootState) => store.main);
  console.log("theme", isDarkTheme);
  return (
    <div>
      <LayoutComponent title={"test"}>
        <Link to={RouterPath.aboutPage}>about</Link>
        <Link to={RouterPath.accountPage}>account</Link>
        <Link to={RouterPath.signInPage}>SignIn</Link>
        <Checkbox defaultChecked />
      </LayoutComponent>
    </div>
  );
};
export default Home;
