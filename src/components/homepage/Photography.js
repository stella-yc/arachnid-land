import React from "react";
// import { Link } from "gatsby";
import { css } from "emotion";

import photographyPhoto from "../../img/photography.jpg";

const Photography = ({ siteTitle }) => (
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
    <div
      className={css`
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: 100px;
        text-align: center;
      `}
    >
      <h2
        className={css`
          color: white;
          font-size: 3em;
        `}
      >
        Photography
      </h2>
    </div>

    <div
      className={css`
        display: block;
      `}
    >
      <img
        src={photographyPhoto}
        alt="jumping spider"
        className={css`
          width: 100%;
          height: auto;
          margin: 0;
          display: inline-block;
        `}
      />
    </div>
  </div>
);

export default Photography;
