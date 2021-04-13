import classes from "./MovieControls.module.scss";
import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import * as actions from "../../store/actions/index";

import { connect } from "react-redux";

function MovieControls({
  movie,
  onRemoveFromWatchlist,
  onAddToWatchlist,
  watchlist,
  cardType,
  style,
}) {
  let storedMovie = watchlist.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div style={style} className={classes.IconContainer}>
      {cardType === "small" && (
        <>
          {watchlistDisabled ? (
            <IoRemoveOutline
              className={classes.Icon}
              onClick={() => onRemoveFromWatchlist(movie.id)}
            />
          ) : (
            <IoAddOutline
              onClick={() => onAddToWatchlist(movie)}
              className={classes.Icon}
            />
          )}
        </>
      )}
      {cardType === "big" && (
        <>
          {watchlistDisabled ? (
            <IoRemoveOutline
              className={classes.Icon}
              onClick={() => onRemoveFromWatchlist(movie.id)}
            />
          ) : (
            <IoAddOutline
              onClick={() => onAddToWatchlist(movie)}
              className={classes.Icon}
            />
          )}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    watchlist: state.watchlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToWatchlist: (movie) => dispatch(actions.addMovieToWatchlist(movie)),
    onRemoveFromWatchlist: (id) =>
      dispatch(actions.removeMovieFromWatchlist(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieControls);
