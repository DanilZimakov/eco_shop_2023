import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActionHarm } from "../../../types/enum/Action";
import { PostId } from "../../../types/posts/posts";
import * as api from "../../../App/api/harm";
import { InitialHarmType } from "../../../types/initialState/initialState";
import { HarmType } from "../../../types/harm/harm";
const initialHarm: InitialHarmType = {
  harm: [],
};

// export const harmLoad = createAsyncThunk(ActionHarm.LOAD_HARM, (id: PostId) =>
//   api.axiosHarm(id),
// );

export const harmLoad = createAsyncThunk<HarmType[], PostId>(
  ActionHarm.LOAD_HARM,
  async (id: PostId) => {
    const response = await api.axiosHarm(id);
    // предполагается, что response.data является HarmType[]
    return response.data;
  },
);

const harmSlice = createSlice({
  name: "harm",
  initialState: initialHarm,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      harmLoad.fulfilled,
      (state, action: PayloadAction<HarmType[]>) => {
        state.harm = action.payload;
      },
    );
  },
});

export default harmSlice.reducer;
