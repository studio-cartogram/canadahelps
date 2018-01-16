import React from "react";
import Link from "gatsby-link";
import '../styles/main.scss';
import {
  Icon,
  Heading,
} from "../components";

export default () => (
  <div>
        <div className="component--header">
          <Heading size="xlarge" text="Visuals" />
          <Heading size="large" text="This will be where rules for things like Typography, Colour and Illustrations/Photos live." subdued regular />
        </div>
    </div>
);