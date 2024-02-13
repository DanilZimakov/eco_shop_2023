import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialPost } from "../../types/initialState/initialState";
import { ActionPosts } from "../../types/enum/Action";
import * as api from "../../App/api/posts";
const initialPost: InitialPost = {
  posts: [],
};
export const loadPost = createAsyncThunk(ActionPosts.LOAD_POSTS, () =>
  api.axiosLoadPosts(),
);

const postSlice = createSlice({
  name: "post",
  initialState: initialPost,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPost.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});
export default postSlice.reducer;


