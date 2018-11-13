import React from "react";
import { css } from "emotion";

const SocialLink = ({ link, label }) => (
  <li
    className={css`
      display: inline;
      padding: 0;
      margin: 0 1em 0 0;
      list-style-type: none;
    `}
  >
    <a
      className={css`
        text-decoration: none;
        color: #2d2d2d;
        border-bottom: 1px solid #2d2d2d;
        &:hover {
          color: #00cebe;
          border-bottom: 1px solid #00cebe;
        }
        &:visited {
          color: #2d2d2d;
          border-bottom: 1px solid #2d2d2d;
          &:hover {
            color: #00cebe;
            border-bottom: 1px solid #00cebe;
          }
        }
      `}
      href={link}
      rel="noreferrer noopener"
      target="_blank"
    >
      {label}
    </a>
  </li>
);

export default SocialLink;
