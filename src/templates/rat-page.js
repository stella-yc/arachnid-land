import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Section } from "../components/Section";
import PageTitle from "../components/PageTitle";

export const RatPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Section>
      <PageTitle title={title} />
      <PageContent className="content" content={content} />
    </Section>
  );
};

RatPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const RatPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <RatPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

RatPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default RatPage;

export const ratPageQuery = graphql`
  query RatPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
