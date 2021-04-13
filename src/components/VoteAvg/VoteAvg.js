import React from "react";
import classes from "./VoteAvg.module.scss";

function VoteAvg({ voteAvg, style }) {
  return (
    <div style={style} className={classes.VoteAvg}>
      <p>{voteAvg === 0 ? "n/a" : voteAvg}</p>
    </div>
  );
}

export default VoteAvg;
