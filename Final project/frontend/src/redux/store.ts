import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice/authSlice";
import subCategorySlice from "./subCategorySlice/SubCategory"

const store = configureStore({
  reducer: {
    auth: authSlice,
    subCategories: subCategorySlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => store.dispatch;

export default store


