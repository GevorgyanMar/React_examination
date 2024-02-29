import React, { FC, useState } from "react";
import { useAppDispatch } from "../../toolkit/store";
import { filterMovies } from "../../toolkit/moviesSlice/moviesReducer";
import Button from "../../components/button/Button";

interface MovieFilters {
  yearMin?: number | undefined;
  yearMax?: number | undefined;
  country?: string | undefined;
  ratingMin?: number | undefined;
  ratingMax?: number | undefined;
  genre?: string | undefined;
  actor?: string | undefined;
}

const MovieFilter: FC = () => {
  const dispatch = useAppDispatch();
  const [filters, setFilters] = useState<MovieFilters>({
    yearMin: undefined,
    yearMax: undefined,
    country: "",
    ratingMin: undefined,
    ratingMax: undefined,
    genre: "",
    actor: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value !== "" ? value : undefined,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(filterMovies(filters));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          name="yearMin"
          placeholder="Min"
          onChange={handleChange}
        />
        <input
          type="number"
          name="yearMax"
          placeholder="Max"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          name="ratingMin"
          placeholder="Min"
          onChange={handleChange}
        />
        <input
          type="number"
          name="ratingMax"
          placeholder="Max"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="genres">Genre:</label>
        <input type="text" name="genres" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="actors">Actor:</label>
        <input type="text" name="actors" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input type="text" name="country" onChange={handleChange} />
      </div>

      <Button label="Filter" onClick={() => handleSubmit} />
    </form>
  );
};

export default MovieFilter;
