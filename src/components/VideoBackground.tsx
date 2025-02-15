import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { Video } from "../types/Video";

type Props = {
  id: String;
  children: ReactNode;
};

export default function VideoBackground({ id, children }: Props) {
  const [key, setKey] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  async function callApi() {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_Read_Access_Token}`,
      },
    };
    const response = await axios.get(url, options);
    // @ts-ignore
    const videoArr: Video[] = response.data.results;
    const video = videoArr.find((video) => video.type === "Teaser");
    if (video !== undefined) {
      setKey(video?.key);
      setVideoUrl(
        `https://www.youtube.com/embed/${key}?autoplay=1&loop=1&mute=1&controls=0&playlist=${key}`
      );
    }else{
      setKey(videoArr[0].key);
      setVideoUrl(
        `https://www.youtube.com/embed/${key}?autoplay=1&loop=1&mute=1&controls=0&playlist=${key}`
      );
    }
  }

  useEffect(() => {
    callApi();
  }, [key]);

  if (!videoUrl) {
    return <></>;
  }

  return (
    <div className="absolute top-0 left-0 -z-10">
      <iframe
        className="w-full h-screen absolute top-0 left-0 z-0 aspect-video"
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Background Video"
      />
      <div className="relative z-10 text-white">{children}</div>
    </div>
  );
}
