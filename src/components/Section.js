import React from "react";
import { css } from "emotion";

export const Section = ({ children, width }) => {
  let maxWidth = 640;
  if (width) {
    maxWidth = width;
  }
  return (
    <section
      className={css`
        margin: 0 auto;
        max-width: ${maxWidth}px;
        padding: 90px 20px 0;
      `}
    >
      {children}
    </section>
  );
};

export default Section;
