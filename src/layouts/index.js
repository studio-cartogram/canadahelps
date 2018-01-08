import React from "react";
import Link from "gatsby-link";
import '../styles/main.scss';
import {
  Icon,
  Heading,
} from "../components";

const ListLink = props =>
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children, data }) => {
  return (
  <div className="styleguide--container">
    <nav className="styleguide--nav">
      <ul className="nav--logo">
        <Link to="/">
          <Icon icon={'LOGO'} />
        </Link>
      </ul>
      <div className="nav--header">
        <Heading text="UI Styleguide" size="large" subdued regular />
      </div>
      <ul className="nav--links">
        <ListLink to="/visuals/">Visuals</ListLink>
        <ListLink to="/components/">Components</ListLink>
      </ul>
    </nav>

    <div className="styleguide--page">
      <main className="styleguide--content">
        {children()}
      </main>
      <aside className="styleguide--sidebar">
        <Heading size="micro" text="Components" />
  {/* <Heading size="micro" text={data.allMarkdownRemark.totalCount} /> */}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link className="component--link"
              to={node.fields.slug}
            >
              {node.frontmatter.title}{" "}
            </Link>
          </div>
        ))}
      </aside>
    </div>

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
          subtitle
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