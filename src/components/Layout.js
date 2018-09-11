import React from "react";
import Helmet from "react-helmet";

import Header from "../components/header";
// import "./all.sass";
// eslint-disable-next-line
import normalize from "normalize.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Sebastian Echeverri" />
    <Header />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
