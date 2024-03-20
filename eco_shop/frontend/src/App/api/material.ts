import axios from "axios";
import { MaterialsType } from "../../types/materials/materials";

// const BASE_URL: string = "https://swap-style-eco.shop";
const BASE_URL: string = "https://swap-style-eco.shop";

export const axiosMaterialsLoad = async (): Promise<MaterialsType[]> => {
  const res = await axios.get(`${BASE_URL}/api/materials`);
  return res.data;
};
