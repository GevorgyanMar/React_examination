import { createSlice } from "@reduxjs/toolkit";
import { MovieDTO } from "../../types/types";
import { fetchMovies } from "./controller";

interface MoviesState {
  movies: MovieDTO[];
  sortBy: string;
}

const initialState: MoviesState = {
  movies: [],
  sortBy: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    filterMovies(state, action) {
      const filters = action.payload;
      state.movies = state.movies.filter((movie) => {
        return (
          (!filters.yearMin || movie.year >= filters.yearMin) &&
          (!filters.yearMax || movie.year <= filters.yearMax) &&
          (!filters.country || movie.country === filters.country) &&
          (!filters.ratingMin || movie.rating >= filters.ratingMin) &&
          (!filters.ratingMax || movie.rating <= filters.ratingMax) &&
          (!filters.genres ||
            movie.genres.includes(filters.genres.toLowerCase())) &&
          (!filters.actors ||
            movie.actors.includes(filters.actors.toLowerCase()))
        );
      });
    },
    setSortBy(state, action) {
      const sortByValue = action.payload;
      state.sortBy = sortByValue;

      switch (sortByValue) {
        case "year":
          state.movies.sort((a, b) => b.year - a.year);
          break;
        case "rating":
          state.movies.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const { setMovies, setSortBy, filterMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
