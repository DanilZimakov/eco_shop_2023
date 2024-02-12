import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice/authSlice";
import cartSlice from "./cartSlice/cartSlice";
import subCategorySlice from "./subCategorySlice/SubCategory"
import postsSlice from "./PostsSlice/postsSlice";
import categorySlice from "./categorySlice/categorySlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    subCategories: subCategorySlice,
    posts: postsSlice,
    categories: categorySlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => store.dispatch;

export default store;



