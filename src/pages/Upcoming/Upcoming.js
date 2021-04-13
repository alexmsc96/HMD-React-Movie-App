import React from "react";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import { connect } from "react-redux";
import axios from "../../axios";
import withErrorHandler from "../../components/hoc/withErrorHandling/withErrorHandler";
import classes from "./Upcoming.module.scss";
import Error from "../../components/UI/Error/Error";
import SearchButton from "../../components/UI/SearchButton/SearchButton";
import Search from "../../components/Search/Search";

export const Upcoming = (props) => {
  const { upcoming, error, showSearch } = props;

  return (
    <div className={classes.Container}>
      {error ? (
        <Error />
      ) : (
        <React.Fragment>
          <SearchButton type={"web"} />
          <Search show={showSearch} />
          <MovieCarousel movies={upcoming} title="upcoming" />
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    upcoming: state.movies.upcoming,
    showSearch: state.showSearch,
  };
};

export default connect(mapStateToProps)(withErrorHandler(Upcoming, axios));
