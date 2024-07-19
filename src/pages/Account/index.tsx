import React from "react"
import { Link } from "react-router-dom"

import { RouterPath } from "@/routers/routerPath"
import LayoutComponent from "@/components/Layout"

const AccountPage: React.FC = () => {
  return (
    <LayoutComponent title={"test"}>
      Account
      <Link to={RouterPath.homePage}>Home</Link>
    </LayoutComponent>
  )
}
export default AccountPage
