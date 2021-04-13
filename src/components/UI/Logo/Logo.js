import classes from "./Logo.module.scss";
import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className={classes.Logo}>
      <Link to="/" className={classes.LogoText}>
        HMD
      </Link>
    </div>
  );
}

export default Logo;
