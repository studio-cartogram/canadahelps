import React from "react";
import {
  Button, 
  Input,
  Heading,
  Icon,
} from "../components";

export default () => (
  <div className="component--container">

    <div className="component--header">
      <Heading size="xlarge" text="Icon" />
      <Heading subdued regular size="large" text="Icons are used to visually communicate core parts of the platform and available actions. They can act as wayfinding tools to help users more easily understand where they are in the platform, and common interaction patterns that are available." />
    </div>

    <div className="component--instance">

      <h3>General</h3>
      <p>Icons used throughout the front-end website and the user account admin.</p>
      <br />

      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'DROPDOWN'} />
          <Heading subdued regular text="dropdown" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'CLOSE'} />
          <Heading subdued regular text="close" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'PLUS'} />
          <Heading subdued regular text="plus" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'MINUS'} />
          <Heading subdued regular text="minus" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ARROWDOWN'} />
          <Heading subdued regular text="arrow-down" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ARROWUP'} />
          <Heading subdued regular text="arrow-up" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ARROWLEFT'} />
          <Heading subdued regular text="arrow-left" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ARROWRIGHT'} />
          <Heading subdued regular text="arrow-right" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'CLOCK'} />
          <Heading subdued regular text="clock" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'LIGHTBULB'} />
          <Heading subdued regular text="lightbulb" size="nano" />
        </div>

      </div>

    </div>

    <div className="component--instance">

      <h3>Campaign</h3>
      <p>Icons used for campaign-specific UI.</p>
      
      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'ANNIVERSARY'} />
          <Heading subdued regular text="anniversary" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'BIRTHDAY'} />
          <Heading subdued regular text="birthday" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'CHALLENGE'} />
          <Heading subdued regular text="challenge" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'NEWBABY'} />
          <Heading subdued regular text="newbaby" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'INMEMORY'} />
          <Heading subdued regular text="inmemory" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'HUMANITARIAN'} />
          <Heading subdued regular text="humanitarian" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'GRADUATION'} />
          <Heading subdued regular text="graduation" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ENGAGEMENT'} />
          <Heading subdued regular text="engagement" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'OTHER'} />
          <Heading subdued regular text="other" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'CANADA150'} />
          <Heading subdued regular text="canada150" size="nano" />
        </div>

      </div>

    </div>

  </div>
);