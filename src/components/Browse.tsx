import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovies";
import useTopRateMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

type Props = {};

export default function Browse({}: Props) {
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRateMovies();
  usePopularMovie();
  return (
    <>
      <div>
        <Header /> 
        <MainContainer/>
        <div className="z-10">
          <SecondaryContainer/>
        </div>
      </div>
    </>
  );
}
