import { createSlice } from "@reduxjs/toolkit";

// ✅ LocalStorage se data lo
const getLocalCartData = () => {
  const data = localStorage.getItem("SargamCart");
  return data ? JSON.parse(data) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: getLocalCartData(),
  },
  reducers: {
    // ✅ Add to Cart
    addToCart: (state, action) => {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.qty += action.payload.qty; // already hai — qty badhaao
      } else {
        state.cart.push({ ...action.payload }); // naya add karo
      }
      localStorage.setItem("SargamCart", JSON.stringify(state.cart));
    },

    // ✅ Remove from Cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("SargamCart", JSON.stringify(state.cart));
    },

    // ✅ Update Qty
    updateQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) item.qty = action.payload.qty;
      localStorage.setItem("SargamCart", JSON.stringify(state.cart));
    },

    // ✅ Clear Cart
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("SargamCart");
    },
  },
});

export const { addToCart, removeFromCart, updateQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
