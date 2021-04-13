import classes from "./Collection.module.scss";
import React from "react";
import { connect } from "react-redux";
import SearchButton from "../../components/UI/SearchButton/SearchButton";
import Search from "../../components/Search/Search";
import MovieCard from "../../components/MovieCard/MovieCard";

export const Collection = ({ watchlist, showSearch }) => {
  let movieList = watchlist.map((movie) => {
    return (
      <MovieCard
        type="general"
        key={movie.id}
        movieId={movie.id}
        movieTitle={movie.title}
        moviePosterPath={movie.posterPath}
        voteAverage={movie.voteAverage}
        overview={movie.overview}
        releaseDate={movie.releaseDate}
      />
    );
  });

  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>My Collection</h1>
      <SearchButton type={"web"} />
      <Search show={showSearch} />
      {watchlist.length > 0 ? (
        <div className={classes.MovieCarousel}>{movieList}</div>
      ) : (
        <div className={classes.NoMovie}>
          <h1>No movies in your collection.</h1>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    watchlist: state.watchlist,
    showSearch: state.showSearch,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
