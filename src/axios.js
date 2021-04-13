import axios from "axios";
require("dotenv").config();

const { REACT_APP_TMDB_KEY } = process.env;

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${REACT_APP_TMDB_KEY}`,
  },
});

export default instance;
