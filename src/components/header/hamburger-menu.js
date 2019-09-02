import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";
import style from "./hamburger-menu.module.css";

const NavLink = ({ href, children }) => (
  <li className={style.navlink}>
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
  height: 100vh;
  visibility: hidden;
  opacity: 0;
  transition: opacity 1s ease;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  opacity: 0.97;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  box-shadow: -2px 3px 2px 2px rgba(0, 0, 0, 0.1);
`;

const HamburgerMenu = ({ isOpen, toggleMenu }) => (
  <div
    className={css`
      ${burgerMenu} ${isOpen && openBurger};
    `}
  >
    <div
      className={css`
        font-size: 2rem;
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      `}
      onClick={toggleMenu}
    >
      <div
        className={css`
          width: 30px;
          height: 3px;
          background-color: black;
          margin: 6px 0;
          transform: rotate(45deg);
        `}
      />
      <div
        className={css`
          width: 30px;
          height: 3px;
          background-color: black;
          margin: 6px 0;
          transform: rotate(-45deg) translate(10px, -11px);
        `}
      />
    </div>
    <ul
      className={css`
        margin: 0;
        padding: 0;
      `}
    >
      <NavLink href="/publications/">Publications</NavLink>
      <NavLink href="/research/">Research</NavLink>
      <NavLink href="/outreach/">Outreach</NavLink>
      <NavLink href="/blog/">Blog</NavLink>
      <NavLink href="/art/">Art</NavLink>
      <NavLink href="/about/">About</NavLink>
    </ul>
  </div>
);

export default HamburgerMenu;
