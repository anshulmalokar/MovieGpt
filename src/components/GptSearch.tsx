import GptMovieSuggestion from "./GptMovieSuggestion";

type Props = {}

export default function GptSearch({}: Props) {
  return (
    <>
      <div className="bg-black h-screen w-screen absolute top-0 left-0 -z-10">
        {/* {movieSuggestions === null ?
         <GptSearchBar/> : <GptMovieSuggestion/> } */}
          <GptMovieSuggestion/>
      </div>
    </>
  )
}