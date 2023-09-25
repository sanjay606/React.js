//cartSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.find(item => item.id === productToAdd.id);
      
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...productToAdd, quantity: 1 });
      }
    },
    remove: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.find(item => item.id === productId);
      
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          return state.filter(item => item.id !== productId);
        }
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice;