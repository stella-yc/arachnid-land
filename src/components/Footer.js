import React from "react";
import { css } from "emotion";
import SocialLinks from "../SocialLinks";

const Footer = ({ data, siteTitle }) => (
  <div
    className={css`
      margin: 1em 0 0 0;
      width: 100%;
      height: 19vh;
      padding: 1.7em 0 0 0;
      text-align: center;
      background-color: hsla(0, 0%, 7%, 1);
    `}
  >
    <SocialLinks />

    <p
      className={css`
        margin-bottom: 0;
        font-size: 0.8em;
      `}
    >
      &#169; Sebastian Echeverri
    </p>
  </div>
);

export default Footer;
