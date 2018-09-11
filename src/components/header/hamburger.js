import React from "react";
import { css } from "emotion";

// const lineStyle = css`
//   width: 20px;
//   height: 3px;
//   background-color: black;
//   margin: 3px 0;
//   transition: 0.4s;

//   @media (min-width: 420px) {
//     width: 35px;
//     height: 5px;
//     background-color: black;
//     margin: 6px 0;
//     transition: 0.4s;
//   }
// `;

const lineStyle = css`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
  transition: 0.4s;
`;
class Hamburger extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  toggleHamburger() {
    this.setState({ isOpen: !this.state.isOpen });
    this.props.handleToggle();
  }

  render() {
    if (!this.state.isOpen) {
      return (
        <div
          className={css`
            display: inline-block;
            cursor: pointer;
          `}
          onClick={this.toggleHamburger}
        >
          <div
            className={css`
              ${lineStyle};
            `}
          />
          <div
            className={css`
              ${lineStyle};
            `}
          />
          <div
            className={css`
              ${lineStyle};
            `}
          />
        </div>
      );
    }

    return (
      <div>
        <div
          className={css`
            display: inline-block;
            cursor: pointer;
          `}
          onClick={this.toggleHamburger}
        >
          <div
            className={css`
              ${lineStyle};
              transform: rotate(-45deg) translate(-9px, 6px);
            `}
          />
          <div
            className={css`
              ${lineStyle};
              opacity: 0;
            `}
          />
          <div
            className={css`
              ${lineStyle};
              transform: rotate(45deg) translate(-8px, -8px);
            `}
          />
        </div>
      </div>
    );
  }
}

Hamburger.defaultProps = {
  handleToggle: () => {}
};
export default Hamburger;
