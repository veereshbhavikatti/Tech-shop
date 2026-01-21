import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ADD TO CART
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
        });
      }
    },

    // REMOVE ITEM COMPLETELY
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // INCREASE QUANTITY
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },

    // DECREASE QUANTITY (AUTO REMOVE)
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
      }
    },

    // OPTIONAL: CLEAR CART
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
