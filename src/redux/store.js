import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category.slice.js";
import trendingProductsReducer from "./trendingProducts.slice.js";
import productsDetailSlice from "./productsDetail.slice.js";
const store = configureStore({
  reducer: {
    category: categoryReducer,
    trendingProducts: trendingProductsReducer,
    productsDetail: productsDetailSlice,
  },
});
export default store;
