export interface MovieDTO {
  id: string;
  title: string;
  description: string;
  year: number;
  country: string;
  rating: number;
  genres: string[];
  actors: string[];
  imageUrl: string;
  videoUrl: string;
}

export type MovieFilters = {
  yearMin?: number;
  yearMax?: number;
  country?: string;
  ratingMin?: number;
  ratingMax?: number;
  genre?: string;
  actor?: string;
};
