export type PostType = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  size: string;
  publich: boolean;
  user_id: number;
  category_id: number;
  sub_category_id: number;
};
export type PostId = PostType["id"];

export type PostAddType = {
  name: string;
  price: string;
  description: string;
  image: string;
  size: string;
  user_id: number;
  category_id: number;
  sub_category_id: number;
};
