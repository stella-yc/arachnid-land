import React from "react";

import Layout from "../components/layout";
import Homepage from "../components/homepage";
import Jumbotron from "../components/jumbotron";

export default ({ data }) => (
  <Layout>
    <Jumbotron />
    <Homepage />
  </Layout>
);
