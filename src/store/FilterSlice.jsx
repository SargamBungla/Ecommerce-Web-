import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter_products: [],
    all_products: [],
    sorting_value: "lowest",
    filters: {
      text: "",
      category: "all",
      brand: "all",
      price: 0,
      maxPrice: 0,
      minPrice: 0,
    },
  },
  reducers: {
    // ✅ Products set karo — API data aane ke baad
    setProducts: (state, action) => {
      const maxPrice = Math.max(...action.payload.map((p) => p.price));
      state.all_products = action.payload;
      state.filter_products = action.payload;
      state.filters.maxPrice = maxPrice;
      state.filters.price = maxPrice;
      state.filters.minPrice = 0;
    },

    // ✅ Filter update karo
    updateFilter: (state, action) => {
      const { name, value } = action.payload;
      state.filters[name] = value;
    },

    // ✅ Sorting set karo
    setSorting: (state, action) => {
      state.sorting_value = action.payload;
    },

    // ✅ Filters apply karo
    applyFilters: (state) => {
      const { text, category, brand, price } = state.filters;
      let products = [...state.all_products];

      // Text filter
      if (text) {
        products = products.filter((p) =>
          p.title.toLowerCase().includes(text.toLowerCase()),
        );
      }

      // Category filter
      if (category !== "all") {
        products = products.filter((p) => p.category === category);
      }

      // Brand filter
      if (brand !== "all") {
        products = products.filter((p) => p.brand === brand);
      }

      // Price filter
      products = products.filter((p) => p.price <= price);

      // Sorting
      if (state.sorting_value === "lowest") {
        products = products.sort((a, b) => a.price - b.price);
      }
      if (state.sorting_value === "highest") {
        products = products.sort((a, b) => b.price - a.price);
      }
      if (state.sorting_value === "a-z") {
        products = products.sort((a, b) => a.title.localeCompare(b.title));
      }
      if (state.sorting_value === "z-a") {
        products = products.sort((a, b) => b.title.localeCompare(a.title));
      }

      state.filter_products = products;
    },

    // ✅ Filters clear karo
    clearFilters: (state) => {
      state.filters = {
        text: "",
        category: "all",
        brand: "all",
        price: state.filters.maxPrice,
        maxPrice: state.filters.maxPrice,
        minPrice: 0,
      };
      state.filter_products = state.all_products;
    },
  },
});

export const {
  setProducts,
  updateFilter,
  setSorting,
  applyFilters,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
