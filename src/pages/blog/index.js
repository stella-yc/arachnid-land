import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { css } from "emotion";

import Layout from "../../components/Layout";
import BlogCard from "../../components/blog-tease/BlogCard";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <Layout>
        <div
          className={css`
            max-width: 600px;
            text-align: left;
            margin: 1em auto;
            padding: 1em 0;
          `}
        >
          <h1
            className={css`
              margin: 1em auto;
              padding-bottom: 0.2em;
              border-bottom: 4px solid #505050;
              display: inline-block;
            `}
          >
            Blog
          </h1>
          {posts.map(({ node: post }) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
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
