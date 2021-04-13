import React from "react";
import classes from "./SideNav.module.scss";
import Logo from "../UI/Logo/Logo";
import { IoCloseOutline } from "react-icons/io5";
import { IoTrendingUpOutline } from "react-icons/io5";
import { IoFlame } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";
import { IoFolderOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

function SideNav({ show, toggleNav }) {
  return (
    <>
      <div
        className={classes.MobileSideNav}
        style={{
          transform: show ? "translateX(0)" : "translateX(-100vw)",
          opacity: show ? "1" : "0",
        }}
      >
        <div className={classes.IconContainer}>
          <IoCloseOutline
            className={classes.Icon}
            onClick={() => toggleNav()}
          />
          <Logo />
        </div>
        <ul>
          <NavLink
            onClick={() => toggleNav()}
            activeClassName={classes.Active}
            to={`/trending`}
          >
            <div className={classes.LinkContent}>
              <IoTrendingUpOutline
                className={classes.LinkIcon}
                style={{ color: "#239d7f" }}
              />
              <h1>Trending Movies</h1>
            </div>
          </NavLink>
          <NavLink
            onClick={() => toggleNav()}
            activeClassName={classes.Active}
            to={`/new-releases`}
          >
            <div className={classes.LinkContent}>
              <IoFlame
                className={classes.LinkIcon}
                style={{ color: "#239d7f" }}
              />
              <h1>New Releases</h1>
            </div>
          </NavLink>
          <NavLink
            onClick={() => toggleNav()}
            activeClassName={classes.Active}
            to={`/coming-soon`}
          >
            <div className={classes.LinkContent}>
              <IoFlashOutline
                className={classes.LinkIcon}
                style={{ color: "#239d7f" }}
              />
              <h1>Coming Soon</h1>
            </div>
          </NavLink>
          <NavLink
            onClick={() => toggleNav()}
            activeClassName={classes.Active}
            to={"/my-collection"}
          >
            <div className={classes.LinkContent}>
              <IoFolderOutline
                className={classes.LinkIcon}
                style={{ color: "#239d7f" }}
              />
              <h1>My Collection</h1>
            </div>
          </NavLink>
          <NavLink
            onClick={() => toggleNav()}
            activeClassName={classes.Active}
            to={"/about"}
          >
            <div className={classes.LinkContent}>
              <IoInformationCircleOutline
                className={classes.LinkIcon}
                style={{ color: "#239d7f" }}
              />
              <h1>About</h1>
            </div>
          </NavLink>
        </ul>
      </div>
      <div className={classes.WebSideNav}>
        <ul>
          <NavLink activeClassName={classes.Active} to={`/trending`}>
            <div className={classes.LinkContent}>
              <IoTrendingUpOutline
                className={classes.LinkIcon}
                style={{ color: "#239d7f" }}
              />
              <h1>Trending Movies</h1>
            </div>
          </NavLink>
          <NavLink activeClassName={classes.Active} to={`/new-releases`}>
            <div className={classes.LinkContent}>
              <IoFlame
                className={classes.LinkIcon}
                style={{ color: "#239d7f" }}
              />
              <h1>New Releases</h1>
            </div>
          </NavLink>
          <NavLink activeClassName={classes.Active} to={`/coming-soon`}>
            <div className={classes.LinkContent}>
              <IoFlashOutline
                className={classes.LinkIcon}
                style={{ color: "#239d7f" }}
              />
              <h1>Coming Soon</h1>
            </div>
          </NavLink>
          <NavLink activeClassName={classes.Active} to={"/my-collection"}>
            <div className={classes.LinkContent}>
              <IoFolderOutline
                className={classes.LinkIcon}
                style={{ color: "#239d7f" }}
              />
              <h1>My Collection</h1>
            </div>
          </NavLink>
          <NavLink activeClassName={classes.Active} to={"/about"}>
            <div className={classes.LinkContent}>
              <IoInformationCircleOutline
                className={classes.LinkIcon}
                style={{ color: "#239d7f" }}
              />
              <h1>About</h1>
            </div>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNav: () => {
      dispatch(actions.toggleNav());
    },
  };
};

export default connect(null, mapDispatchToProps)(SideNav);
