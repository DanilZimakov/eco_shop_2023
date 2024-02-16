import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActionMaterials } from "../../../types/enum/Action";
import * as api from "../../../App/api/sub_categories";
import { InitialMaterials } from "../../../types/initialState/initialState";

const initialMaterial: InitialMaterials = {
  materials: [],
};

export const loadMaterials = createAsyncThunk(
    ActionMaterials.LOAD_MATERIALS,
  () => api.axiosMaterialsLoad(),
);

const materialsSlice = createSlice({
  name: "materials",
  initialState: initialMaterial,
  reducers: {},
  extraReducers: (builer) => {
    builer.addCase(loadMaterials.fulfilled, (state, action) => {
      state.materials = action.payload;
    });
  },
});

export default materialsSlice.reducer;
