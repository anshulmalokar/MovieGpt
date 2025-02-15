import { useSelector } from "react-redux"
import { RootState } from '../utils/store';
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { Movie } from "../utils/movieSlice";

export default function MainContainer({}: {}) {
  const nowPlayingMovies = useSelector((state: RootState) => state.movies.nowPlayingMovies);
  let mainMovie: Movie;
  if(nowPlayingMovies === null){
    return <></>;
  }else{
    mainMovie = nowPlayingMovies[0];
    mainMovie.original_title;
  }
  return (
    <div className="h-[700px]">
        <VideoBackground id={mainMovie.id.toString()}>
            <VideoTitle title={mainMovie.original_title} description={mainMovie.overview} />
        </VideoBackground>
    </div>
  )
}