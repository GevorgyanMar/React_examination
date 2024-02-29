import React, { FC, useState } from "react";
import { MovieDTO } from "../../types/types";
import Button from "../../components/button/Button";
interface MovieDetailProps {
  movie: MovieDTO;
}
const MoveDetail: FC<MovieDetailProps> = ({ movie }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const {
    title,
    description,
    year,
    rating,
    country,
    genres,
    actors,
    imageUrl,
    videoUrl,
  } = movie || {};

  const onTogglePlay = () => {
    const video = videoRef.current;

    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }

      setIsPlaying(!isPlaying);
    } else {
      console.error("Video element not found!");
    }
  };

  return (
    <div className="film-detail">
      <div className="">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="">
        <h2>{title}</h2>
        <p>Description: {description}</p>
        <p>Year: {year}</p>
        <p>Rating: {rating}</p>
        <p>Country: {country}</p>
        <p>Genres: {genres}</p>
        <p>Actors: {actors}</p>
      </div>

      <video ref={videoRef} src={videoUrl}></video>
      <Button onClick={onTogglePlay} label={isPlaying ? "Pause" : "Play"} />
    </div>
  );
};

export default MoveDetail;
