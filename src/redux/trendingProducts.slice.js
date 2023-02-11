import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientServer from "../server/clientServer";

export const getTrendingProducts = createAsyncThunk("getTrendingProducts", async () => {
  try {
    const getResponse = await clientServer.get("trendingProducts");

    return getResponse.data;
  } catch (error) {
    return error;
  }
});

const trendingProductsSlice = createSlice({
  name: "trendingProducts",
  initialState: {
    isLoading: false,
    errorMessage: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getTrendingProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getTrendingProducts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getTrendingProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error;
    },
  },
});

export default trendingProductsSlice.reducer;
