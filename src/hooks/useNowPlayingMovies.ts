import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import axios from "axios";

export default function useNowPlayingMovies() {
  const dispatch = useDispatch();
  const callApi = async () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_Read_Access_Token}`,
        Accept: "application/json",
      },
    });
    // @ts-ignore
    const movie: Movie[] = res.data.results;
    dispatch(addNowPlayingMovies(movie));
  };

  useEffect(() => {
    callApi();
  }, []);
}
