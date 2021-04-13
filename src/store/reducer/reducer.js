import * as actionTypes from "../actions/actionTypes";

const initState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  movies: {
    popular: [],
    upcoming: [],
    latest: [],
  },
  movieDetails: {},
  similar: [],
  searchList: [],
  searchResults: null,
  query: "",
  error: null,
  showSearch: false,
  showNav: false,
  movieCast: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          popular: action.popularMovieList,
        },
        error: null,
      };
    case actionTypes.GET_POPULAR_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.GET_UPCOMING_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          upcoming: action.upcomingMovieList,
        },
        error: null,
      };
    case actionTypes.GET_UPCOMING_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.GET_LATEST_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.GET_LATEST_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          latest: action.latestMovieList,
        },
        error: null,
      };
    case actionTypes.ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [action.movie, ...state.watchlist],
      };
    case actionTypes.REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.id !== action.id),
      };
    case actionTypes.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.movieDetails,
        error: null,
      };
    case actionTypes.GET_SIMILAR_MOVIES_SUCCESS:
      return {
        ...state,
        similar: action.similar,
      };
    case actionTypes.GET_SIMILAR_MOVIES_FAILED:
      return {
        ...state,
        error: action.error,
      };

    case actionTypes.GET_MOVIE_DETAILS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.MOVIE_DETAILS_RESET:
      return {
        ...state,
        movieDetails: action.movieDetails,
      };
    case actionTypes.MOVIE_SEARCH_SUCCESS:
      return {
        ...state,
        searchList: action.searchList,
        searchResults: action.searchResults,
        error: null,
      };
    case actionTypes.MOVIE_SEARCH_FAILED:
      return {
        ...state,
        searchList: [],
        error: action.error,
      };
    case actionTypes.SET_QUERY:
      return {
        ...state,
        query: action.query,
      };
    case actionTypes.RESET_SEARCH_LIST:
      return {
        ...state,
        searchList: action.searchList,
      };
    case actionTypes.TOGGLE_SEARCH:
      return {
        ...state,
        showSearch: !state.showSearch,
      };
    case actionTypes.TOGGLE_NAV:
      return {
        ...state,
        showNav: !state.showNav,
      };
    case actionTypes.GET_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        movieCast: action.movieCast,
      };
    default:
      return state;
  }
};

export default reducer;
