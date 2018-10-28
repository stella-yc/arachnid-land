import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";

const HeaderLogo = ({ title }) => (
  <h1
    className={css`
      margin: 0;
      display: inline-block;

      @media (min-width: 420px) {
        margin-left: 1em;
        font-size: 1.1em;
      }
    `}
  >
    <Link
      to="/"
      className={css`
        color: #383838;
        text-decoration: none;
      `}
    >
      <span
        className={css`
          margin-right: 0.2em;
          margin-left: 0.2em;
          display: inline-block;
          font-size: 0.6em;
          background-color: black;
          color: white;
          padding: 0.3em;

          @media (min-width: 420px) {
            font-size: 1em;
          }
        `}
      >
        SAE
      </span>
      <span
        className={css`
          display: none;

          @media (min-width: 768px) {
            display: inline-block;
            font-size: 1em;
            margin-left: 0.5em;
          }

          @media (min-width: 972px) {
            display: inline-block;
            font-size: 1.2em;
            margin-left: 0.5em;
          }
        `}
      >
        {title}
      </span>
      {/*<span
        className={css`
          margin: 0 0 0 0.5em;
          color: #d6d6d6;
          font-size: 0.8em;
        `}
      >
        PhD
      </span>
      */}
    </Link>
  </h1>
);

export default HeaderLogo;
