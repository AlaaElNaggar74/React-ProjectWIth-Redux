import ProductSlice from './Slice/ProductSlice';
import CartSlice from './Slice/CartSlice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer:{
    product:ProductSlice,
    cart: CartSlice,
  },
})



