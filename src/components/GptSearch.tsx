import { useSelector } from "react-redux";
import { Movie } from "../utils/movieSlice";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { RootState } from "../utils/store";
import GptSearchBar from "./GptSearchBar";

type Props = {}

export default function GptSearch({}: Props) {
  const movieSuggestions: Movie[] |null = useSelector((state: RootState) => state.movies.suggestionMovies);
  if(movieSuggestions === null) return <></>
  console.log("Helllo")
  return (
    <>
      <div className="bg-black h-screen w-screen absolute top-0 left-0">
        {movieSuggestions === null ?
         <GptSearchBar/> : <GptMovieSuggestion/> }
      </div>
    </>
  )
}