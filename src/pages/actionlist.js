import React from "react";
import {
  Button,
  ButtonGroup,
  Input,
  Heading,
  ActionList,
  Icon,
} from "../components";

export default () => (
  <div className="component--container">

    <div className="component--header">
      <Heading size="xlarge" text="Action List" />
      <Heading subdued regular size="large" text="Action lists render a list of actions or selectable options. This component is usually placed inside a popover container to create a dropdown menu or to let users select from a list of options." />
    </div>

    <div className="component--instance">
      <h3>Action List</h3>
      <p>Use for the least important actions so the user isn’t distracted by secondary tasks. Can also be used for a set of actions that won’t fit in the available screen space.</p>
      <p>There are lots of different paths a user can take. Listing them all out in the interface would make the experience feel overwhelming and cluttered.</p>
      <p>Action lists in popovers let users expose additional information and actions when they’re ready to explore them.</p>
      <br />
      <div className="ActionList--group">
        <div className="ActionList--toggle">
          <Button link="#">
              <Icon icon={'MORE'} />
          </Button>
        </div>
        <div className="ActionList--container">
          <div className="ActionList--tip">
          </div>
          <ActionList orientation="left">
            <div className="ActionList--wrapper">
              <ul>
                <li>
                  <Button iconLeft actionListItem text="Delete" link="#">
                    <Icon icon={'TRASH'} />
                  </Button>
                </li>
                <li>
                  <Button iconLeft actionListItem text="Archive" link="#">
                    <Icon icon={'ARCHIVE'} />
                  </Button>
                </li>
                <li>
                  <Button iconLeft actionListItem text="Embed" link="#">
                    <Icon icon={'EMBED'} />
                  </Button>
                </li>
              </ul>
            </div>
          </ActionList>
        </div>
      </div>

    </div>

  </div>
);