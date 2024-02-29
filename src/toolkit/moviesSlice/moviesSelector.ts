import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export const movieSelector = (state: RootState) => state.movies.movies;

export const moviesSelector = createSelector(movieSelector, (movie) => movie);

export const sortBySelector = (state: RootState) => state.movies.sortBy;
