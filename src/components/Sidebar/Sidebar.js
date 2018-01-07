import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import './Sidebar.scss';

import {
  Icon,
} from '../Icon';

const Sidebar = ({
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
  const className = classNames('Sidebar', {
    [`Sidebar--${size}`]: true,
    'Sidebar--disabled': disabled,
    'Sidebar--primary': primary,
    'Sidebar--secondary': secondary,
    'Sidebar--outline': outline,
    'Sidebar--plain': plain,
    'Sidebar--destructive': destructive,
    'Sidebar--icon': icon,
    'Sidebar--icon-left': iconLeft,
    'Sidebar--icon-right': iconRight,
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

Sidebar.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
};

export default Sidebar