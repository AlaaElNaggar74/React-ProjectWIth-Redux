import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState: [],
  reducers: {
    addcart: (state, action) => {
      let findproduct = state.find(
        (product) => action.payload.id === product.id
      );
      if (findproduct) {
        findproduct.countprod += 1;
      } else {
        let colneproduct = { ...action.payload, countprod: 1 };
        state.push(colneproduct);
      }
    },
    deletcart: (state, action) => {
      return state.filter((cart) => cart.id !== action.payload.id);
    },
    clearall: () => {
      return [];
    },
  },
});

export const { addcart, deletcart, clearall } = CartSlice.actions;

export default CartSlice.reducer;
