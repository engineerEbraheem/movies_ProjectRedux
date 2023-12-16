import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//to get all movies data:

export const getAllMoviesData = createAsyncThunk(
  "moviesData/getAll",
  async () => {
    const response = await axios.get("moviesData.json");
    const numOfMovies = response.data.length;

    return { allData: response.data, totalMovies: numOfMovies };
  }
);

// action to filter data By Search for type:
export const filterMovie = createAsyncThunk(
  "moviesData/search",
  async (word) => {
    const response = await axios.get("moviesData.json");
    const allData = response.data;
    const filterSearchData = allData.filter((item) =>
      item.type.trim().includes(word)
    );
    const numOfMovies = filterSearchData.length;
    return { filterData: filterSearchData, totalMovies: numOfMovies };
  }
);

// action to get movies details:

export const getMovieDetails = createAsyncThunk(
  "movieDetails/getInfo",
  async (id) => {
    const response = await axios.get("movieDetailsData.json");
    const allDetailsData = response.data;
    const filterDetailsById = allDetailsData.find((item) => item.id === id);
    return filterDetailsById;
  }
);

//to get all movies details:
