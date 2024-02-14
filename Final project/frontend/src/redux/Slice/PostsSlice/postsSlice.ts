import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialPost } from "../../../types/initialState/initialState";
import { ActionPosts } from "../../../types/enum/Action";
import * as api from "../../../App/api/posts";
import { PostEditType, PostId } from "../../../types/posts/posts";
const initialPost: InitialPost = {
  posts: [],
};
export const loadPost = createAsyncThunk(ActionPosts.LOAD_POSTS, () =>
  api.axiosLoadPosts(),
);
export const deletePost = createAsyncThunk(
  ActionPosts.DELETE_POST,
  (id: PostId) => api.axiosDelPosts(id),
);
export const publichPost = createAsyncThunk(
  ActionPosts.PUBLICH_POST,
  (id: PostId) => api.axiosPublichPosts(id),
);

export const editPost = createAsyncThunk(
  ActionPosts.EDIT_POST,
  async (postData: PostEditType) => {
    const responce = await api.axiosEditPost(postData.id, postData);
    console.log("ActionPosts", responce.data);

    return responce.data;
  },
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
        state.posts = state.posts.filter(
          (post) => post.id !== Number(action.payload),
        );
      })
      .addCase(publichPost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id,
        );
        if (index !== -1) {
          state.posts[index].publich = action.payload.publich;
        }
      })
      .addCase(editPost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id,
        );
        if (index !== -1) {
          state.posts[index] = { ...state.posts[index], ...action.payload };
        }
      });
  },
});

export default postSlice.reducer;
