import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptmovies: null,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieresult: (state, action) => {
      const { movieNames, movieResults } = (state.gptmovies = action.payload);
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});
export default gptSlice.reducer;
export const { toggleGptSearchView, addGptMovieresult } = gptSlice.actions;
