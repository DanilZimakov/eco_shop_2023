import axios from "axios";

export const axiosLoadMaterials = async () => {
  // const res = await axios.get("http://localhost:3000/materials")
  const res = await axios.get("https://swap-style-eco.shop/materials");
  return res.data;
};
