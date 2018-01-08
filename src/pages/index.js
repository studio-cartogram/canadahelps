import React from "react";
import Link from "gatsby-link";
import '../styles/main.scss';
import {
  Icon,
  Heading,
} from "../components";

export default ({ data }) => {
  
  return (
    <div>
        <div className="component--header">
          <Heading size="xlarge" text="A UI Styleguide for the CanadaHelps platform" />
          <Heading size="large" text="This design system helps us work together to build a great experience for CanadaHelps’ charities &amp; donors." subdued regular />
        </div>
    </div>
  );
};
