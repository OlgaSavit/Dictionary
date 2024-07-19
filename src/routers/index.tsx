import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import PrivateRoute from "@/routers/privateRoute";
import Account from "@/pages/Account";
import { RouterPath } from "@/routers/routerPath";
import UnAuthRoute from "@/routers/UnAuthRoute";
import { ThemeProvider } from "@mui/material";
import { theme, darkTheme } from "@/config/theme";
import TopicPage from "@/pages/topic/Topics";
import { setAuthStatus } from "@/store/slices/authSlice";
import SignUpPage from "@/pages/auth/SignUp";
import SignInPage from "@/pages/auth/SignIn";

const RouterComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((store: RootState) => store.main);
  useEffect(() => {
    let userToken = localStorage.getItem("user_token");
    userToken ? dispatch(setAuthStatus(true)) : dispatch(setAuthStatus(false));
  }, []);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
        <Router>
          <Routes>
            <Route path={"/"} Component={Home}></Route>
            <Route path={RouterPath.aboutPage} Component={About} />
            <Route path={"/"} element={<PrivateRoute />}>
              <Route
                path={RouterPath.accountPage}
                element={<Account />}
              ></Route>
              <Route
                path={RouterPath.topicsPage}
                element={<TopicPage />}
              ></Route>
            </Route>
            <Route path={"/"} element={<UnAuthRoute />}>
              <Route
                path={RouterPath.signInPage}
                element={<SignInPage />}
              ></Route>
              <Route
                path={RouterPath.signUpPage}
                element={<SignUpPage />}
              ></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};
export default RouterComponent;
