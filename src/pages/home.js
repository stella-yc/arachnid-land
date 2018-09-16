import React from "react";

import Layout from "../components/Layout";
import Homepage from "../components/Homepage";
import Jumbotron from "../components/Jumbotron";

export default ({ data }) => (
  <Layout>
    <Jumbotron />
    <Homepage />
  </Layout>
);
