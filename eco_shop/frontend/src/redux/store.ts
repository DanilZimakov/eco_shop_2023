import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./Slice/authSlice/authSlice";
import cartSlice from "./Slice/cartSlice/cartSlice";
import subCategorySlice from "./Slice/subCategorySlice/SubCategory";
import postsSlice from "./Slice/PostsSlice/postsSlice";
import modalSlice from "./Slice/modalSlice/modalSlice";
import categorySlice from "./Slice/categorySlice/categorySlice";
import harmSlice from "./Slice/harmSlice/harmSlice";
import materialsSlice from "./Slice/materialsSlice/MaterialsSlice";
import userSlice from "./Slice/UserSlice/userSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    subCategories: subCategorySlice,
    posts: postsSlice,
    modal: modalSlice,
    categories: categorySlice,
    harm: harmSlice,
    materials: materialsSlice,
    profile: userSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => store.dispatch;

export default store;
