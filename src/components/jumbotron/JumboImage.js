import React from "react";
import { css } from "react-emotion";
import style from "./JumboImage.module.css";

class JumboImage extends React.PureComponent {
  render() {
    return (
      <div
        id="jumboImage"
        className={css`
          margin: 0;
          padding: 0;
          position: relative;
          width: 100%;
          height: auto;
          min-height: 70vh;
          max-height: 90vh;
          overflow: hidden;
          @media (min-width: 1000px) {
            max-height: none;
          }
        `}
      >
        <div className={style.Jumbo} />
      </div>
    );
  }
}

export default JumboImage;
