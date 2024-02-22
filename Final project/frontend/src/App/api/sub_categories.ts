import axios from "axios";
import { SubCategoryType } from "../../types/sub_category/sub_category";

const BASE_URL: string = "https://swap-style-eco.shop";

export const axiosSubCategoryLoad = async (): Promise<SubCategoryType[]> => {
  const res = await axios.get(`${BASE_URL}/api/categories/sub`);
  return res.data;
};

export function axiosMaterialsLoad(): any {
  throw new Error("Function not implemented.");
}
