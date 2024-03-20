import { PostType } from "../posts/posts";

export type CartItemType = PostType & {
  quantity: number;
  total?: number;
  post: PostType;
};
