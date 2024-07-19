import { combineReducers } from "@reduxjs/toolkit";
import { mainSlice } from "@/store/slices/mainSlice";
import { authSlice } from "@/store/slices/authSlice";

const rootReducer = combineReducers({
  [mainSlice.name]: mainSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});
export default rootReducer;
