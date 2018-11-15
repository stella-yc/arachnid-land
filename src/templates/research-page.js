import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Section } from "../components/Section";
import PageTitle from "../components/PageTitle";

export const ResearchPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Section>
      <PageTitle title={title} />
      <PageContent className="content" content={content} />
    </Section>
  );
};

ResearchPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ResearchPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ResearchPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ResearchPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResearchPage;

export const researchPageQuery = graphql`
  query ResearchPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
