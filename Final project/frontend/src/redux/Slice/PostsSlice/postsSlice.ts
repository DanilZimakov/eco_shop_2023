import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialPost } from "../../../types/initialState/initialState";
import { ActionPosts } from "../../../types/enum/Action";
import * as api from "../../../App/api/posts";
import { CategoryId } from "../../../types/categories/categories";


const initialPost: InitialPost = {
  posts: [],
};
export const loadPost = createAsyncThunk(ActionPosts.LOAD_POSTS, () =>
  api.axiosLoadPosts(),
);
export const deletePost = createAsyncThunk(
  ActionPosts.DELETE_POST,
  (id: CategoryId) => api.axiosDelPosts(id),
);

const postSlice = createSlice({
  name: "post",
  initialState: initialPost,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  },
});

export default postSlice.reducer;
