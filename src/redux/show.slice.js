import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {axiosTMDB ,API_KEY} from "../utils/axios"

export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchAsyncShows",
  async () => {
    const showText = "Harry";
    const {data} = await axiosTMDB.get(
      `search/tv?api_key=${API_KEY}&query=${showText}`
    );
    return data.results;
  }
);

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "The Shawshank Redemption";
    const {data} = await axiosTMDB.get(
      `search/movie?api_key=${API_KEY}&query=${movieText}`
    );
    return data.results;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await axiosTMDB.get(`tv/${id}`);
    // https://api.themoviedb.org/3/tv/92783?api_key=03b900a103e6ee9dfe7235ac26ad315b

    // await axiosTMDB.get(`?apiKey=${MovieApiKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectMovieOrShow: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
      removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = [];
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

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;