import React from "react";
import {
  Button,
  ButtonGroup,
  Input,
  Heading,
  Icon,
} from "../components";

export default () => (
  <div className="component--container">

    <div className="component--header">
      <Heading size="xlarge" text="Action List" />
      <Heading subdued regular size="large" text="Action lists render a list of actions or selectable options. This component is usually placed inside a popover container to create a dropdown menu or to let users select from a list of options." />
    </div>

    <div className="component--instance">
      <h3>Action List in a Popover</h3>
      <p>Use for the least important actions so the user isn’t distracted by secondary tasks. Can also be used for a set of actions that won’t fit in the available screen space.</p>
      <br />
      <ActionList>
        <Button link="#">
          <Icon icon={'MORE'} />
        </Button>
      </ActionList>

    </div>

  </div>
);