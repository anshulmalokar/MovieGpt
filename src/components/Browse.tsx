import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovies";
import useTopRateMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { RootState } from "../utils/store";
import GptSearch from "./GptSearch";

type Props = {};

export default function Browse({}: Props) {
  const toggle = useSelector((state: RootState) => state.toggle.value);
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRateMovies();
  usePopularMovie();
  return (
    <>
      <Header />
      {toggle === 1 ? (
        <GptSearch />
      ) : (
        <div>
          <MainContainer />
          <div className="z-10">
            <SecondaryContainer />
          </div>
        </div>
      )}
    </>
  );
}
