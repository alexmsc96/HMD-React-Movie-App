import axios from "../../axios";
import * as actionTypes from "./actionTypes";

export const getPopularSuccess = (response) => {
  return {
    type: actionTypes.GET_POPULAR_SUCCESS,
    popularMovieList: response.data.results,
  };
};

export const getPopularFailed = (error) => {
  return {
    type: actionTypes.GET_POPULAR_FAILED,
    error: error,
  };
};

export const getPopular = () => {
  return (dispatch) => {
    axios
      .get("movie/popular")
      .then((response) => {
        dispatch(getPopularSuccess(response));
      })
      .catch((error) => {
        dispatch(getPopularFailed(error));
      });
  };
};

export const getUpcomingSuccess = (response) => {
  return {
    type: actionTypes.GET_UPCOMING_SUCCESS,
    upcomingMovieList: response.data.results,
  };
};

export const getUpcomingFailed = (error) => {
  return {
    type: actionTypes.GET_UPCOMING_FAILED,
    error: error,
  };
};

export const getUpcoming = () => {
  return (dispatch) => {
    axios
      .get("movie/upcoming")
      .then((response) => {
        dispatch(getUpcomingSuccess(response));
      })
      .catch((error) => {
        dispatch(getUpcomingFailed(error));
      });
  };
};

export const getLatestSuccess = (response) => {
  return {
    type: actionTypes.GET_LATEST_SUCCESS,
    latestMovieList: response.data.results,
  };
};

export const getLatestFailed = (error) => {
  return {
    type: actionTypes.GET_LATEST_FAILED,
    error: error,
  };
};

export const getLatest = () => {
  return (dispatch) => {
    axios
      .get(`movie/now_playing`)
      .then((response) => {
        dispatch(getLatestSuccess(response));
      })
      .catch((error) => {
        dispatch(getLatestFailed(error));
      });
  };
};

export const addMovieToWatchlist = (movie) => {
  return {
    type: actionTypes.ADD_MOVIE_TO_WATCHLIST,
    movie: movie,
  };
};

export const removeMovieFromWatchlist = (id) => {
  return {
    type: actionTypes.REMOVE_MOVIE_FROM_WATCHLIST,
    id: id,
  };
};

export const getMovieDetailsSuccess = (response) => {
  return {
    type: actionTypes.GET_MOVIE_DETAILS_SUCCESS,
    movieDetails: response.data,
  };
};

export const getMovieDetailsFailed = (error) => {
  return {
    type: actionTypes.GET_MOVIE_DETAILS_FAILED,
    error: error,
  };
};

export const getMovieDetails = (id) => {
  return (dispatch) => {
    axios
      .get(`/movie/${id}`)
      .then((response) => {
        dispatch(getMovieDetailsSuccess(response));
      })
      .catch((error) => {
        dispatch(getMovieDetailsFailed(error));
      });
  };
};

export const getSimilarMoviesSuccess = (response) => {
  return {
    type: actionTypes.GET_SIMILAR_MOVIES_SUCCESS,
    similar: response.data.results.slice(0, 11),
  };
};

export const getSimilarMoviesFailed = (error) => {
  return {
    type: actionTypes.GET_SIMILAR_MOVIES_FAILED,
    error: error,
  };
};

export const getSimilarMovies = (id) => {
  return (dispatch) => {
    axios
      .get(`/movie/${id}/similar`)
      .then((response) => {
        dispatch(getSimilarMoviesSuccess(response));
      })
      .catch((error) => {
        dispatch(getSimilarMoviesFailed(error));
      });
  };
};

export const movieDetailReset = () => {
  return {
    type: actionTypes.MOVIE_DETAILS_RESET,
    movieDetails: [],
  };
};

export const movieSearchSuccess = (response) => {
  return {
    type: actionTypes.MOVIE_SEARCH_SUCCESS,
    searchList: response.data.results.slice(0, 5),
    searchResults: response.data.total_results,
  };
};

export const movieSearchFailed = (error) => {
  return {
    type: actionTypes.MOVIE_SEARCH_FAILED,
    error: error,
  };
};

export const movieSearch = (query) => {
  return (dispatch) => {
    axios
      .get(`/search/movie?&query=${query}`)
      .then((response) => {
        dispatch(movieSearchSuccess(response));
      })
      .catch((error) => {
        dispatch(movieSearchFailed(error));
      });
  };
};

export const getMovieCreditsSuccess = (response) => {
  return {
    type: actionTypes.GET_MOVIE_CREDITS_SUCCESS,
    movieCast: response.data.cast.slice(0, 11),
  };
};

export const getMovieCreditsFailed = (error) => {
  return {
    type: actionTypes.GET_MOVIE_CREDITS_FAILED,
    error: error,
  };
};

export const getMovieCredits = (id) => {
  return (dispatch) => {
    axios
      .get(`/movie/${id}/credits`)
      .then((response) => {
        dispatch(getMovieCreditsSuccess(response));
      })
      .catch((error) => {
        dispatch(getMovieCreditsFailed(error));
      });
  };
};

export const setQuery = (query) => {
  return {
    type: actionTypes.SET_QUERY,
    query: query,
  };
};

export const resetSearchList = () => {
  return {
    type: actionTypes.RESET_SEARCH_LIST,
    searchList: [],
  };
};

export const toggleSearch = () => {
  return {
    type: actionTypes.TOGGLE_SEARCH,
  };
};

export const toggleNav = () => {
  return {
    type: actionTypes.TOGGLE_NAV,
  };
};
