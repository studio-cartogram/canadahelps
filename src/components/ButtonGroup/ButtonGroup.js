import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import './ButtonGroup.scss';

import {
  Icon,
  Button,
} from '../Icon';

const ButtonGroup = ({
  buttons,
  segmented,
  children,
}) => {
  const className = classNames('ButtonGroup', {
    'ButtonGroup--segmented': segmented,
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

ButtonGroup.propTypes = {

};

export default ButtonGroup