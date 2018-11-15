import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const PageTitle = ({ title }) => {
  return (
    <h1
      className={css`
        margin: 0 auto 1em;
        padding-bottom: 0.2em;
        border-bottom: 4px solid #505050;
        display: inline-block;
      `}
    >
      {title}
    </h1>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
