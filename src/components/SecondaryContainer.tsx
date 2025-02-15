import { useSelector } from "react-redux";
import { RootState } from "../utils/store";
import MovieList from "./MovieList";
import { Movie } from "../utils/movieSlice";

type Props = {};

export default function SecondaryContainer({}: Props) {
  const upcomingMovies: Movie[] | null = useSelector(
    (state: RootState) => state.movies.upcomingMovies
  );
  const nowPlayingMovie: Movie[] | null = useSelector(
    (state: RootState) => state.movies.nowPlayingMovies
  );
  const topRatedMovies: Movie[] | null = useSelector(
    (state: RootState) => state.movies.topRatedMovies
  );
  const popularMovies: Movie[] | null = useSelector(
    (state: RootState) => state.movies.popularMovies
  );
  return (
    <>
      <div className="h-full bg-black">
        <MovieList title="Upcoming" movie={upcomingMovies}/>
        <MovieList title="Now Playing" movie={nowPlayingMovie}/>
        <MovieList title="Top Rated" movie={topRatedMovies}/>
        <MovieList title="Popular" movie={popularMovies}/>
      </div>
    </>
  );
}
