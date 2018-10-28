import React from "react";
import { css } from "emotion";
import JumboImage from "./JumboImage";

// This component displays the image
// and cycles through display text.

const roles = [
  "Ph.D. student",
  "science educator",
  "wildlife photographer",
  "spider scientist"
];

class Jumbotron extends React.Component {
  state = {
    role: "Ph.D. student",
    isLoading: true
  };

  intervalId = null;

  componentDidMount() {
    this.setState({ isLoading: false });
    if (document !== undefined) {
      let i = 1;
      this.intervalId = setInterval(() => {
        if (i > roles.length - 1) {
          i = 0;
        }
        this.setState({ role: roles[i] });
        i++;
      }, 2000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div
        className={css`
          width: 100%;
          margin: 0;
          padding: 0;
          position: relative;
          transition: opacity 0.5s ease;
          opacity: ${this.state.isLoading ? 0 : 1.0};
        `}
      >
        <JumboImage />
        <div
          className={css`
            position: absolute;
            top: 160px;
            right: 0px;
            color: white;
            background-color: rgba(0, 0, 0, 0.4);
            padding: 1em;
            width: 60%;
            @media (min-width: 420px) {
              top: 190px;
              width: 60%;
            }
            @media (min-width: 600px) {
              top: 280px;
              right: 20px;
              width: 50%;
            }
            @media (min-width: 1000px) {
              top: 200px;
              width: 38%;
              right: 60px;
            }
          `}
        >
          <p
            className={css`
              font-size: 1.4em;
              margin-bottom: 0.5em;
              @media (min-width: 420px) {
                font-size: 1.8em;
              }
              @media (min-width: 768px) {
                font-size: 1.8em;
              }
            `}
          >
            Hi, my name is <br /> Sebastian Echeverri.
          </p>
          <p
            className={css`
              font-size: 1.4em;
              @media (min-width: 420px) {
                font-size: 1.8em;
              }
              @media (min-width: 768px) {
                font-size: 1.8em;
              }
              @media (min-width: 900px) {
                font-size: 1.8em;
              }
              @media (min-width: 1096px) {
                font-size: 2em;
              }
            `}
          >
            I'm a{" "}
            <span
              className={css`
                display: inline-block;
                color: #e1d866;
                border-bottom: 5px solid #e1d866;
                @media (min-width: 1170px) {
                  margin-left: 0.3em;
                }
              `}
            >
              {this.state.role}.
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
