import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

type Props = {};

export default function Browse({}: Props) {
  useNowPlayingMovies();
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
