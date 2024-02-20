import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialCartType } from "../../../types/initialState/initialState";
import { CartItemType } from "../../../types/cart/cartItemType";

const initialState: InitialCartType = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemType>) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += action.payload.quantity ?? 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity ?? 1,
        });
      }
      state.totalPrice = calculateTotal(state.items);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      }
      state.totalPrice = calculateTotal(state.items);
    },
    clearCart: (state) => {
      state.items = [];
    },
    increaseQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      state.totalPrice = calculateTotal(state.items);
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.totalPrice = calculateTotal(state.items);
    },
  },
});

const calculateTotal = (items: CartItemType[]) => {
  return items.reduce(
    (total, item) => total + item.post.price * item.quantity,
    0,
  );
};

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
