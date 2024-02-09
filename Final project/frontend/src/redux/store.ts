import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice/authSlice";
import cartSlice from "./cartSlice/cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => store.dispatch;

export default store;
