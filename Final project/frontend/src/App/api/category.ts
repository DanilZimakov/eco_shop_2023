import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
