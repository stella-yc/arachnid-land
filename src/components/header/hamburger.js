import React from "react";
import { css } from "emotion";

const lineStyle = css`
  width: 30px;
  height: 3px;
  background-color: white;
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
}

Hamburger.defaultProps = {
  handleToggle: () => {}
};
export default Hamburger;
