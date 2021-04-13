import React, { useEffect, useRef } from "react";
import classes from "./Search.module.scss";
import { connect } from "react-redux";
import { IoArrowBackOutline } from "react-icons/io5";
import * as actions from "../../store/actions/index";
import SearchDropdown from "../SearchDropdown/SearchDropdown";

function Search({
  searchList,
  query,
  searchResults,
  onMovieSearch,
  onSetQuery,
  onResetSearchList,
  show,
  toggleSearch,
}) {
  const initialRender = useRef(true);
  const searchInput = useRef();
  let timer = null;

  const setTimer = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      onSetQuery(e.target.value);
    }, 250);
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setTimer(e);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }
    if (query.length === 0) {
      onResetSearchList();
    }
    if (query.trim().length > 0) {
      onMovieSearch(query);
    }
  }, [query, onMovieSearch, onResetSearchList]);

  const onClickBackArrow = () => {
    toggleSearch();
    searchInput.current.value = "";
    onResetSearchList();
  };

  return (
    <div
      style={{
        transform: show ? "translateX(0)" : "translateX(100vw)",
        opacity: show ? "1" : "0",
      }}
      className={classes.SearchContainer}
    >
      {" "}
      <div
        onClick={onClickBackArrow}
        className={`${classes.IconContainer} ${classes.Back}`}
      >
        <IoArrowBackOutline className={classes.Icon} />
      </div>
      <div className={classes.Input}>
        <input
          ref={searchInput}
          type="text"
          className={classes.SearchInput}
          placeholder="Search for a movie..."
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <SearchDropdown
        searchResults={searchResults}
        searchList={searchList}
        showSearchToggler={toggleSearch}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchList: state.searchList,
    query: state.query,
    searchResults: state.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMovieSearch: (query) => dispatch(actions.movieSearch(query)),
    onSetQuery: (query) => dispatch(actions.setQuery(query)),
    onResetSearchList: () => dispatch(actions.resetSearchList()),
    toggleSearch: () => dispatch(actions.toggleSearch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
