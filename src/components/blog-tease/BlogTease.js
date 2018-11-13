import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";

const BlogTease = ({ post }) => (
  <div
    className="content"
    className={css`
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 0 1em;
      text-align: left;
      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
      }
    `}
  >
    <div
      className={css`
        width: 100%;
        height: auto;
        display: inline-block;
        @media (min-width: 768px) {
          width: 300px;
          margin: 0;
        }
      `}
    >
      <img
        src={post.frontmatter.image}
        alt={`${post.title} hero image`}
        className={css`
          width: 100%;
          height: auto;
        `}
      />
    </div>
    <div
      className={css`
        display: inline-block;

        max-width: 650px;
        @media (min-width: 768px) {
          padding: 0 0 0 2em;
          margin: 0;
        }
      `}
    >
      <h3
        className={css`
          margin: 0.1em;
          display: inline-block;
        `}
      >
        <Link
          className={css`
            text-decoration: none;
            color: #00cebe;
          `}
          to={post.fields.slug}
        >
          {post.frontmatter.title}
        </Link>
      </h3>
      <p
        className={css`
          margin-bottom: 0.8em;
        `}
      >
        <small>{post.frontmatter.date}</small>
      </p>

      <div>
        <p>
          {post.excerpt}
          <Link
            className={css`
              display: block;
              color: #03ab9e;
              margin-top: 0.8em;
            `}
            to={post.fields.slug}
          >
            Keep Reading →
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default BlogTease;
