import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { css } from "emotion";

import Layout from "../../components/Layout";
import BlogCard from "../../components/blog-tease/BlogCard";
import Section from "../../components/Section";
import PageTitle from "../../components/PageTitle";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <Layout>
        <Section>
          <PageTitle title="Blog" />
          {posts.map(({ node: post }) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </Section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query BlogHomeQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image
          }
        }
      }
    }
  }
`;
