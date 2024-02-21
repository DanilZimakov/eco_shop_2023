import axios from "axios";
import { SubCategoryType } from "../../types/sub_category/sub_category";

// const BASE_URL: string = "https://swap-style-eco.shop";
const BASE_URL: string = "http://localhost:3000";

export const axiosSubCategoryLoad = async (): Promise<SubCategoryType[]> => {
  const res = await axios.get(`${BASE_URL}/categories/sub`);
  return res.data;
};

export function axiosMaterialsLoad(): any {
  throw new Error("Function not implemented.");
}
