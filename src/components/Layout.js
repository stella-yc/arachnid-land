import React from "react";
import Helmet from "react-helmet";
import { css } from "emotion";

import Header from "../components/header";
import Footer from "../components/footer";
// import "./all.sass";
// eslint-disable-next-line
import normalize from "normalize.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Sebastian Echeverri" />
    <Header />
    <div
      className={css`
        min-height: 80vh;
      `}
    >
      {children}
    </div>
    <Footer />
  </div>
);

export default TemplateWrapper;
