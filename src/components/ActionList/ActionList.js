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
  segmented,
  children,
  orientation,
}) => {
  const className = classNames('ActionList', {
    'ActionList--segmented': segmented,
    [`ActionList--${orientation}`]: true,
  });
  return (
    <div 
      className={className}
    >
      {buttons}
      {children}
    </div>
  );
};

ActionList.propTypes = {
  orientation: PropTypes.oneOf(['left', 'right', 'center']),
};

export default ActionList