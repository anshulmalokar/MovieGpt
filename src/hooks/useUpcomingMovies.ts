import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import axios from "axios";

export default function useUpcomingMovies() {
  const dispatch = useDispatch();
  const callApi = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_Read_Access_Token}`,
        Accept: "application/json",
      },
    });
    // @ts-ignore
    const movie: Movie[] = res.data.results;
    dispatch(addUpcomingMovies(movie));
  };

  useEffect(() => {
    callApi();
  }, []);
}