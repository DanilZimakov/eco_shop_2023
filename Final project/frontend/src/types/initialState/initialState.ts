import { CategoriesType } from "../categories/categories";
import { PostType } from "../posts/posts";
import { SubCategoryType } from "../sub_category/sub_category";
import { User } from "../user/userType";

export type initialAuthType = {
  user: User | undefined;
  error: string | undefined;
};
export type InitialSubCategory = {
  subCategories: SubCategoryType[];
};
export type InitialPost = {
  posts: PostType[];
};

export type InitialModal = {
  modal: boolean;
};

export type InitialCategoryType = {
  category: CategoriesType[];
};
