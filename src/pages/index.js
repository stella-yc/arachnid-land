import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { css } from "emotion";

import Layout from "../components/Layout";
import Homepage from "../components/homepage";
import Jumbotron from "../components/jumbotron";
import BlogTease from "../components/blog-tease/BlogTease";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <Layout>
        <Jumbotron />

        <div
          className={css`
            text-align: center;
            margin-top: 2em;
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

// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
// import Layout from '../components/Layout'

// export default class IndexPage extends React.Component {
//   render() {
//     const { data } = this.props
//     const { edges: posts } = data.allMarkdownRemark

//     return (
//       <Layout>
//         <section className="section">
//           <div className="container">
//             <div className="content">
//               <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
//             </div>
//             {posts
//               .map(({ node: post }) => (
//                 <div
//                   className="content"
//                   style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
//                   key={post.id}
//                 >
//                   <p>
//                     <Link className="has-text-primary" to={post.fields.slug}>
//                       {post.frontmatter.title}
//                     </Link>
//                     <span> &bull; </span>
//                     <small>{post.frontmatter.date}</small>
//                   </p>
//                   <p>
//                     {post.excerpt}
//                     <br />
//                     <br />
//                     <Link className="button is-small" to={post.fields.slug}>
//                       Keep Reading →
//                     </Link>
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </section>
//       </Layout>
//     )
//   }
// }

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
