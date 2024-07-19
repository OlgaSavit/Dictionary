import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import PrivateRoute from "@/routers/privateRoute";
import Account from "@/pages/Account";
import SignIn from "@/pages/auth/SignIn";
import { RouterPath } from "@/routers/routerPath";
import UnAuthRoute from "@/routers/UnAuthRoute";

const RouterComponent: React.FC = () => {
  const { isDarkTheme } = useSelector((store: RootState) => store.main);
  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <Router>
        <Routes>
          <Route path={"/"} Component={Home}></Route>
          <Route path={RouterPath.aboutPage} Component={About} />
          <Route path={"/"} element={<PrivateRoute />}>
            <Route path={RouterPath.accountPage} element={<Account />}></Route>
          </Route>
          <Route path={"/"} element={<UnAuthRoute />}>
            <Route path={RouterPath.signInPage} element={<SignIn />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
export default RouterComponent;
