import React from "react"
import RouterComponent from "./routers"
import { Provider } from "react-redux"
import store from "@/store"
import "@/styles/global.scss"

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    </React.Fragment>
  )
}

export default App
