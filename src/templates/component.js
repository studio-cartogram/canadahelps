import React from "react";
import {
  Heading,
} from "../components";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Heading size="xlarge" text={post.frontmatter.title} />
      <Heading subdued regular size="large" text={post.frontmatter.subtitle} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;