import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieDTO } from "../../types/types";
const url = "http://localhost:3001/movies";

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<[MovieDTO]>(url);
      return response.data;
    } catch (e) {
      return rejectWithValue("");
    }
  }
);

export const addMovies = createAsyncThunk(
  "movie/addMovie",
  async (movInfo: MovieDTO, { dispatch }) => {
    try {
      await axios.post(url, movInfo);
      dispatch(fetchMovies());
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }
);
