import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tranding: [],
  detail: [],
  popular: [],
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
  },
});

export const { setTrandingMovie, setDetailMovie, setPopular } =
  movieSlice.actions;

export default movieSlice.reducer;
