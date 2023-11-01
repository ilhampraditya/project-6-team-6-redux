import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tranding: [],
  detail: [],
  popular: [],
  search: [],
  popularMovie: [],
  trailer: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setTrandingMovie: (state, action) => {
      state.tranding = action.payload;
    },
    setDetailMovie: (state, action) => {
      state.detail = action.payload;
    },
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    setTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { setTrandingMovie, setDetailMovie, setPopular, setSearch, setPopularMovie, setTrailer } =
  movieSlice.actions;

export default movieSlice.reducer;
