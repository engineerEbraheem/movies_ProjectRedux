import { createSlice } from "@reduxjs/toolkit";
import { getMovieDetails } from "../api/apiRequst";
const initalValue = {
  isLoading: false,
  movDetils: {},
  error: "",
};

const movDetilsSlice = createSlice({
  name: "movieDetils",
  initialState: initalValue,

  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movDetils = action.payload;

      state.error = "";
    });
    builder.addCase(getMovieDetails.rejected, (state, action) => {
      console.log("this error is: ", state.error);
      state.isLoading = false;
      state.error = action.error.message;
    });
  }, //end builder reducer
}); // end slice

export default movDetilsSlice.reducer;
