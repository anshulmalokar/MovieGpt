import MovieList from "./MovieList";

type Props = {};

export default function SecondaryContainer({}: Props) {
  return (
    <>
      <div className="h-full bg-black">
        <MovieList title="Now Playing" />
        <MovieList title="Top Rated" />
        <MovieList title="Popular" />
        <MovieList title="Upcoming" />
        <MovieList title="Trending" />
        <MovieList title="Action" />
      </div>
    </>
  );
}
