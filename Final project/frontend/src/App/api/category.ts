import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      "https://swap-style-eco.shop",
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
