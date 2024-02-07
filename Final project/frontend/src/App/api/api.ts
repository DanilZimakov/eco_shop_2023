import axios from "axios";
import { User } from "../../types/user/userType";
import {  SignInType, SignUpType } from "../../types/auth/authTypes";
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
    localStorage.setItem("token",res.data.accessToken)
    
  return res.data.user;
};
export const axiosSingIn = async (data: SignInType): Promise<User> => {
  const res = await axios.post(
    `${BASE_URL}/api/auth/sign-in`,
    {
      email: data.email,
      password: data.password,
    },
    {
      withCredentials: true,
    }
  );
    localStorage.setItem("token", res.data.accessToken);

  return res.data.user;
};
export const axiosLogout = async ():Promise<void> => {
    console.log("Axios logout");
    
    const res = await axios.post(`${BASE_URL}/api/auth/logout`,{
        withCredentials:true
    })
    
    localStorage.removeItem("token")
    return res.data
}

export const axiosCheckAuth = async ():Promise<User> => {
    const res = await axios.get(`${BASE_URL}/api/auth/check`,{
        withCredentials:true,
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
   
    
    return res.data.user
    
}
