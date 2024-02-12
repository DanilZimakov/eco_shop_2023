import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice/authSlice";
import cartSlice from "./Slice/cartSlice/cartSlice";
import subCategorySlice from "./Slice/subCategorySlice/SubCategory";
import postsSlice from "./Slice/PostsSlice/postsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    subCategories: subCategorySlice,
    posts: postsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => store.dispatch;

export default store;
