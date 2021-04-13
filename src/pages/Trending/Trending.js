import React from "react";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import { connect } from "react-redux";
import axios from "../../axios";
import withErrorHandler from "../../components/hoc/withErrorHandling/withErrorHandler";
import classes from "./Trending.module.scss";
import SearchButton from "../../components/UI/SearchButton/SearchButton";
import Search from "../../components/Search/Search";
import Error from "../../components/UI/Error/Error";

export const Trending = (props) => {
  const { popular, error, showSearch } = props;

  return (
    <div className={classes.Container}>
      {error ? (
        <Error />
      ) : (
        <>
          <SearchButton type={"web"} />
          <Search show={showSearch} />
          <MovieCarousel movies={popular} title="trending" />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    popular: state.movies.popular,
    showSearch: state.showSearch,
  };
};

export default connect(mapStateToProps)(withErrorHandler(Trending, axios));
