import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";

import style from "./Card.module.css";

const _selectImage = title => {
  switch (title) {
    case "About":
      return style.about;
    case "Research":
      return style.research;
    case "Outreach":
      return style.outreach;
    case "Photography":
      return style.photography;
  }
};
const Card = ({ title, path }) => (
  <Link to={path}>
    <div
      className={css`
        position: relative;
        margin: 1em 0;
        @media (min-width: 768px) {
          margin: 1em;
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
          bottom: 10px;
          text-align: center;
          z-index: 2;
        `}
      >
        <h2
          className={css`
            color: white;
            text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.9);
            font-size: 2.5em;
            @media (min-width: 950px) {
              font-size: 3em;
            }
          `}
        >
          {title}
        </h2>
      </div>
      <div className={_selectImage(title)} />
    </div>
  </Link>
);

export default Card;
