import React, { useState } from "react";
import { MovieDTO } from "../../types/types";
import "./style.scss";
import { useAppDispatch } from "../../toolkit/store";
import { addMovies } from "../../toolkit/moviesSlice/controller";

const initialFormData: MovieDTO = {
  id: "",
  title: "",
  description: "",
  year: 0,
  country: "",
  rating: 0,
  genres: [],
  actors: [],
  imageUrl: "",
  videoUrl: "",
};

const AddMovieForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<MovieDTO>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addMovies(formData));

    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="AddMovieForm">
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="ID"
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <div>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
        <label htmlFor="year">Year</label>
      </div>
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Country"
      />

      <div>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <label htmlFor="rating">Rating</label>
      </div>

      <input
        type="text"
        name="genres"
        value={formData.genres}
        onChange={handleChange}
        placeholder="Genres"
      />

      <input
        type="text"
        name="actors"
        value={formData.actors}
        onChange={handleChange}
        placeholder="Actors"
      />
      <input
        type="text"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        type="text"
        name="videoUrl"
        value={formData.videoUrl}
        onChange={handleChange}
        placeholder="Video URL"
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddMovieForm;
