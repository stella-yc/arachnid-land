import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";

import style from "./Outreach.module.css";

const Outreach = () => (
  <Link to="/outreach/">
    <div
      className={css`
        position: relative;
        margin: 1em 0;
      `}
    >
      <div
        className={css`
          position: absolute;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          bottom: 10px;
          text-align: center;
          z-index: 2;
        `}
      >
        <h2
          className={css`
            color: white;
            text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
            font-size: 2.5em;
            @media (min-width: 950px) {
              font-size: 3em;
            }
          `}
        >
          Outreach
        </h2>
      </div>
      <div className={style.icon} />
    </div>
  </Link>
);

export default Outreach;
