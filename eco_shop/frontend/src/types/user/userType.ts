export type User = {
  id?: number;
  name: string;
  email: string;
  phone: string;
  admin: boolean;
};

export type UserProfileType = {
  id: number;
  user_id: number;
  age:string;
  image: string;
  gender: string;
}