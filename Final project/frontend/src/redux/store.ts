import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice/authSlice";
import subCategorySlice from "./subCategorySlice/SubCategory"
import postsSlice from "./PostsSlice/postsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    subCategories: subCategorySlice,
    posts: postsSlice
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => store.dispatch;

export default store


