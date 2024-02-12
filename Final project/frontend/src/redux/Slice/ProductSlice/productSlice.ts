
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionProduct } from '../../../types/enum/Action';

// Определение типа части состояния
interface ProductState {
  products: Array<{
    id: string;
    // Дополнительные поля продукта
  }>;
}

// Начальное состояние
const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    editProduct: (state, action: PayloadAction<{ id: string; changes: Partial<any> }>) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload.changes };
      }
    },
  },
});

export const { deleteProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;
