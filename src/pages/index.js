import React from "react";
import Link from "gatsby-link";
import '../styles/main.scss';
import {
  Icon,
  Heading,
} from "../components";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
        <div className="component--header">
          <Heading size="xlarge" text="A UI Styleguide for the CanadaHelps platform" />
          <Heading size="large" text="This design system helps us work together to build a great experience for CanadaHelps’ charities &amp; donors." subdued regular />
        </div>
      <h4>{data.allMarkdownRemark.totalCount} Components</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link className="component--link"
            to={node.fields.slug}
          >
            {node.frontmatter.title}{" "}
            <span color="#BBB">— {node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

