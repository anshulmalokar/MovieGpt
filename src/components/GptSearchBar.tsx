import { useRef } from "react";
import { useDispatch } from "react-redux";
import { client } from "../utils/openApi";
import { addSuggestionMovies, Movie } from "../utils/movieSlice";
import axios from "axios";
import { MovieSuggestion } from "../types/MovieResults";
type Props = {};

export default function GptSearchBar({}: Props) {
  const dispatch = useDispatch();
  const prompt = useRef(null);
  const handleClick = async () => {
    if(prompt !== null){
      // @ts-ignore
      const promptVal = prompt.current.value
      const query = "Consider you're a Movie recomendation system"+
      ` Now please give me 10 movies which are ${promptVal} return the answer in `+
      `the following format [] basically in an array`
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content:  query}],
        model: 'gpt-4o',
      });
      const movieListString = chatCompletion.choices[0].message.content 
      || "";
      const movieArray: string[] = JSON.parse(movieListString);
      const moArr: Movie[] = [];
      movieArray.map(async (movie) => {
        const url = 'https://api.themoviedb.org/3/search/movie';
        const params = {
          query: movie, // Dynamically set the movie name
          include_adult: false,
          language: 'en-US',
          page: 1,
        };
      
        const headers = {
          'Authorization': `Bearer ${import.meta.env.VITE_API_Read_Access_Token}`,
          'Accept': 'application/json',
        };
        
        // @ts-ignore
        const res: MovieSuggestion = await axios.get(url, { params, headers });
        moArr.push(res.results[0]);
        dispatch(addSuggestionMovies(moArr));
      });
    }
  }

  return (
    <div className="flex h-full ">
      <form onSubmit={(e) => {
          e.preventDefault();
      }} className="p-6 rounded-lg w-screen flex items-center gap-2">
        <div className="flex-1">
          <input
            ref={prompt}
            type="text"
            name="search"
            placeholder="Search"
            className="p-4 w-[600px] ml-96 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
          />
        </div>
        <div>
          <button
            onClick={handleClick}
            type="submit"
            className="w-32 mr-96 p-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
