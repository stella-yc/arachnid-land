import React from "react";
import { css } from "emotion";

import HeaderLogo from "./header-logo";
import HeaderLinks from "./header-links";
import HeaderMenu from "./header-menu";

const Header = ({ data, siteTitle }) => (
  <header
    className={css`
      background-color: white;
      border-bottom: 1px solid #ccc;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
      position: absolute;
      z-index: 1;
      top: 0;
      opacity: 0.95;
      width: 100%;
    `}
  >
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding: 0.5em;
      `}
    >
      <HeaderLogo title={siteTitle} />
      <HeaderMenu />
      <HeaderLinks data={data} />
    </div>
  </header>
);

export default Header;
