import axios from "axios";
import { MaterialType } from "../../types/materials/materials";

// const BASE_URL: string = "http://localhost:3000";
const BASE_URL: string = "https://swap-style-eco.shop";

export const axiosMaterialsLoad = async (): Promise<MaterialType[]> => {
  const res = await axios.get(`${BASE_URL}/materials`);
  return res.data;
};
