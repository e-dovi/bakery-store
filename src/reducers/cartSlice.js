import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // { id, name, price, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCakeToCart: (state, action) => {
      const cake = action.payload;
      const existingItem = state.items.find(item => item.id === cake.id);

      if (existingItem) {
        existingItem.quantity += cake.quantity || 1;
      } else {
        state.items.push({ ...cake, quantity: cake.quantity || 1 });
      }
    },

    removeCakeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity += 1;
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // Remove item if quantity is 1 and we decrement
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addCakeToCart,
  removeCakeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// 💡 Selector for total price
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

// 🧮 Selector for total item count
export const selectCartItemCount = (state) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);


export const selectCartItems = (state) => state.cart.items;
