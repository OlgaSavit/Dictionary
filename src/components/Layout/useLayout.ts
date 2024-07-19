import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setDarkTheme } from "@/store/slices/mainSlice";

const useLayout = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((store: RootState) => store.main);
  const { isAuthenticated } = useSelector((store: RootState) => store.auth);
  const onChangeTheme = (isDark: boolean) => {
    dispatch(setDarkTheme(isDark));
  };
  return { isDarkTheme, isAuthenticated, onChangeTheme };
};
export { useLayout };
