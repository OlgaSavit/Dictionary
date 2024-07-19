import React from "react"
import { Link } from "react-router-dom"

import { RouterPath } from "@/routers/routerPath"
import LayoutComponent from "@/components/Layout"

const AboutPage: React.FC = () => {
  return (
    <LayoutComponent title={"test"}>
      About
      <Link to={RouterPath.homePage}>Home</Link>
    </LayoutComponent>
  )
}
export default AboutPage
