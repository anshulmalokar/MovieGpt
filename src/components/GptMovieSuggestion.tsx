import { useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { Movie } from "../utils/movieSlice";

type Props = {}

export default function GptMovieSuggestion({}: Props) {
  const movieSuggestions: Movie[] |null = useSelector((state: RootState) => state.movies.suggestionMovies);
  if(movieSuggestions === null) return <></>
  return (
    <div className="">
      {/* <Header/>
      {
        movieSuggestions.map((movie, kye) => <>
          <div key={kye}>
              <MovieCard
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            </div>
        </>)
      } */}
    </div>
  )
}