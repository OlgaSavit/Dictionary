import { Link } from "react-router-dom";
import { RouterPath } from "@/routers/routerPath";
import LayoutComponent from "@/components/Layout";
import React from "react";

const About = () => {
  return (
    <LayoutComponent title={"test"}>
      About
      <Link to={RouterPath.homePage}>Home</Link>
    </LayoutComponent>
  );
};
export default About;
