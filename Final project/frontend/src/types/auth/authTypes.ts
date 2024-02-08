import { User } from "../user/userType";

export type SignUpType = {
    name: string;
    email: string;
    password: string;
    cpassword: string;
    phone: string;
}
export type SignInType = {
    email: string;
    password: string;
}
export type AuthResponce = {
    accessToken:string,
    refreshToken:string,
    user: User
}