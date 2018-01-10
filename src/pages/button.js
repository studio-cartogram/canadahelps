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
      <Heading size="xlarge" text="Button" />
      <Heading subdued regular size="large" text="Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation." />
    </div>

    <div className="component--instance">
      <h3>Basic Button</h3>
      <p>Used most in the interface. Only use another style if a button requires more or less visual weight.</p>
      <br />
      <Button text="Cancel" link="#" />

    </div>

    <div className="component--instance">

      <h3>Primary Button</h3>
      <p>Use to highlight the most important actions in any experience. Don’t use more than one primary button in a section or screen to avoid overwhelming the user.</p>
      <br />
      <Button primary text="Submit" link="#" />

    </div>

    <div className="component--instance">

      <h3>Secondary Button</h3>
      <p>Use for secondary actions since they’re less visually prominent than Primary. There should only be one Primary button per screen, but there can be multiple Secondary buttons.</p>
      <br />
      <Button secondary text="Add Charities" link="#" />

    </div>

    <div className="component--instance">

    <h3>Tertiary Button</h3>
    <p>Use for tertiary actions since they’re less visually prominent than Primary or Secondary. There should only be one Primary button per screen, but there can be multiple tertiary buttons.</p>
    <br />
    <Button tertiary text="Update" link="#" />

    </div>

    <div className="component--instance">

      <h3>Plain Button</h3>
      <p>Use for less important or less commonly used actions since they’re less prominent. For example, plain buttons are used as tertiary actions in forms.</p>
      <br />
      <Button plain text="Add a message" link="#" />

    </div>

    <div className="component--instance">

      <h3>Icon Button</h3>
      <p>A button can just have an icon. Use this only when the icon’s action is very clear or very conventional, e.g. social media icons that link to the correponding account, or a mail icon to trigger the user’s email client.</p>
      <br />
      <Button icon link="#">
        <Icon icon={'MORE'} />
      </Button>
      <br />
      <br />
      <p>Or a button can have an icon as a label. On either the left... </p>
      <br />
      <Button iconLeft text="Message" link="#">
        <Icon icon={'MAIL'} />
      </Button>
      <br />
      <br />
      <p>... or the right side of the text.</p>
      <br />
      <Button iconRight text="Account" link="#">
        <Icon icon={'DROPDOWN'} />
      </Button>

    </div>

    <div className="component--instance">

      <h3>Destructive Button</h3>
      <p>Use when the action will delete user data or be otherwise difficult to recover from. Destructive buttons should trigger a confirmation dialog before the action is completed. Be thoughtful about using destructive buttons because they can feel stressful for the user.</p>
      <br />
      <Button destructive text="Delete" link="#" />

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
      <Button size="small" text="Edit" link="#" />

    </div>

    <div className="component--instance">

      <h3>Large Button</h3>
      <p>Use for the main call to action in empty states or for calls to action shown with large illustrations or bold image banners.</p>
      <br />
      <Button size="large" active text="Complete Donation" link="#" />

    </div>

  </div>
);