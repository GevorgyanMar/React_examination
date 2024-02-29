import React, { FC, useState } from "react";
import { MovieDTO } from "../../types/types";
import MovieCard from "./MovieCard";
import MoveDetail from "./MoveDetail";
import { useSelector } from "react-redux";
import { moviesSelector } from "../../toolkit/moviesSlice/moviesSelector";

const MoviesList: FC = () => {
  const [selectedFilm, setSelectedFilm] = useState<MovieDTO | null>(null);
  const movies = useSelector(moviesSelector);

  const handleFilmClick = (id: string) => {
    const film = movies?.find((film) => film.id === id);
    if (film) {
      setSelectedFilm(film);
    }
  };

  return (
    <div className="film-list">
      {movies.map((film) => (
        <MovieCard key={film.id} film={film} onFilmClick={handleFilmClick} />
      ))}
      {selectedFilm && <MoveDetail movie={selectedFilm} />}
    </div>
  );
};

export default MoviesList;
