import axios from "axios";
import { User } from "../../types/user/userType";
import { SignInType, SignUpType } from "../../types/auth/authTypes";
const BASE_URL = "http://localhost:3000";
export const axiosSignUp = async (data: SignUpType): Promise<User> => {
  const res = await axios.post(
    `${BASE_URL}/api/auth/sign-up`,
    {
      name: data.name,
      email: data.email,
      password: data.password,
      cpassword: data.cpassword,
      phone: data.phone,
    },
    {
      withCredentials: true,
    }
  );

  return res.data;
};
export const axiosSingIn = async (data:SignInType): Promise<User> => {
    const res = await axios.post(`${BASE_URL}/api/auth/sign-in`, {
        email: data.email,
        password: data.password
    },{
        withCredentials:true
    })
    return res.data
}
export const axiosLogout = async ():Promise<void> => {
    const res = await axios.post(`${BASE_URL}/api/auth/logout`,{
        withCredentials:true
    })
    return res.data
}

export const axiosCheckAuth = async ():Promise<User> => {
    const res = await axios.get(`${BASE_URL}/api/auth/check`,{
        withCredentials:true
    })
    console.log(res);
    
    return res.data
}
