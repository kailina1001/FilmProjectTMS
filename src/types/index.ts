export interface Imovie {
  id: number;
  title: string;
  year: number;
  released: string;
  runtime: string;
  genre: string[];
  director: string;
  writer: string;
  actors: string[];
  plot: string;
  country: string;
  poster: string;
  imdbRating: number;
  imdbVotes: number;
  type: string;
  boxOffice: string;
  production: string;
}

export interface Itrailer {
  trailer: string;
  description: string;
}

export interface ISettingsSort {
  title: string;
  field: string;
  isActive: boolean;
}
