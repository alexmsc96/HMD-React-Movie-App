import classes from "./MovieCard.module.scss";
import { Link } from "react-router-dom";
import React from "react";
import MovieControls from "../MovieControls/MovieControls";
import VoteAvg from "../VoteAvg/VoteAvg";

function MovieCard({
  movieId,
  movieTitle,
  moviePosterPath,
  voteAverage,
  overview,
  releaseDate,
}) {
  const posterUrl = "https://image.tmdb.org/t/p/w342";

  const movie = {
    id: movieId,
    title: movieTitle,
    posterPath: moviePosterPath,
    voteAverage,
    overview: overview,
    releaseDate: releaseDate,
  };

  return (
    <div className={classes.CardContent}>
      <div className={classes.CardPoster}>
        <Link to={`/movie/${movieId}`}>
          <img src={posterUrl + moviePosterPath} alt={movieTitle} />
        </Link>
        <MovieControls
          style={{ position: "absolute", top: "0", right: "0" }}
          movie={movie}
          cardType="small"
        />
        <VoteAvg
          style={{ top: "0", left: "0", position: "absolute", margin: "1rem" }}
          voteAvg={movie.voteAverage}
        />
      </div>
      <div className={classes.CardText}>
        <h1>{movie.title}</h1>
        <p>{movie.releaseDate.slice(0, 4)}</p>
      </div>
    </div>
  );
}

export default MovieCard;
