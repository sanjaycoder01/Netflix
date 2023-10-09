import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
  const dispatch = useDispatch();
  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addHorrorMovies(json.results));
  };
  useEffect(() => {
    getHorrorMovies();
  }, []);
  //   return (
  //     <div>useNowPlayingMovies</div>
  //   )
};

export default useHorrorMovies;
