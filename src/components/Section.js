import React from "react";
import { css } from "emotion";

export const Section = ({ children }) => {
  return (
    <section
      className={css`
        margin: 0 auto;
        max-width: 600px;
        padding: 90px 20px 0;
      `}
    >
      {children}
    </section>
  );
};

export default Section;
