import React from "react";
import classes from "./BurgerMenu.module.scss";
import { IoMenuOutline } from "react-icons/io5";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

function BurgerMenu({ toggleNav }) {
  return <IoMenuOutline className={classes.Icon} onClick={() => toggleNav()} />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNav: () => dispatch(actions.toggleNav()),
  };
};

export default connect(null, mapDispatchToProps)(BurgerMenu);
