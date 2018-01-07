import React from "react";
import Link from "gatsby-link";
import '../styles/main.scss';
import {
  Icon,
  Heading,
} from "../components";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div className="styleguide--container">
    <header className="styleguide--header">
      <Link to="/">
        <Icon icon={'LOGO'} />
      </Link>
      <Heading text="UI Styleguide" size="large" subdued regular />
      <ul>
        <ListLink to="/visuals/">Visuals</ListLink>
        <ListLink to="/components/">Components</ListLink>
      </ul>
    </header>
    {children()}
  </div>