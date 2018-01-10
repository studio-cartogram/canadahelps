import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import './ActionList.scss';

import {
  Icon,
  Button,
} from '../Icon';

const ActionList = ({
  buttons,
  text,
  sectioned,
  children,
}) => {
  const className = classNames('ActionList', {
    'ActionList--sectioned': sectioned,
  });
  return (
    <div className={className}>
      <Button plain
      >
        {text}
        {children}
      </Button>
    </div>
  );
};

  // <div className={className}>
  //   <Button plain>
  //   {text}
  //   {icon}
  // </Button>
  //   <div className="ActionList-items">
  //     <Button plain>
  //       {text}
  //       {children}
  //     </Button>
  //   </div>
  // </div>

ActionList.propTypes = {
  text: PropTypes.string,
};

export default ActionList