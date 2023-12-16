import { configureStore } from "@reduxjs/toolkit";
import moviesData from "../slice/moviesSlice";
import movieDetils from "../slice/movieDetailsSlice";

export const MoviesStore = configureStore({
  reducer: {
    moviesData,
    movieDetils,
    

    // devTools:true,
  },
});
