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

      <h3>Brand</h3>
      <p>Brand related icons.</p>
      <br />

      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'LOGO'} size={'xxlarge'} />
          <Heading subdued regular text="logo" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'LOGOMOBILE'} size={'xxlarge'} />
          <Heading subdued regular text="logomobile" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'LOGOICON'} size={'large'} />
          <Heading subdued regular text="logoicon" size="nano" />
        </div>

      </div>
    
    </div>

    <div className="component--instance">

      <h3>Bequest</h3>
      <p>Bequest related icons.</p>
      <br />

      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'ACCESS'} size={'xlarge'} />
          <Heading subdued regular text="access" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ADD'} size={'large'} />
          <Heading subdued regular text="add" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'HISTORY'} size={'large'} />
          <Heading subdued regular text="history" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'NOTES'} size={'large'} />
          <Heading subdued regular text="notes" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'UPDATE'} size={'large'} />
          <Heading subdued regular text="update" size="nano" />
        </div>

      </div>

    </div>

    <div className="component--instance">

      <h3>General</h3>
      <p>Icons used throughout the front-end website and the user account admin.</p>
      <br />

      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'ACTIVATE'} size={'small'} />
          <Heading subdued regular text="activate" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ARCHIVE'} size={'small'} />
          <Heading subdued regular text="archive" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ARROWDOWN'} size={'nano'} />
          <Heading subdued regular text="arrow-down" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ARROWUP'} size={'nano'} />
          <Heading subdued regular text="arrow-up" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ARROWLEFT'} size={'nano'} />
          <Heading subdued regular text="arrow-left" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ARROWRIGHT'} size={'nano'} />
          <Heading subdued regular text="arrow-right" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'BACK'} size={'small'} />
          <Heading subdued regular text="back" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'BASKET'} size={'small'} />
          <Heading subdued regular text="basket" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'BOOKMARK'} size={'small'} />
          <Heading subdued regular text="bookmark" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'CHECK'} size={'nano'} />
          <Heading subdued regular text="check" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'CLOCK'} size={'nano'} />
          <Heading subdued regular text="clock" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'CLOSE'} size={'nano'} /> 
          <Heading subdued regular text="close" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'COPY'} size={'small'} /> 
          <Heading subdued regular text="copy" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'DEFAULT'} size={'small'} />
          <Heading subdued regular text="default" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'DOWNLOAD'} size={'small'} />
          <Heading subdued regular text="download" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'DOWNLOADALT'} size={'small'} />
          <Heading subdued regular text="downloadalt" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'DEACTIVATE'} size={'nano'} />
          <Heading subdued regular text="deactivate" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'DROPDOWN'} size={'nano'} />
          <Heading subdued regular text="dropdown" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'EDIT'} size={'small'} />
          <Heading subdued regular text="edit" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'EMBED'} size={'small'} />
          <Heading subdued regular text="embed" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ERROR'} size={'nano'} />
          <Heading subdued regular text="error" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'FAQ'} size={'small'} />
          <Heading subdued regular text="faq" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'FAVOURITES'} size={'nano'} />
          <Heading subdued regular text="favourites" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'GOAL'} size={'small'} />
          <Heading subdued regular text="goal" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'HAMBURGER'} size={'nano'} />
          <Heading subdued regular text="hamburger" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'LIGHTBULB'} size={'nano'} />
          <Heading subdued regular text="lightbulb" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'LINK'} size={'small'} />
          <Heading subdued regular text="link" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'LOCATION'} size={'nano'} />
          <Heading subdued regular text="location" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'LOCK'} size={'small'} />
          <Heading subdued regular text="lock" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'MINUS'} size={'nano'} />
          <Heading subdued regular text="minus" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'MAIL'} size={'nano'} />
          <Heading subdued regular text="mail" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'MANAGE'} size={'small'} />
          <Heading subdued regular text="manage" size="nano" />
        </div>
        <div className="grid-item"> 
          <Icon icon={'PLUS'} size={'nano'} />
          <Heading subdued regular text="plus" size="nano" />
        </div>
        <div className="grid-item"> 
          <Icon icon={'QUESTION'} size={'nano'} />
          <Heading subdued regular text="question" size="nano" />
        </div>
        <div className="grid-item"> 
          <Icon icon={'SEARCH'} size={'small'} />
          <Heading subdued regular text="search" size="nano" />
        </div>
        <div className="grid-item"> 
          <Icon icon={'SUCCESS'} size={'small'} />
          <Heading subdued regular text="success" size="nano" />
        </div>
        <div className="grid-item"> 
          <Icon icon={'TEAM'} size={'small'} />
          <Heading subdued regular text="team" size="nano" />
        </div>
        <div className="grid-item"> 
          <Icon icon={'TRASH'} size={'small'} />
          <Heading subdued regular text="trash" size="nano" />
        </div>
        <div className="grid-item"> 
          <Icon icon={'USER'} size={'small'} />
          <Heading subdued regular text="user" size="nano" />
        </div>
        <div className="grid-item"> 
          <Icon icon={'VIEW'} size={'small'} />
          <Heading subdued regular text="view" size="nano" />
        </div>

      </div>

    </div>

    <div className="component--instance">

      <h3>Campaign</h3>
      <p>Icons used for campaign-specific UI.</p>
    
      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'ANNIVERSARY'} size={'small'} />
          <Heading subdued regular text="anniversary" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'BIRTHDAY'} size={'small'} />
          <Heading subdued regular text="birthday" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'CHALLENGE'} size={'small'} />
          <Heading subdued regular text="challenge" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'NEWBABY'} size={'small'} />
          <Heading subdued regular text="newbaby" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'INMEMORY'} size={'small'} />
          <Heading subdued regular text="inmemory" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'HUMANITARIAN'} size={'small'} />
          <Heading subdued regular text="humanitarian" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'GRADUATION'} size={'small'} />
          <Heading subdued regular text="graduation" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ENGAGEMENT'} size={'small'} />
          <Heading subdued regular text="engagement" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'OTHER'} size={'small'} />
          <Heading subdued regular text="other" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'CANADA150'} size={'small'} />
          <Heading subdued regular text="canada150" size="nano" />
        </div>

      </div>

    </div>

    <div className="component--instance">

      <h3>Charity Categories</h3>
      <p>Icons used for each of the charity categories.</p>
    
      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'ART'} size={'small'} />
          <Heading subdued regular text="arts" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ANIMALS'} size={'small'} />
          <Heading subdued regular text="animals" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'EDUCATION'} size={'small'} />
          <Heading subdued regular text="education" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ENVIRONMENT'} size={'small'} />
          <Heading subdued regular text="environment" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'HEALTH'} size={'small'} />
          <Heading subdued regular text="health" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'INDIGENOUS'} size={'small'} />
          <Heading subdued regular text="indigenous" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'INTERNATIONAL'} size={'small'} />
          <Heading subdued regular text="international" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'PUBLIC'} size={'small'} />
          <Heading subdued regular text="public" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'RELIGION'} size={'small'} />
          <Heading subdued regular text="religion" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'SOCIAL'} size={'small'} />
          <Heading subdued regular text="social" size="nano" />
        </div>

      </div>

    </div>

    <div className="component--instance">

      <h3>Donor Giving Dashboard</h3>
      <p>Icons used for the dashboard of the Donor Accounts</p>

      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'ANIMALSLG'} size={'large'} />
          <Heading subdued regular text="animalslg" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'ARTSLG'} size={'large'} />
          <Heading subdued regular text="artslg" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'ENVLG'} size={'large'} />
          <Heading subdued regular text="environmentlg" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'HEALTHLG'} size={'large'} />
          <Heading subdued regular text="healthlg" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'INDIGENOUSLG'} size={'large'} />
          <Heading subdued regular text="indigenouslg" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'INTERNATIONALLG'} size={'large'} />
          <Heading subdued regular text="internationallg" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'PUBLICLG'} size={'large'} />
          <Heading subdued regular text="publiclg" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'RELIGIONLG'} size={'large'} />
          <Heading subdued regular text="religionlg" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'SOCIALLG'} size={'large'} />
          <Heading subdued regular text="sociallg" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'BEQUESTLG'} size={'large'} />
          <Heading subdued regular text="bequest" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'EVENTSLG'} size={'large'} />
          <Heading subdued regular text="events" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'FUNDRAISERSLG'} size={'large'} />
          <Heading subdued regular text="fundraiser" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'MONTHLYLG'} size={'large'} />
          <Heading subdued regular text="monthly" size="nano" />
        </div>

        <div className="grid-item">
          <Icon icon={'ONETIMELG'} size={'large'} />
          <Heading subdued regular text="onetime" size="nano" />
        </div>

      </div>

    </div>

    <div className="component--instance">

      <h3>Impact</h3>
      <p>Icons used in the impact tab.</p>

      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'IMPACTCHANGE'} size={'small'} />
          <Heading subdued regular text="impactchange" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'IMPACTINFO'} size={'small'} />
          <Heading subdued regular text="impactinfo" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'IMPACTOUTCOME'} size={'small'} />
          <Heading subdued regular text="impactoutcome" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'IMPACTRESULTS'} size={'small'} />
          <Heading subdued regular text="impactresults" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'IMPACTSTRATEGIES'} size={'small'} />
          <Heading subdued regular text="impactstrategies" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'IMPACTTESTIMONIALS'} size={'small'} />
          <Heading subdued regular text="impacttestimonials" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'PARTTIMELG'} size={'large'} />
          <Heading subdued regular text="parttimelg" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'FULLTIMELG'} size={'large'} />
          <Heading subdued regular text="fulltimelg" size="nano" />
        </div>

      </div>

    </div>

    <div className="component--instance">

      <h3>Events</h3>
      <p>Events related icons.</p>
      <br />

      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'SALES'} size={'xlarge'} />
          <Heading subdued regular text="sales" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ATTENDEES'} size={'xlarge'} />
          <Heading subdued regular text="attendees  " size="nano" />
        </div>

      </div>

    </div>

    <div className="component--instance">

      <h3>Misc</h3>
      <p>Icons used in various spots on the marketing site and elsewhere.</p>
      <br />

      <div className="instance-grid">

        <div className="grid-item">
          <Icon highlight icon={'DOCUMENTLG'} size={'xlarge'} />
          <Heading subdued regular text="documentlg" size="nano" />
        </div>
        <div className="grid-item">
          <Icon highlight icon={'PARTNERSHIPS'} size={'xlarge'} />
          <Heading subdued regular text="partnerships" size="nano" />
        </div>
        <div className="grid-item">
          <Icon highlight icon={'LEAF'} size={'xlarge'} />
          <Heading subdued regular text="leaf" size="nano" />
        </div>

      </div>

    </div>

    <div className="component--instance">

      <h3>Minor</h3>
      <p>Icons used in specific modules, such as rich text input.</p>
      <br />

      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'BOLD'} size={'nano'} />
          <Heading subdued regular text="bold" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'DOCUMENT'} size={'nano'} />
          <Heading subdued regular text="document" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'ITALIC'} size={'nano'} />
          <Heading subdued regular text="italic" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'LINKALT'} size={'nano'} />
          <Heading subdued regular text="linkalt" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'EXPAND'} size={'nano'} />
          <Heading subdued regular text="expand" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'FORWARD'} size={'nano'} />
          <Heading subdued regular text="forward" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'OL'} size={'nano'} />
          <Heading subdued regular text="ol" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'REPLY'} size={'nano'} />
          <Heading subdued regular text="reply" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'UL'} size={'nano'} />
          <Heading subdued regular text="ul" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'UNDERLINE'} size={'nano'} />
          <Heading subdued regular text="underline" size="nano" />
        </div>
      </div>

    </div>

    <div className="component--instance">

      <h3>Social</h3>
      <p>Scocial media icons.</p>
      <br />

      <div className="instance-grid">

        <div className="grid-item">
          <Icon icon={'FACEBOOK'} size={'small'} />
          <Heading subdued regular text="facebook" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'GOOGLE'} size={'small'} />
          <Heading subdued regular text="google" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'MAIL'} size={'small'} />
          <Heading subdued regular text="mail" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'PINTEREST'} size={'small'} />
          <Heading subdued regular text="pinterest" size="nano" />
        </div>
        <div className="grid-item">
          <Icon icon={'TWITTER'} size={'small'} />
          <Heading subdued regular text="twitter" size="nano" />
        </div>

      </div>

    </div>

  </div>
);