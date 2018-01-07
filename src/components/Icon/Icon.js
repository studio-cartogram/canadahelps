import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import * as icons from "../../icons";

import './Icon.scss';

const defaultIcon = icons.MORE
const Icon = ({ 
  size,
  icon, 
  ...rest
}) => {
  const Svg = icons[icon] || defaultIcon
  const className = classNames('Icon', {
    [`Icon--${size}`]: true,
  });
  return (
    <i
      className={className}
      {...rest}
    >
      <Svg />
    </i>
  );
};

Icon.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  icon: PropTypes.oneOf(Object.keys(icons)),
}

export default Icon