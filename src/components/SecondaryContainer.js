import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
//Movie list
//popular,trending,now playing,

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" md:pl-5 pl-16 bg-black sm:pl-5 xs:pl-5">
        <div className=" -mt-72 z-30 relative xl:-mt-36 lg:-mt-32 md:-mt-0 sm:-mt-0 xs:-mt-0 xs:pb-16 xs:pt-10 hover:ring-blue-500">
          <MovieList title={"Old movies"} movies={movies.horrorMovies} />
          <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
