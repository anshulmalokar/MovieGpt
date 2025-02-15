import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

interface MovieState {
  nowPlayingMovies: Movie[] | null;
  upcomingMovies: Movie[] | null,
  popularMovies: Movie[] | null,
  topRatedMovies: Movie[] | null,
  suggestionMovies: Movie[] | null
}

const initialState: MovieState = {
  nowPlayingMovies: null,
  upcomingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  suggestionMovies: null
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
    addUpcomingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.upcomingMovies = action.payload;
    },
    addPopularMovies: (state, action: PayloadAction<Movie[]>) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action: PayloadAction<Movie[]>) => {
      state.topRatedMovies = action.payload;
    },
    addSuggestionMovies: (state, action: PayloadAction<Movie[]>) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addUpcomingMovies, addPopularMovies, addTopRatedMovies, addSuggestionMovies } = movieSlice.actions;
export default movieSlice.reducer;
