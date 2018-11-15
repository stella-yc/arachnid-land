import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { css } from "emotion";

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
    <Section width={1000}>
      <div
        className={css`
          width: 640px;
          margin: 1em auto;
        `}
      >
        <a
          data-flickr-embed="true"
          href="https://www.flickr.com/photos/saecheverri/albums/72157687394720002"
          title="Arachnids"
        >
          <img
            src="https://farm5.staticflickr.com/4386/36649023612_8b0d20c428_z.jpg"
            width="640"
            height="427"
            alt="Arachnids"
            className={css`
              margin: 0 auto;
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
        <h2>{title}</h2>
        <PageContent className="content" content={content} />
      </div>
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
