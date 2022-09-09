import axios from "axios";

export const axiosTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "03b900a103e6ee9dfe7235ac26ad315b"
    
    // process.env.TMDB_API_KEY,
  },
});
