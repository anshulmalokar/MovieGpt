import { Movie } from "../utils/movieSlice";

export type MovieSuggestion = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
