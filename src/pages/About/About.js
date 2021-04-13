import classes from "./About.module.scss";
import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

function About() {
  return (
    <div className={classes.About}>
      <h1>About</h1>
      <p>Contact me:</p>
      <div className={classes.Contact}>
        <IoLogoGithub className={classes.Icon} />
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://github.com/alexmsc96"
        >
          @alexmsc96
        </a>
      </div>
      <div className={classes.Contact}>
        <IoLogoLinkedin className={classes.Icon} />
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://www.linkedin.com/in/alexandrumuscina/"
        >
          Alexandru Muscina
        </a>
      </div>
    </div>
  );
}

export default About;
