import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addTrailerVideo } from "../utils/moviesSlice";

//fetch trailer video
const VideoBackground = ({ movieId }) => {
  const getTrailerVideo = useSelector((state) => state.movies?.trailerVideo);
  // const [trailerId, setTrailerId] = useState(null);
  // const getMovieVideos = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/1008042/videos?language=en-US",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   const trailerTwice = json.results.filter(
  //     (video) => video.type == "Trailer"
  //   );
  //   console.log(trailerTwice);
  //   const trailer = trailerTwice.length ? trailerTwice[0] : json.results[0];
  //   //if trailertwice is 0 that is if there is no trailer then take the first video
  //   console.log(trailer);
  //   dispatch(addTrailerVideo(trailer));
  // };
  // useEffect(() => {
  //   getMovieVideos();
  // }, []);
  useMovieTrailer({ movieId });
  return (
    <div className="">
      {/* <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          getTrailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          getTrailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
