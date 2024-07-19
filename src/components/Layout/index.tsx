import React from "react"
import { Container } from "@mui/material"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import Header from "@/components/Header"
import { useLayout } from "@/components/Layout/useLayout"

import styles from "./style.module.scss"

interface LayoutComponentInterface {
  children: React.ReactNode
  title: string
  containerFullHeight?: boolean
}

const LayoutComponent: React.FC<LayoutComponentInterface> = ({ children, title, containerFullHeight }) => {
  const { isDarkTheme, isAuthenticated, onChangeTheme } = useLayout()
  return (
    <div className={styles.layoutBlock}>
      <Header title={title} isDarkTheme={isDarkTheme} onChangeTheme={onChangeTheme} isAuthenticated={isAuthenticated} />
      <div className={styles.wrapperMainContent}>
        <Container maxWidth={"xl"} className={containerFullHeight ? styles.containerFullHeight : ""}>
          {children}
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <div>Footer</div>
    </div>
  )
}
export default LayoutComponent
