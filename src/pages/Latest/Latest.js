import React from "react";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import { connect } from "react-redux";
import axios from "../../axios";
import withErrorHandler from "../../components/hoc/withErrorHandling/withErrorHandler";
import classes from "./Latest.module.scss";
import Error from "../../components/UI/Error/Error";
import SearchButton from "../../components/UI/SearchButton/SearchButton";
import Search from "../../components/Search/Search";

export const Latest = (props) => {
  const { latest, error, showSearch } = props;

  return (
    <div className={classes.Container}>
      {error ? (
        <Error />
      ) : (
        <React.Fragment>
          <SearchButton type={"web"} />
          <Search show={showSearch} />
          <MovieCarousel movies={latest} title="latest" />
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    latest: state.movies.latest,
    showSearch: state.showSearch,
  };
};

export default connect(mapStateToProps)(withErrorHandler(Latest, axios));
