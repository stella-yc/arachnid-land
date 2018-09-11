import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Section } from "../components/Section";

export const PhotographyPageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <Section>
      <h2>{title}</h2>
      <PageContent className="content" content={content} />
    </Section>
  );
};

PhotographyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const PhotographyPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PhotographyPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

PhotographyPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PhotographyPage;

export const photographyPageQuery = graphql`
  query PhotographyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
