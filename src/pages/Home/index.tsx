import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Checkbox from "@mui/material/Checkbox"

import { RouterPath } from "@/routers/routerPath"
import LayoutComponent from "@/components/Layout"
import { RootState } from "@/store"

const HomePage: React.FC = () => {
  const { isDarkTheme } = useSelector((store: RootState) => store.main)
  console.log("theme", isDarkTheme)
  return (
    <div>
      <LayoutComponent title={"test"}>
        <Link to={RouterPath.aboutPage}>about</Link>
        <Link to={RouterPath.accountPage}>account</Link>
        <Link to={RouterPath.signInPage}>SignIn</Link>
        <Checkbox defaultChecked />
      </LayoutComponent>
    </div>
  )
}
export default HomePage
