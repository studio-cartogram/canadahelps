import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import './Button.scss';

import {
  Icon,
} from '../Icon';

const Button = ({
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
  const className = classNames('Button', {
    [`Button--${size}`]: true,
    'Button--disabled': disabled,
    'Button--primary': primary,
    'Button--secondary': secondary,
    'Button--outline': outline,
    'Button--plain': plain,
    'Button--destructive': destructive,
    'Button--icon': icon,
    'Button--icon-left': iconLeft,
    'Button--icon-right': iconRight,
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

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
};

export default Button