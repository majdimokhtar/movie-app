import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.slice";
import moviesReducer from "./show.slice"
import wishListReducer from "./wishList.slice"

const rootReducer = {
  theme: themeReducer,
  movies: moviesReducer,
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
