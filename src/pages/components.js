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
      <Heading size="xlarge" text="Buttons" />
      <Heading subdued regular size="large" text="Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation." />
    </div>

    <div className="component--instance">
      <h3>Basic Button</h3>
      <p>Used most in the interface. Only use another style if a button requires more or less visual weight.</p>
      <br />
      <Button text="Cancel" link="http://cartogram.ca" />

    </div>

    <div className="component--instance">

      <h3>Primary Button</h3>
      <p>Use to highlight the most important actions in any experience. Don’t use more than one primary button in a section or screen to avoid overwhelming the user.</p>
      <br />
      <Button primary text="Submit" link="http://cartogram.ca" />

    </div>

    <div className="component--instance">

      <h3>Secondary Button</h3>
      <p>Use for secondary actions since they’re less visually prominent than Primary. There should only be one Primary button per screen, but there can be multiple Secondary buttons.</p>
      <br />
      <Button secondary text="Add Image" link="http://cartogram.ca" />

    </div>

    <div className="component--instance">

      <h3>Outline Button</h3>
      <p>Use against shaded or colorful backgrounds. An outline button will maintain the appropriate visual weight and won’t clash with the background color.</p>
      <br />
      <Button outline text="Submit" link="http://cartogram.ca" />

    </div>

    <div className="component--instance">

      <h3>Plain Button</h3>
      <p>Use for less important or less commonly used actions since they’re less prominent. For example, plain buttons are used as tertiary actions in forms.</p>
      <br />
      <Button plain text="Add a message" link="http://cartogram.ca" />

    </div>

    <div className="component--instance">

      <h3>Icon Button</h3>
      <p>A button can just have an icon. Use this only when the icon’s action is very clear or very conventional, e.g. social media icons that link to the correponding account, or a mail icon to trigger the user’s email client.</p>
      <br />
      <Button icon link="http://cartogram.ca">
        <Icon icon={'MORE'} />
      </Button>
      <br />
      <br />
      <p>Or a button can have an icon as a label. On either the left... </p>
      <br />
      <Button iconLeft text="Message" link="http://cartogram.ca">
        <Icon icon={'MAIL'} />
      </Button>
      <br />
      <br />
      <p>... or the right side of the text.</p>
      <br />
      <Button iconRight text="Account" link="http://cartogram.ca">
        <Icon icon={'DROPDOWN'} />
      </Button>

    </div>

    <div className="component--instance">

      <h3>Destructive Button</h3>
      <p>Use when the action will delete user data or be otherwise difficult to recover from. Destructive buttons should trigger a confirmation dialog before the action is completed. Be thoughtful about using destructive buttons because they can feel stressful for the user.</p>
      <br />
      <Button destructive text="Delete" link="http://cartogram.ca" />

    </div>

    <div className="component--instance">

      <h3>Disabled Button</h3>
      <p>Use for actions that aren’t currently available. The surrounding interface should make it clear why the button is disabled and what needs to be done to enable it.</p>
      <br />
      <Button disabled text="Set fundraising goal" />

    </div>

    <div className="component--instance">

      <h3>Small Button</h3>
      <p>Use when a table or list has a set of actions on each item to avoid making items taller than they need to be. Don’t use slim buttons for primary actions.</p>
      <br />
      <Button size="small" text="Edit" link="http://cartogram.ca" />

    </div>

    <div className="component--instance">

      <h3>Large Button</h3>
      <p>Use for the main call to action in empty states or for calls to action shown with large illustrations or bold image banners.</p>
      <br />
      <Button size="large" active text="Complete Donation" link="http://cartogram.ca" />

    </div>

    <div className="component--header">
      <Heading size="xlarge" text="Text field" />
      <Heading subdued regular size="large" text="A text field is an input field that a user can type into. It has a range of options and supports several text formats including numbers." />
    </div>

    <div className="component--instance">

      <h3>Default text field</h3>
      <p>Use to allow users to provide text input when the expected input is short. For longer input, use the auto grow or multiline options.</p>
      <br />
      <Input placeholder="hello" type="text" />

    </div>

    <div className="component--header">
      <Heading size="xlarge" text="Icons" />
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