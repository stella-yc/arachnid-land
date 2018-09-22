import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";

import researchPhoto from "../../img/research.jpg";

const Research = ({ siteTitle }) => (
  <div
    className={css`
      position: relative;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
      border: 1px solid #ccc;
      width: 100%;
      @media (min-width: 768px) {
        margin: 1em 0;
        width: 43vw;
      }
    `}
  >
    <Link to="/research/">
      <div
        className={css`
          position: absolute;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          top: 40px;
          text-align: center;
          @media (min-width: 768px) {
            top: 70px;
          }
        `}
      >
        <h2
          className={css`
            color: #2d2d2d;
            font-size: 3em;
          `}
        >
          Research
        </h2>
      </div>

      <div
        className={css`
          display: block;
        `}
      >
        <img
          src={researchPhoto}
          alt="jumping spider"
          className={css`
            width: 100%;
            height: auto;
            margin: 0;
            display: inline-block;
          `}
        />
      </div>
    </Link>
  </div>
);

export default Research;
