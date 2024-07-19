import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    routeName: null,
    isDarkTheme: false,
  },
  reducers: {
    setRouteName: (state, action) => {
      state.routeName = action.payload;
    },
    setDarkTheme: (state, action) => {
      state.isDarkTheme = action.payload;
    },
  },
});

export const { setRouteName, setDarkTheme } = mainSlice.actions;
export default mainSlice.reducer;
