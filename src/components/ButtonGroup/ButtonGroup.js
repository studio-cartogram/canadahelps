import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import './ButtonGroup.scss';

import {
  Icon,
} from '../Icon';

const ButtonGroup = ({
  link,
  text,
  size,
  disabled,
  primary,
  secondary,
  outline,
  plain,
  destructive,
  icon,
  iconLeft,
  iconRight,
  children,
}) => {
  const className = classNames('ButtonGroup', {
    [`ButtonGroup--${size}`]: true,
    'ButtonGroup--disabled': disabled,
    'ButtonGroup--primary': primary,
    'ButtonGroup--secondary': secondary,
    'ButtonGroup--outline': outline,
    'ButtonGroup--plain': plain,
    'ButtonGroup--destructive': destructive,
    'ButtonGroup--icon': icon,
    'ButtonGroup--icon-left': iconLeft,
    'ButtonGroup--icon-right': iconRight,
  });
  return (
    <a
      className={className}
      href={link}
    >
      {text}
      {children}
    </a>
  );
};

ButtonGroup.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
};

export default ButtonGroup