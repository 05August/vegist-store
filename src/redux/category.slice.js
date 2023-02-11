import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientServer from "../server/clientServer";

export const getCategory = createAsyncThunk("getCategory", async () => {
  try {
    const getResponse = await clientServer.get("Category");

    return getResponse.data;
  } catch (error) {
    return error;
  }
});

const categorySlice = createSlice({
  name: "category",
  initialState: {
    isLoading: false,
    errorMessage: "",
    data: [],
  },
  reducers: {
    // get: () => this.initialState.category,
  },
  extraReducers: {
    [getCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategory.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error;
    },
  },
});

export default categorySlice.reducer;
