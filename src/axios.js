import axios from "axios";
<<<<<<< HEAD
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
=======

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json"
  },
>>>>>>> 48986b3b09a066acc9a878706e7e986a0e7c79ae
});

export default instance;
