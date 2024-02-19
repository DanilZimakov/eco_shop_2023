import axios, { AxiosError } from "axios";
import { User } from "../../types/user/userType";
import { SignInType, SignUpType } from "../../types/auth/authTypes";
const BASE_URL = "http://localhost:3000";
axios.defaults.withCredentials = true;
export const axiosSignUp = async (data: SignUpType): Promise<User> => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/sign-up`, {
      name: data.name,
      email: data.email,
      password: data.password,
      cpassword: data.cpassword,
      phone: data.phone,
    });

    localStorage.setItem("token", res.data.accessToken);
    return res.data.user;
  } catch (error) {
    if (error instanceof AxiosError && error.request?.status === 400) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("Произошла ошибка при регистрации пользователя.");
  }
};
export const axiosSingIn = async (data: SignInType): Promise<User> => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/sign-in`, {
      email: data.email,
      password: data.password,
    });

    localStorage.setItem("token", res.data.accessToken);
    return res.data.user;
  } catch (error) {
    if (error instanceof AxiosError && error.request?.status === 400) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("Произошла ошибка при входе пользователя.");
  }
};
export const axiosLogout = async (): Promise<void> => {
  const res = await axios.post(`${BASE_URL}/api/auth/logout`);
  localStorage.removeItem("token");
  return res.data;
};

export const axiosCheckAuth = async (): Promise<User> => {
  const res = await axios.get(`${BASE_URL}/api/auth/check`, {
    // withCredentials:true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data.user;
};
