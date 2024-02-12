import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActionSubCategory } from "../../../types/enum/Action";
import * as api from "../../../App/api/sub_categories";
import { InitialSubCategory } from "../../../types/initialState/initialState";

const initialSubCat: InitialSubCategory = {
  subCategories: [],
};

export const loadSubCategory = createAsyncThunk(
  ActionSubCategory.LOAD_SUB_CATEGORY,
  () => api.axiosSubCategoryLoad()
);

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState: initialSubCat,
  reducers: {},
  extraReducers: (builer) => {
    builer.addCase(loadSubCategory.fulfilled, (state, action) => {
      state.subCategories = action.payload;
    });
  },
});

export default subCategorySlice.reducer;
