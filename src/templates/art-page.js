import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { css } from "emotion";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Section } from "../components/Section";
import PageTitle from "../components/PageTitle";

export const ArtPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Section width={640}>
      <PageTitle title={title} />
      <div
        className={css`
          width: 640px;
          height: 100%;
          margin: 1em auto;
        `}
      >
        <a
          data-flickr-embed="true"
          href="https://www.flickr.com/photos/saecheverri/albums/72157687394720002"
          title="Arachnids"
          className={css`
            width: 640px;
            height: 100%;
          `}
        >
          <img
            src="https://farm5.staticflickr.com/4386/36649023612_8b0d20c428_z.jpg"
            alt="Arachnids"
            className={css`
              width: 320px;
              height: 213px;
              margin: 0 auto;

              @media (min-width: 500px) {
                width: 500px;
                height: 333px;
              }
              @media (min-width: 668px) {
                width: 640px;
                height: 427px;
              }
            `}
          />
        </a>
        <script
          async
          src="//embedr.flickr.com/assets/client-code.js"
          charset="utf-8"
        />
      </div>
      <div
        className={css`
          margin: 0 auto;
          max-width: 600px;
        `}
      >
        <PageContent className="content" content={content} />
      </div>
    </Section>
  );
};

ArtPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ArtPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ArtPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ArtPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ArtPage;

export const artPageQuery = graphql`
  query ArtPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
