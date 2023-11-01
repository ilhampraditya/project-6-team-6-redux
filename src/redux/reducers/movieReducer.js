import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: [],
  popular: [],
  search: [],
  trailer: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setDetailMovie: (state, action) => {
      state.detail = action.payload;
    },
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { setDetailMovie, setPopular, setSearch, setTrailer } =
  movieSlice.actions;

export default movieSlice.reducer;
