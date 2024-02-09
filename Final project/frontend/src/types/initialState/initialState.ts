import { SubCategoryType } from "../sub_category/sub_category";
import { User } from "../user/userType"

export type initialAuthType = {
    user: User | undefined,
    error: string | undefined
}
export type InitialSubCategory = {
  subCategories: SubCategoryType[];
};