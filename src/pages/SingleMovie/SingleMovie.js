import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./SingleMovie.module.scss";
import * as actions from "../../store/actions/index";
import MovieControls from "../../components/MovieControls/MovieControls";
import VoteAvg from "../../components/VoteAvg/VoteAvg";
import axios from "../../axios";
import withErrorHandler from "../../components/hoc/withErrorHandling/withErrorHandler";
import Error from "../../components/UI/Error/Error";
import SearchButton from "../../components/UI/SearchButton/SearchButton";
import Search from "../../components/Search/Search";
import { IoArrowBackOutline } from "react-icons/io5";
import CastCarousel from "../../components/CastCarousel/CastCarousel";
import SimilarMoviesCarousel from "../../components/SimilarMoviesCarousel/SimilarMoviesCarousel";

export const SingleMovie = (props) => {
  const {
    movieDetails,
    onGetMovieDetails,
    onGetSimilarMovies,
    onMovieDetailsReset,
    error,
    onResetSearchList,
    onSetQuery,
    similar,
    showSearch,
    movieCast,
    onGetMovieCredits,
  } = props;

  useEffect(() => {
    onGetMovieDetails(props.match.params.id);
    onGetSimilarMovies(props.match.params.id);
    onGetMovieCredits(props.match.params.id);
    onResetSearchList();
    onSetQuery("");
    return () => {
      onMovieDetailsReset();
    };
  }, [
    onGetMovieDetails,
    props.match.params.id,
    onMovieDetailsReset,
    onSetQuery,
    onResetSearchList,
    onGetSimilarMovies,
    onGetMovieCredits,
  ]);

  let singleMovie = (
    <div className={classes.Spinner}>
      <Spinner />
    </div>
  );
  let genreList = [];

  const posterUrl = "https://image.tmdb.org/t/p/w342";
  const backdropUrl = "https://image.tmdb.org/t/p/original";

  if (movieDetails && movieDetails.genres) {
    genreList = movieDetails.genres.map((genre) => {
      return genre.name;
    });

    const movie = {
      id: movieDetails.id,
      title: movieDetails.title,
      posterPath: movieDetails.poster_path,
      voteAverage: movieDetails.vote_average,
      overview: movieDetails.overview,
      releaseDate: movieDetails.release_date,
    };

    singleMovie = (
      <div className={classes.SingleMovie}>
        <div
          style={{
            backgroundImage: `url(${backdropUrl}${movieDetails.backdrop_path})`,
          }}
          className={classes.Backdrop}
        >
          {movieDetails.backdrop_path ? null : (
            <h1 className={classes.Title}>{movieDetails.title}</h1>
          )}
          <div className={classes.InnerBackdrop}>
            <SearchButton type={"web"} />
            <Search show={showSearch} />
            <div className={`${classes.IconContainer} ${classes.Back}`}>
              <IoArrowBackOutline
                className={classes.Icon}
                onClick={props.history.goBack}
              />
            </div>
          </div>
        </div>
        <div className={classes.Poster}>
          <img
            className={classes.PosterImg}
            src={posterUrl + movieDetails.poster_path}
            alt={movieDetails.title}
          />
          <div className={`${classes.IconContainer} ${classes.Back}`}>
            <IoArrowBackOutline
              className={classes.Icon}
              onClick={props.history.goBack}
            />
          </div>
        </div>
        <div className={classes.Container}>
          <div className={classes.MovieHeading}>
            <h1>{movieDetails.title}</h1>
            <VoteAvg voteAvg={movie.voteAverage} />
            <MovieControls
              style={{ top: "0", right: "0" }}
              movie={movie}
              cardType="big"
            />
          </div>
          <div className={classes.MovieParagraph}>
            <p className={classes.GenreList}>{genreList}</p>
            <p>{movieDetails.overview}</p>
          </div>
          <div className={classes.MovieInfo}>
            <div>
              <h2>
                <span>Release Date</span>{" "}
              </h2>
              <p>{movieDetails.release_date.slice(0, 4)}</p>
            </div>
            <div>
              <h2>
                <span>Runtime</span>{" "}
              </h2>
              <p>{movieDetails.runtime} min</p>
            </div>
          </div>
        </div>
        <CastCarousel movieCast={movieCast} />
        <SimilarMoviesCarousel similar={similar} />
      </div>
    );
  }
  return error ? <Error /> : singleMovie;
};

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movieDetails,
    similar: state.similar,
    showSearch: state.showSearch,
    movieCast: state.movieCast,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMovieDetails: (id) => dispatch(actions.getMovieDetails(id)),
    onMovieDetailsReset: () => dispatch(actions.movieDetailReset()),
    onSetQuery: (query) => dispatch(actions.setQuery(query)),
    onResetSearchList: () => dispatch(actions.resetSearchList()),
    onGetSimilarMovies: (id) => dispatch(actions.getSimilarMovies(id)),
    onGetMovieCredits: (id) => dispatch(actions.getMovieCredits(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(SingleMovie, axios));
