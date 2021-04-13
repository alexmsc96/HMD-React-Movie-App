import React from "react";
import classes from "./SearchButton.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

function SearchButton({ toggleSearch, type }) {
  return (
    <>
      {type === "mobile" && (
        <div
          onClick={() => toggleSearch()}
          className={classes.MobileIconContainer}
        >
          <IoSearchOutline className={classes.Icon} />
        </div>
      )}
      {type === "web" && (
        <div
          onClick={() => toggleSearch()}
          className={classes.WebIconContainer}
        >
          <IoSearchOutline className={classes.Icon} />
        </div>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSearch: () => dispatch(actions.toggleSearch()),
  };
};

export default connect(null, mapDispatchToProps)(SearchButton);
