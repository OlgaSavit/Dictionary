import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setDarkTheme } from "@/store/slices/mainSlice";

const useLayout = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((store: RootState) => store.main);
  const onChangeTheme = (isDark: boolean) => {
    dispatch(setDarkTheme(isDark));
  };
  return { isDarkTheme, onChangeTheme };
};
export { useLayout };
