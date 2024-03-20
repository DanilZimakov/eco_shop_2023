import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      "https://swap-style-eco.shop/api/categories",
    );
    console.log("fetchCategories", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
