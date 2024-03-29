import { CartItemType } from "../cart/cartItemType";
import { CategoriesType } from "../categories/categories";
import { HarmType } from "../harm/harm";
import { MaterialsType } from "../materials/materials";
import { PostType } from "../posts/posts";
import { SubCategoryType } from "../sub_category/sub_category";
import { User, UserProfileType } from "../user/userType";

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
export type InitialHarmType = {
  harm: HarmType[];
};
export type InitialMaterials = {
  materials: MaterialsType[];
};

export type InitialCartType = {
  items: CartItemType[];
  totalPrice: number;
};
export type InitialMaterialsType = {
  materials: MaterialsType[];
};
export type InitialUserProfile = {
  userProfile: UserProfileType | undefined;
};
