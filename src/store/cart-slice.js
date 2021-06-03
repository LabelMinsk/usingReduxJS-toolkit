import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find((itemState) => itemState.id === newItem.id);
      if (!existingItems) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
          name: newItem.title
        });
        state.totalQuantity += newItem.price;
        return state;
      }else{
        existingItems.quantity++;
        existingItems.totalPrice = existingItems.totalPrice + newItem.price;
      };
    },
    removeItemCart() {},
  },
});

export const cartAction = cartSlice.reducer;
export default cartSlice;
