import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialMaterialsType } from "../../../types/initialState/initialState";
import { ActionMaterials } from "../../../types/enum/Action";
import * as api from "../../../App/api/materials";
const initialCategory: InitialMaterialsType = {
  materials: [],
};
export const loadMaterials = createAsyncThunk(
  ActionMaterials.LOAD_MATERIALS,
  () => api.axiosLoadMaterials(),
);

const materialsSlice = createSlice({
  name: "materials",
  initialState: initialCategory,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadMaterials.fulfilled, (state, action) => {
      state.materials = action.payload;
    });
  },
});
export default materialsSlice.reducer;
