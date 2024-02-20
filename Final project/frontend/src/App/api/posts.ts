import axios from "axios";
import { PostAddType, PostEditType, PostId, PostType } from "../../types/posts/posts";

const BASE_URL = "http://localhost:3000";

export const axiosLoadPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data;
};

export const axiosAddPost = async (data:PostAddType): Promise<PostType> => {
 const res = await axios.post(`${BASE_URL}/posts/add`, data)
 console.log(res.data);
 
 return res.data
}
export const axiosDelPosts = async (
  postId: PostId,
): Promise<PostId> => {
  const res = await axios.delete(`${BASE_URL}/posts/delete/${postId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res.data;
};
export const axiosPublichPosts = async (id: PostId): Promise<PostType> => {
  const res = await axios.put(`${BASE_URL}/posts/publich/${id}`);
  return res.data;
};

export const axiosEditPost = async (id: PostId, postData: PostEditType) => {
  const response = await axios.post(`${BASE_URL}/posts/edit/${id}`, postData);
  return response.data;
};
