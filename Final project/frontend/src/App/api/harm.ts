import axios from "axios";
import { PostId } from "../../types/posts/posts";
import { HarmType } from "../../types/harm/harm";
const BASE_URL = "http://localhost:3000";

export const axiosHarm = async (id: PostId): Promise<HarmType> => {
  const res = await axios.get(`${BASE_URL}/harm/${id}`);
  console.log(res.data);
  return res.data;
};
