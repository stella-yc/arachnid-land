import React from "react";
import { css } from "emotion";

import Card from "./card/Card";

class Homepage extends React.PureComponent {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div
        className={css`
          display: flex;
          flew-direction: column;
          flex-wrap: wrap;
          justify-content: center;
          align-content: center;
          margin: 0 auto;
          width: 100%;
          transition: opacity 0.3s ease;
          opacity: ${this.state.isLoading ? 0 : 1};

          @media (min-width: 768px) {
            margin-left: 0.5em;
            flew-direction: row;
            justify-content: space-around;
          }
        `}
      >
        <Card title="Research" path="/research/" />
        <Card title="Outreach" path="/outreach/" />
        <Card title="Photography" path="/photography/" />
        <Card title="About" path="/about/" />
      </div>
    );
  }
}

export default Homepage;
