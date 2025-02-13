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
}

const initialState: MovieState = {
  nowPlayingMovies: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;
