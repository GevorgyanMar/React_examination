import React, { FC } from "react";
import { MovieDTO } from "../../types/types";

interface MovieCardProps {
  film: MovieDTO;
  onFilmClick: (id: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ film, onFilmClick }) => {
  return (
    <div className="film-card" onClick={() => onFilmClick(film.id)}>
      <img src={film.imageUrl} alt={film.title} />
      <h3>{film.title}</h3>
      <p>Year: {film.year}</p>
      <p>Rating: {film.rating}</p>
    </div>
  );
};

export default MovieCard;
