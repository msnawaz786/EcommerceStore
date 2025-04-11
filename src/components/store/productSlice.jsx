
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {

  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productSlice.reducer;
