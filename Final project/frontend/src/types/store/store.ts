import { Cart } from "../cart/cartType";
import { User } from "../user/userType";

export type initialAuthType = {
  user: User | undefined;
};

export type initialCartType = {
  cart: Cart | undefined;
};
