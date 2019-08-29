import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";

const NavLink = ({ href, children }) => (
  <li
    className={css`
      display: inline;
      padding: 0;
      margin: 0 1em 0 0;
      list-style-type: none;
    `}
  >
    <Link
      to={href}
      className={css`
        padding-bottom: 0.5em;
        text-decoration: none;
        &:hover {
          color: #00cebe;
          border-bottom: 3px solid #00cebe;
        }
      `}
      activeClassName={css`
        color: #e1d866;
        border-bottom: 3px solid #e1d866;
      `}
    >
      {children}
    </Link>
  </li>
);

const HeaderLinks = ({ siteTitle }) => (
  <ul
    className={css`
      margin: 0;
      padding: 0;
      display: none;

      @media (min-width: 768px) {
        display: inline-block;
      }
    `}
  >
    <NavLink href="/research/">Research</NavLink>
    <NavLink href="/outreach/">Outreach</NavLink>
    <NavLink href="/blog/">Blog</NavLink>
    <NavLink href="/photography/">Photography</NavLink>
    <NavLink href="/about/">About</NavLink>
  </ul>
);

export default HeaderLinks;
