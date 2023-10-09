// import React, { useRef } from "react";
// import lang from "../utils/languageConstant";
// import { useSelector } from "react-redux";
// import openai from "../utils/openai";
// const GptSearchBar = () => {
//   const searchtext = useRef(null);
//   const gptTextChange = useSelector((store) => store.config.lang);
//   const handlegptsearchclick = async () => {
//     console.log(searchtext.current.value);
//     //Make an api call to gpt and get movie results,returns a promise ,so use async for await
//     //calling open ai apis from client side not server side can lead to secrecy loss
//     const gptQuery =
//       "Act as a Movie recomedation system and suggest some movies for the query" +
//       searchtext.current.value +
//       ".only give me names of 5 movies,comma seperated like the example result given ahead.Example Result:SSE,KGF,KGF 2,Uppi,Super";
//     const gptresults = await openai.chat.completions.create({
//       messages: [{ role: "user", content: { gptQuery } }],
//       model: "gpt-3.5-turbo",
//     });
//     console.log(gptresults.choices);

//     // if (!gptresults.choices)
//     //   console.log(gptresults.choices?.[0]?.message?.content);
//     // const gptMovieLists = gptresults.choices?.[0]?.message?.content.split(",");
//   };
//   return (
//     <div className="pt-[10%] flex justify-center ">
//       <form
//         className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <input
//           ref={searchtext}
//           type="text"
//           className="p-4 m-4 col-span-9 rounded-lg text-black"
//           placeholder={lang[gptTextChange].gptSearchPlaceholder}
//         />
//         <button
//           onClick={handlegptsearchclick}
//           className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 "
//         >
//           {lang[gptTextChange].search}
//         </button>
//       </form>
//     </div>
//   );
// };
import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai"; // Make sure you import the OpenAI library correctly
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieresult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchtext = useRef(null);
  const dispatch = useDispatch();
  const gptTextChange = useSelector((store) => store.config.lang);
  //search movie in tmdb
  const searchmovietmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
    //take time ,not happen immediately,so promise is returned
  };
  const handlegptsearchclick = async () => {
    console.log(searchtext.current.value);

    // Construct the gptQuery correctly
    const userQuery = searchtext.current.value;
    const gptQuery = `Act as a Movie recommendation system and suggest some movies for the query "${userQuery}". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: SSE, KGF, KGF 2, Uppi, Super`;

    try {
      const gptresults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(gptresults.choices?.[0]?.message?.content);
      const gptMovies = gptresults.choices?.[0]?.message?.content.split(",");
      const promisearray = gptMovies.map((movie) => searchmovietmdb(movie));
      //Here we will not get movie instead for each movie promise is retrned
      const tmdbresults = await Promise.all(promisearray);
      console.log(tmdbresults);
      dispatch(
        addGptMovieresult({ movieNames: gptMovies, movieResults: tmdbresults })
      );
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          type="text"
          className="p-4 m-4 col-span-9 "
          placeholder={lang[gptTextChange].gptSearchPlaceholder}
        />
        <button
          onClick={handlegptsearchclick}
          className="col-span-3 m-3 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[gptTextChange].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
