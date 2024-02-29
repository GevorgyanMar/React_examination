import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../toolkit/store";
import { setSortBy } from "../../toolkit/moviesSlice/moviesReducer";
import { useSelector } from "react-redux";
import { sortBySelector } from "../../toolkit/moviesSlice/moviesSelector";
import MoviesList from "./MoviesList";
import { fetchMovies } from "../../toolkit/moviesSlice/controller";
import MovieFilter from "./MovieFilter";

const Movies: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const sortBy = useSelector(sortBySelector);

  const handleSortChange = (sortBy: string) => {
    dispatch(setSortBy(sortBy));
  };
  return (
    <div className="movies-container">
      <div className="filters-container">
        <MovieFilter />
        <div className="sortBy-block">
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="year">Year</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <MoviesList />
    </div>
  );
};

export default Movies;
