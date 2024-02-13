export type ImageType = {
  id: number;
  url: string;
  post_id: number;
  user_id: number;
};

export type PostType = {
  id: number;
  name: string;
  price: string;
  description: string;
  image?: ImageType[];
  size: string;
  publich: boolean;
  user_id: number;
  category_id: number;
  sub_category_id: number;
};

export interface InitialPost {
  posts: PostType[];
}
