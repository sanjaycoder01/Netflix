import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptPage";
import { useSelector } from "react-redux";
const Browse = () => {
  // const dispatch = useDispatch();
  // const getNowPlayingMovies = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/now_playing?page=1",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   console.log(json.results);
  //   dispatch(addNowPlayingMovies(json.results));
  // };
  // useEffect(() => {
  //   getNowPlayingMovies();
  // }, []);

  //This code puts the movies lost in the store by fetching the movies list from TMDB api
  //we will put the code in custom hook
  useNowPlayingMovies();
  usePopularMovies();
  useHorrorMovies();
  useUpcomingMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
        //Wrap it in a react fragment if you have to render two componenets,if it is one component no need of react fragment
      }
      {/*
        Main container
        videobg
        video title
      Secondary 
        Movielist*n
          cards*n
      */}
    </div>
  );
};

export default Browse;
