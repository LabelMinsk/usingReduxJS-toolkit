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
      state.totalQuantity++;
      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title
        });
        //return state;
      }else{
        existingItems.quantity++;
        existingItems.totalPrice = existingItems.totalPrice + newItem.price;
      };
    },
    removeItemCart(state, action) {
        const removeItemId = action.payload;
        const existingItem = state.items.find(itemState=> itemState.id === removeItemId)
        state.totalQuantity --;
        if(existingItem === 1){
          state.items = state.items.find(item => item.id !== removeItemId)
          state.totalPrice = state.totalPrice - existingItem.price;
        }else{
          
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
