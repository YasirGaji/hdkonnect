import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
}

//Reducers
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (
      state: CartState,
      action: PayloadAction<{ id: string}>
    ) => {
      const index = state.items.findIndex(
        (item: Product) => item._id === action.payload.id
      );

      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in cart!`
        );
      }

      state.items = newCart;
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;


//Selectors 
export const selectCartItems = (state: RootState) => state.Cart.items;

export const selectCartItemsWithId = (state: RootState, id: string) => {
  state.Cart.items.filter((item: Product) => item._id === id);
}

export const selectCartTotal = (state: RootState) => {
  state.Cart.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0
  );
}

export default cartSlice.reducer;