import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // This will hold the items in the cart
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, title, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, title, price, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += price;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalAmount -= item.price;
        } else {
          // Remove item if quantity is 0
          state.items = state.items.filter(item => item.id !== id);
          state.totalQuantity -= 1;
          state.totalAmount -= item.price;
        }
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
