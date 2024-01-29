import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  products: [],
  userInfo: [],
  orders: [],
  id: 0,
};

export const amazonSlice = createSlice({
  name: 'amazon',
  initialState,
  reducers: {
    // ============= Product Reducers Start here ===============
    // Add to cart
    addToCart: (state, action) => {
      if (state.userInfo != null) {
        const item = state.products.find(
          (item) => item.id === action.payload.id
        );
        if (item) {
          item.quantity += action.payload.quantity;
        } else {
          state.products.push(action.payload);
        }
      } else {
        window.alert('pleace Sign in  to compelte');
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    // Delete item from cart
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    // Reset cart to initial state
    resetCart: (state) => {
      state.products = [];
    },
    // ============= Product Reducers End here =================
    // ============= UserInfo Reducers Start here ==============
    // User authentication
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    UserSingOut: (state) => {
      state.userInfo = null;
    },
    // ============= UserInfo Reducers End here ================
    makeOrder: (state, action) => {
      state.id = state.id + 1;
      state.orders.push({
        products: [...state.products],
        info: action.payload,
        id: state.id,
      });
      state.products = [];
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
  setUserInfo,
  UserSingOut,
  makeOrder,
  deleteOrder,
} = amazonSlice.actions;
export default amazonSlice.reducer;
