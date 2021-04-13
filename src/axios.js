import axios from "axios";
require("dotenv").config();

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
});

export default instance;
