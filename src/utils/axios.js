import axios from "axios";

export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const axiosTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY
  },
});
