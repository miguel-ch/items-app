import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsBegin: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsCompleted: (state, action) => {
      state.loading = false;
      state.filteredProducts = action.payload;
      state.products = action.payload; // Items should be in payload
    },
    fetchProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Error is in payload instead of product list
    },
    filterProducts: (state, action) => {
      const filter = action.payload.toLowerCase().trim(); // Name
      state.filteredProducts = state.products.filter((i) => i.title.toLowerCase().includes(filter));
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const { fetchProductsBegin, fetchProductsCompleted, fetchProductsError, filterProducts } = productsSlice.actions;
