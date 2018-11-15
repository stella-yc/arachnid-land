import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Section } from "../components/Section";
import PageTitle from "../components/PageTitle";

export const OutreachPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Section>
      <PageTitle title={title} />
      <PageContent className="content" content={content} />
    </Section>
  );
};

OutreachPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const OutreachPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <OutreachPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

OutreachPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default OutreachPage;

export const outreachPageQuery = graphql`
  query OutreachPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
