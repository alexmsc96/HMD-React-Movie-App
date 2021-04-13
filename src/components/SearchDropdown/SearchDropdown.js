import React from "react";
import classes from "./SearchDropdown.module.scss";
import { Link } from "react-router-dom";
import VoteAvg from "../VoteAvg/VoteAvg";

function SearchDropdown({ searchList, searchResults, showSearchToggler }) {
  const posterUrl = "https://image.tmdb.org/t/p/w92";

  let dropdown =
    searchList.length > 0 ? (
      <div className={classes.Dropdown}>
        <ul>
          {searchList.map((movie) => (
            <Link
              onClick={showSearchToggler}
              to={`/movie/${movie.id}`}
              key={movie.id}
              className={classes.ListItems}
            >
              <div className={classes.Link}>
                {movie.poster_path ? (
                  <img src={posterUrl + movie.poster_path} alt={movie.title} />
                ) : (
                  <div className={classes.Poster}>
                    <h1>{movie.title}</h1>
                  </div>
                )}

                <div className={classes.SearchText}>
                  <h1>{movie.title}</h1>
                  <p>{movie.release_date.slice(0, 4)}</p>
                </div>
                <VoteAvg
                  style={{
                    bottom: "0",
                    right: "0",
                    position: "absolute",
                    margin: "1rem",
                  }}
                  voteAvg={movie.vote_average}
                />
              </div>
            </Link>
          ))}
        </ul>
      </div>
    ) : searchResults === 0 ? (
      <div className={classes.Dropdown}>
        <ul>
          <p className={classes.NoRes}>No results...</p>
        </ul>
      </div>
    ) : undefined;

  return <>{dropdown}</>;
}

export default SearchDropdown;
