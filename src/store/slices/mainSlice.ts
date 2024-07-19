import { createSlice } from "@reduxjs/toolkit";
import { languages } from "@/constants/language";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    routeName: null,
    isDarkTheme: false,
    language: languages.en.code,
  },
  reducers: {
    setRouteName: (state, action) => {
      state.routeName = action.payload;
    },
    setDarkTheme: (state, action) => {
      state.isDarkTheme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setRouteName, setDarkTheme, setLanguage } = mainSlice.actions;
export default mainSlice.reducer;
