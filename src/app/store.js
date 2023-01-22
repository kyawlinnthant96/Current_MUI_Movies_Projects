import { configureStore } from "@reduxjs/toolkit";
import genreIdOrCategoryReducer from "../features/currentGenreOrCategory";

export default configureStore({
  reducer: {
    currentGenreOrCategory: genreIdOrCategoryReducer,
  },
});
