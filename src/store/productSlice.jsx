import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://dummyjson.com/products?limit=100";

// ✅ All Products fetch karo
export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const res = await axios.get(API);
  return res.data.products;
});

// ✅ Single Product fetch karo
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingle",
  async (id) => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ✅ All Products
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.featureProducts = action.payload
          .filter((p) => p.rating >= 4.5)
          .slice(0, 6);
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // ✅ Single Product
      .addCase(fetchSingleProduct.pending, (state) => {
        state.isSingleLoading = true;
        state.singleProduct = {};
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.isSingleLoading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.isSingleLoading = false;
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
