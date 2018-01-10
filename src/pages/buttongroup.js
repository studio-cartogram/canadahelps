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
      <Heading size="xlarge" text="Button Group" />
      <Heading subdued regular size="large" text="Button group displays multiple related actions in a row to help with horizontal arrangement and the spacing of calls to action." />
    </div>

    <div className="component--instance">
      <h3>Default Button Group</h3>
      <p>Use when you have multiple buttons to space them out evenly.</p>
      <br />
      <ButtonGroup>
        <Button tertiary text="Cancel" link="#" />
        <Button primary text="Save" link="#" />
      </ButtonGroup>

      <hr />

      <ButtonGroup>
        <Button iconLeft plain text="View" link="#">
          <Icon icon={'VIEW'} />
        </Button>
        <Button iconLeft plain text="Embed" link="#">
          <Icon icon={'EMBED'} />
        </Button>
        <Button iconLeft plain text="Edit" link="#">
          <Icon icon={'EDIT'} />
        </Button>
        <Button iconLeft plain text="Manage" link="#">
          <Icon icon={'MANAGE'} />
        </Button>
      </ButtonGroup>

    </div>

    <div className="component--instance">

      <h3>Segmented Button Group</h3>
      <p>Use to emphasize several buttons as a thematically-related set among other controls. All buttons within a segmented ButtonGroup should share the same elements and visual style.</p>
      <br />
      <ButtonGroup segmented>
        <Button text="Manage" link="#" />
        <Button text="Edit" link="#" />
        <Button text="View" link="#" />
      </ButtonGroup>

      <hr />

      <ButtonGroup segmented>
        <Button tertiary link="#">
          <Icon icon={'FORWARD'} />
        </Button>
        <Button tertiary link="#">
          <Icon icon={'REPLY'} />
        </Button>
        <Button tertiary link="#">
          <Icon icon={'BOLD'} />
        </Button>
        <Button tertiary link="#">
          <Icon icon={'ITALIC'} />
        </Button>
        <Button tertiary link="#">
          <Icon icon={'UNDERLINE'} />
        </Button>
        <Button tertiary link="#">
          <Icon icon={'UL'} />
        </Button>
        <Button tertiary link="#">
          <Icon icon={'OL'} />
        </Button>
        <Button tertiary link="#">
          <Icon icon={'LINKALT'} />
        </Button>
      </ButtonGroup>

    </div>

  </div>
);