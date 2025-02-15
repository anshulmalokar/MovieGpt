import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar"
import { RootState } from "../utils/store";
import GptMovieSuggestion from "./GptMovieSuggestion";

type Props = {}

export default function GptSearch({}: Props) {
  const movieSuggestions = useSelector((state: RootState) => state.movies.suggestionMovies);
  return (
    <>
      <div className="bg-black h-screen w-screen absolute top-0 left-0">
        {movieSuggestions === null ? <GptSearchBar/> : <GptMovieSuggestion/> }
      </div>
    </>
  )
}