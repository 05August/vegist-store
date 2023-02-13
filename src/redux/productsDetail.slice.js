import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientServer from "../server/clientServer";

export const getProductsDetail = createAsyncThunk("getProductsDetail", async () => {
  try {
    const getResponse = await clientServer.get("productDetail");
    return getResponse.data;
  } catch (error) {
    return error;
  }
});

const productsDetailSlice = createSlice({
  name: "productsDetail",
  initialState: {
    isLoading: false,
    errorMessage: "",
    data: [],
  },
  reducers: {
    // get: () => this.initialState.category,
  },
  extraReducers: {
    [getProductsDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductsDetail.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getProductsDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error;
    },
  },
});

export default productsDetailSlice.reducer;
