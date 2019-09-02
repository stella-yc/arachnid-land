import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Section } from "../components/Section";
import PageTitle from "../components/PageTitle";

export const PublicationsPageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <Section>
      <PageTitle title={title} />
      <PageContent className="content" content={content} />
    </Section>
  );
};

PublicationsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const PublicationsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PublicationsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

PublicationsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PublicationsPage;

export const publicationsPageQuery = graphql`
  query PublicationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
