import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";

const NavLink = ({ href, children }) => (
  <li
    className={css`
      list-style-type: none;
      width: 100%;
      height: 100%;
      margin: 0;
    `}
  >
    <Link
      to={href}
      className={css`
        display: block;
        color: #383838;
        padding: 1em 1.5em;
        width: 100%;
        text-decoration: none;
      `}
    >
      {children}
    </Link>
  </li>
);

const openBurger = css`
  visibility: visible;
  opacity: 1;
  transition: all 1s ease;
`;

const burgerMenu = css`
  visibility: hidden;
  opacity: 0;
  transition: opacity 1s ease;
  position: absolute;
  top: 57px;
  right: 0;
  z-index: 1;
  background-color: white;
  width: 50vw;
  opacity: 0.97;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  padding-bottom: 1em;
  box-shadow: -2px 3px 2px 2px rgba(0, 0, 0, 0.1);
`;

const HamburgerMenu = ({ isOpen }) => (
  <div
    className={css`
      ${burgerMenu} ${isOpen && openBurger};
    `}
  >
    <ul
      className={css`
        margin: 0;
        padding: 0;
      `}
    >
      <NavLink href="/research/">Research</NavLink>
      <NavLink href="/outreach/">Outreach</NavLink>
      <NavLink href="/photography/">Photography</NavLink>
      <NavLink href="/about/">About</NavLink>
    </ul>
  </div>
);

export default HamburgerMenu;
