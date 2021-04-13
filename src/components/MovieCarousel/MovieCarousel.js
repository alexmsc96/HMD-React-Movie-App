import React from "react";

import MovieCard from "../MovieCard/MovieCard";

import classes from "./MovieCarousel.module.scss";
import axios from "../../axios";
import withErrorHandler from "../hoc/withErrorHandling/withErrorHandler";

function MovieCarousel({ movies, title, error }) {
  let movieCards = <p>Loading...</p>;

  if (movies) {
    movieCards = movies.map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          movieTitle={movie.title}
          moviePosterPath={movie.poster_path}
          voteAverage={movie.vote_average}
          overview={movie.overview}
          releaseDate={movie.release_date}
        />
      );
    });
  }

  return (
    <div className={classes.Container}>
      {error ? (
        <p>Something went wrong</p>
      ) : (
        <>
          <h1 className={classes.Title}>{title} Movies</h1>
          <div className={classes.MovieCarousel}>{movieCards}</div>
        </>
      )}
    </div>
  );
}

export default withErrorHandler(MovieCarousel, axios);
