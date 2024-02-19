import { ReactNode } from "react";

export type CategoriesType = {
  name: ReactNode;
  id: number;
  category_name: string;
  category_image: string;
};

export type CategoryId = CategoriesType["id"];
