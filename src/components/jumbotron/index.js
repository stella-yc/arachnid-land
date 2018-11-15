import React from "react";
import { css } from "emotion";
import JumboImage from "./JumboImage";

// This component displays the image
// and cycles through display text.

const roles = [
  "Ph.D. Student",
  "Science Educator",
  "Wildlife Photographer",
  "Scientist"
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
      }, 3000);
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
            top: 350px;
            color: white;
            // background-color: rgba(0, 0, 0, 0.2);
            padding: 1em;
            width: 100%;
            text-align: center;
            @media (min-width: 420px) {
              top: 350px;
              width: 100%;
            }
            @media (min-width: 600px) {
              top: 450px;
              right: 20px;
              width: 100%;
            }
            @media (min-width: 800px) {
              top: 200px;
              width: 50%;
              // width: 100%;
              right: 20px;
            }
            @media (min-width: 1100px) {
              top: 200px;
              width: 38%;
              // width: 100%;
              right: 60px;
            }
            @media (min-width: 1130px) {
              width: 50%;
              right: 30px;
            }
          `}
        >
          <p
            className={css`
              font-size: 2.8em;
              margin-bottom: 0.5em;
              text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
              @media (min-width: 420px) {
                font-size: 3em;
              }
              @media (min-width: 600px) {
                font-size: 3em;
              }
              @media (min-width: 768px) {
                font-size: 2.4em;
              }
              @media (min-width: 1130px) {
                font-size: 2.8em;
              }
              @media (min-width: 1340px) {
                font-size: 3em;
              }
            `}
          >
            Sebastian Echeverri
          </p>
          <p
            className={css`
              font-size: 1.4em;
              text-align: center;
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
            <span
              className={css`
                display: inline-block;
                color: #e1d866;
                border-bottom: 5px solid #e1d866;
                text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
                @media (min-width: 1170px) {
                  margin-left: 0.3em;
                }
              `}
            >
              {this.state.role}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
