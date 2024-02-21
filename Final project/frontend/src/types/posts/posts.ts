export type PostType = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  size: string;
  publich: boolean;
  user_id: number;
  weight: string;
  category_id: number;
  sub_category_id: number;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
};

export type PostId = PostType["id"];

export type PostAddType = {
  name: string;
  price: string;
  description: string;
  image: string;
  size: string;
  weight: string;
  user_id: number | undefined;
  category_id: number;
  sub_category_id: number;
  materials: Compounds[];
};

export type PostEditType = {
  id: number;
  name: string;
  price: number;
  description: string;
  weight: string;
  image: string;
  size: string;
  publich: boolean;
  user_id: number;
  category_id: number;
  sub_category_id: number;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
};
export interface Compounds {
  material: number;
  parcent: number;
}
