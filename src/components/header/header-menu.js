import React from "react";
import { css } from "emotion";

import Hamburger from "./hamburger";
import HamburgerMenu from "./hamburger-menu";

class HeaderMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    console.log("hi");
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div
        className={css`
          @media (min-width: 768px) {
            display: none;
          }
        `}
      >
        <Hamburger isOpen={this.state.isOpen} handleToggle={this.toggleMenu} />
        <HamburgerMenu
          isOpen={this.state.isOpen}
          toggleMenu={this.toggleMenu}
        />
      </div>
    );
  }
}

export default HeaderMenu;
