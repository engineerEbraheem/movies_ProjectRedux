import { createSlice } from "@reduxjs/toolkit";
import { filterMovie, getAllMoviesData } from "../api/apiRequst";

const initalValue = {
  isLoading: false,
  movData: [],
  moviesCount: 0,
  error: "",
};

const moviesDataSlice = createSlice({
  name: "moviesData",
  initialState: initalValue,

  extraReducers: (builder) => {
    // for get all data:
    builder.addCase(getAllMoviesData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getAllMoviesData.fulfilled, (state, action) => {
      state.movData = action.payload.allData;
      state.moviesCount = action.payload.totalMovies;

      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(getAllMoviesData.rejected, (state, action) => {
      console.log("this error is ", action.error.message);
      state.isLoading = false;
      state.movData = [];
      state.error = action.error.message;
    });

    // for get data after filter:

    builder.addCase(filterMovie.fulfilled, (state, action) => {
      state.movData = action.payload.filterData;
      state.moviesCount = action.payload.totalMovies;

      state.isLoading = false;
      state.error = "";
    });
  },
}); //end slice moviesDataReducer

export default moviesDataSlice.reducer;
