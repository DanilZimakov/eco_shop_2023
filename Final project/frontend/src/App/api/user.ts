import axios from "axios";
export interface UserEdit {
  gender: string;
  age: string;
  image: string;
}
export const editProfileUser = async (data: UserEdit) => {
  const res = await axios.post(
    "https://swap-style-eco.shop/api/user/edit",
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
  return res.data;
};
export const loadProfileUser = async () => {
  const res = await axios.get("https://swap-style-eco.shop/api/user/", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res.data;
};
