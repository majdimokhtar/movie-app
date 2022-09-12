import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {axiosTMDB ,API_KEY} from "../utils/axios"




const initialState = {
  movies: [],
  shows: [],
  selectMovieOrShow: [],
  isLoading: true,
  favourite: JSON.parse(localStorage.getItem("favouriteMovies")) ?? [],
};


export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchAsyncShows",
  async (search) => {
    try {
      const {data} = await axiosTMDB.get(
        `search/tv?api_key=${API_KEY}&query=${search}`
      );
      return data.results;
    } catch (error) {
      alert(error.message)
    }

  }
);

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (search) => {
    try {
      const {data} = await axiosTMDB.get(
        `search/movie?api_key=${API_KEY}&query=${search}`
      );
      return data.results;
    } catch (error) {
      alert(error.message)
    }

  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    try {
      const response = await axiosTMDB.get(`tv/${id}`);
      return response.data;
    } catch (error) {
      alert(error)
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
      removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = [];
    },
    // action to add movies to favourite array
    addToFavourite: (state, { payload }) => {
      const { id } = payload
      if (!state[id]) {
        state[id] = []
        state.favourite.push(payload);
        localStorage.setItem("favouriteMovies", JSON.stringify(state.favourite));
      }
    },
    // action to remove movies from favourite array
    removeFromFavourite: (state, { payload }) => {
      state.favourite = state.favourite.filter(
        ({ id }) => id !== payload
      );
      localStorage.setItem("favouriteMovies", JSON.stringify(state.favourite));
    },
},

  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow,addToFavourite,removeFromFavourite } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export const getAllFavourite = (state) => state.movies.favourite;
export default movieSlice.reducer;