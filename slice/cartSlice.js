import { createSlice } from "@reduxjs/toolkit";

// tạo slice
const cartSlice = createSlice({
  // name của slice
  name: "cart",
  /**
   * initial state là giá trị ban đầu bao gồm những gì
   * ví dụ như : có thể là 1 mảng hoặc 1 trường của slice
   */
  initialState: {
    products: [],
  },

  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
    },
    // remove
    removeFormCart: (state, action) => {
      const removeFormCart = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      state.products = removeFormCart;
    },

    //  increment
    incrementQuantify: (state, action) => {
      const itemCart = state.products.find(
        (item) => item.id === action.payload.id
      );
      itemCart.quantity++;
    },

    // decrement
    decrementQuantify: (state, action) => {
      itemCart = state.products.find((item) => item.id === action.payload.id);
      if (itemCart.quantity == 1) {
        const removeFormCart = state.products.filter(
          (item) => item.id !== action.payload.id
        );
        state.products = removeFormCart;
      } else {
        itemCart.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeFormCart,
  incrementQuantify,
  decrementQuantify,
} = cartSlice.actions;

export default cartSlice.reducer;
