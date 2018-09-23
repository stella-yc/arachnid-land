import React from "react";
import { css } from "react-emotion";
import jumbo from "./jumbo.jpg";
import small from "./small.jpg";

class JumboImage extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      smallDevice: true
    };
  }
  componentDidMount() {
    if (window.innerWidth >= 1000) {
      this.setState({ smallDevice: false, isVisible: true });
    } else {
      this.setState({ isVisible: true });
    }
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 1000px)").matches) {
        console.log("Screen width is at least 500px");
        if (this.state.smallDevice) {
          this.setState({ smallDevice: false });
        }
      } else {
        if (!this.state.smallDevice) {
          this.setState({ smallDevice: true });
        }
        console.log("Screen less than 500px");
      }
    });
  }

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
        <img
          src={this.state.smallDevice ? small : jumbo}
          alt="Sebastian Echeverri"
          className={css`
            opacity: ${this.state.isVisible ? 1 : 0}
            width: 100%;
            height: auto;
            margin: 0;
            @media (min-width: 768px) {
              margin-top: -100px;
            }
            @media (min-width: 1000px) {
              margin-top: 0;
            }
          `}
        />
      </div>
    );
  }
}

export default JumboImage;

// import React from "react";
// import { css } from "react-emotion";
// import jumbo from "./jumbo.jpg";
// import small from "./small.jpg";

// class JumboImage extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       smallDevice: true
//     };
//   }
//   componentDidMount() {
//     if (window.innerWidth >= 1000) {
//       this.setState({ smallDevice: false });
//     }
//     window.addEventListener("resize", () => {
//       if (window.matchMedia("(min-width: 1000px)").matches) {
//         console.log("Screen width is at least 500px");
//         if (this.state.smallDevice) {
//           this.setState({ smallDevice: false });
//         }
//       } else {
//         if (!this.state.smallDevice) {
//           this.setState({ smallDevice: true });
//         }
//         console.log("Screen less than 500px");
//       }
//     });
//   }

//   render() {
//     return (
//       <div
//         id="jumboImage"
//         className={css`
//           margin: 0;
//           padding: 0;
//           position: relative;
//           width: 100%;
//           height: auto;
//           min-height: 70vh;
//           max-height: 90vh;
//           overflow: hidden;
//           @media (min-width: 1000px) {
//             max-height: none;
//           }
//         `}
//       >
//         <img
//           src={this.state.smallDevice ? small : jumbo}
//           alt="Sebastian Echeverri"
//           className={css`
//             width: 100%;
//             height: auto;
//             margin: 0;
//             @media (min-width: 768px) {
//               margin-top: -100px;
//             }
//             @media (min-width: 1000px) {
//               margin-top: 0;
//             }
//           `}
//         />
//       </div>
//     );
//   }
// }

// export default JumboImage;
