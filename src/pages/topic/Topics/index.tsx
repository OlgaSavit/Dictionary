import React from "react"
import { Link } from "react-router-dom"

import { RouterPath } from "@/routers/routerPath"
import LayoutComponent from "@/components/Layout"

const TopicPage: React.FC = () => {
  return (
    <LayoutComponent title={"topic"}>
      All topic
      <Link to={RouterPath.homePage}>Home</Link>
    </LayoutComponent>
  )
}
export default TopicPage
