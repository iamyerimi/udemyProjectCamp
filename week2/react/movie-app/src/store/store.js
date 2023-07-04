import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../store/movieSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
