import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';


export const fetchproductapi = createAsyncThunk("ProducSlice/fetchproductapi", async()=>{

  let res= await fetch("http://localhost:9000/products");
  let data=await res.json();
  return data;
})

export const ProducSlice = createSlice({
  name: 'ProducSlice',
  initialState : [ ],
  reducers: { },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchproductapi.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    })
  },
})

export const { } = ProducSlice.actions

export default ProducSlice.reducer






