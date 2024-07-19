import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthStatus, setUserToken } from "@/store/slices/authSlice";

const useHeaderNavigation = () => {
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onLogout = () => {
    localStorage.removeItem("user_token");
    dispatch(setUserToken(null));
    dispatch(setAuthStatus(null));
  };
  const onOpenMobileMenu = (isOpen: boolean) => {
    setMobileMenuOpen(isOpen);
  };
  return { mobileMenuOpen, onOpenMobileMenu, onLogout };
};
export { useHeaderNavigation };
