import axios from "axios";
import { PostId } from "../../types/posts/posts";
import { HarmType } from "../../types/harm/harm";
// const BASE_URL = "https://swap-style-eco.shop";
const BASE_URL = "https://swap-style-eco.shop";

export const axiosAddHarm = async (id: PostId): Promise<HarmType> => {
  const res = await axios.post(`${BASE_URL}/api/harm/${id}`);
  return res.data;
};

export const axiosLoadHarm = async (): Promise<HarmType[]> => {
  const res = await axios.get(`${BASE_URL}/api/harm`);
  return res.data;
};
