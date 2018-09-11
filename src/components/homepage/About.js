import React from "react";
import { css } from "emotion";
import styled from "react-emotion";

import blurbPhoto from "../../images/sebastian-about.jpg";
const About = ({ siteTitle }) => (
  <div
    id="blurb"
    className={css`
      margin: 0 auto;
      padding: 1em 3em;
      max-width: 960px;
      background-color: #eafbf9;
    `}
  >
    <div
      className={css`
        margin: 0 auto;
      `}
    >
      <h2>About Me</h2>
      <p>
        I am interested in how animals perceive the world around them, and how
        this shapes their behavior. Currently I am a PhD student at the
        University of Pittsburgh. I grew up in Forest Hills, New York City, and
        I like spiders.
      </p>
    </div>
  </div>
);

export default About;
