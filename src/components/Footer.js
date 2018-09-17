import React from "react";
import { css } from "emotion";

const SocialLink = ({ link, label, children }) => (
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
      `}
      href={link}
      rel="noreferrer noopener"
      target="_blank"
    >
      {label}
    </a>
  </li>
);
const Footer = ({ data, siteTitle }) => (
  <div
    className={css`
      margin: 1em 0 0 0;
      width: 100%;
      height: 19vh;
      padding: 1.7em 0 0 0;
      text-align: center;
      background-color: #ebebe0;
    `}
  >
    <ul className={css``}>
      <SocialLink link="https://twitter.com/spiderdayNight" label="Twitter" />

      <SocialLink
        link="https://www.instagram.com/spiderdaynightlive/"
        label="Instagram"
      />
      <SocialLink
        link="https://www.flickr.com/photos/saecheverri/"
        label="Flickr"
      />
    </ul>

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
