import classes from "./Error.module.scss";
import React from "react";

function Error() {
  return (
    <div>
      <h1 className={classes.Error}>
        Something is wrong with the server or with your connection!
      </h1>
    </div>
  );
}

export default Error;
