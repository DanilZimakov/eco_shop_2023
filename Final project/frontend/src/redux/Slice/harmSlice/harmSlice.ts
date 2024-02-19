import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActionHarm } from "../../../types/enum/Action";
import { PostId } from "../../../types/posts/posts";
import * as api from "../../../App/api/harm";
import { InitialHarmType } from "../../../types/initialState/initialState";

const initialHarm :InitialHarmType = {
  harm: [],
 
};

export const harmAdd = createAsyncThunk(ActionHarm.ADD_HARM, (id: PostId) =>
  api.axiosAddHarm(id),
);
export const harmLoad = createAsyncThunk(ActionHarm.LOAD_HARM, () => api.axiosLoadHarm());

const harmSlice = createSlice({
  name: "harm",
  initialState: initialHarm,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(harmLoad.fulfilled, (state, action) => {
      state.harm = action.payload;
    })
    .addCase(harmAdd.fulfilled, (state, action) => {
      state.harm.push(action.payload);
    });
  },
});
export default harmSlice.reducer;



