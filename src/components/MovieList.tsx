import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { Movie } from "../utils/movieSlice";
import MovieCard from "./MovieCard";

type Props = {
    title: String
};

export default function MovieList({title}: Props) {
  const nowPlayingMovies: Movie[] | null = useSelector(
    (state: RootState) => state.movies.nowPlayingMovies
  );

  // Create a ref for the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Function to handle the scroll to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Scroll by 200px (adjust as needed)
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  // Function to handle the scroll to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Scroll back by 200px
        behavior: "smooth", // Smooth scroll
      });
    }
  };
  if (nowPlayingMovies === null || nowPlayingMovies === undefined || nowPlayingMovies.length === 0) return <></>;
  return (
    <div>
      <h1 className="relative z-10 text-white ml-10 text-2xl font-bold">{title}</h1>
      <div className="relative px-4">
        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          &lt;
        </button>

        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          &gt;
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-1 overflow-x-scroll scrollbar-hide hover:scrollbar-visible"
        >
          {nowPlayingMovies?.map((movie, kye) => (
            <div key={kye} className="flex-shrink-0">
              <MovieCard
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
