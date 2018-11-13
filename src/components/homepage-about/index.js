import React from "react";
import { css } from "emotion";
import SocialLinks from "../../SocialLinks";

class HomepageAbout extends React.PureComponent {
  render() {
    return (
      <div
        className={css`
          padding: 3em 2em 0;
          width: 100%;
          @media (min-width: 768px) {
            padding: 4em 1em 0;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 0 auto;
            @media (min-width: 768px) {
              max-width: 700px;
            }
          `}
        >
          <div
            className={css`
              display: inline-block;
              @media (min-width: 768px) {
                width: 70%;
              }
            `}
          >
            <p
              className={css`
                line-height: 1.4em;
              `}
            >
              <span
                className={css`
                  font-size: 2em;
                  font-weight: bold;
                `}
              >
                Hi there!{" "}
              </span>
              I am a scientist and educator based in Pittsburgh, PA. I study the
              complex relationship between animals’ eyes, their environment, and
              how they use color, shape, and movement to communicate. While I
              love all animals, there is a special spot in my heart for spiders
              and other arachnids.
            </p>
          </div>
          <div
            className={css`
              width: 200px;
              height: auto;
              display: inline-block;
              @media (min-width: 768px) {
                max-width: 700px;
                width: 30%;
              }
            `}
          >
            <img
              src="/img/sebs-by-stella_small.png"
              className={css`
                height: auto;
                width: 100%;
                border-radius: 20%;
              `}
            />
          </div>
          <div
            className={css`
              text-align: center;
            `}
          >
            <SocialLinks />
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageAbout;
