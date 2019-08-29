import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { css } from "emotion";

import Layout from "../components/Layout";
import Homepage from "../components/homepage";
import HomepageAbout from "../components/homepage-about";
import Jumbotron from "../components/jumbotron";
import BlogTease from "../components/blog-tease/BlogTease";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <Layout>
        <Jumbotron />
        <HomepageAbout />
        <div
          className={css`
            text-align: center;
            margin: 1em 0;
            padding: 1em 0;
            background-color: hsla(0, 0%, 12%, 1);
          `}
        >
          <h1>Recent Updates</h1>
          {posts.map(({ node: post }) => (
            <BlogTease key={post.id} post={post} />
          ))}
        </div>
        <Homepage />
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
  query IndexQuery {
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
