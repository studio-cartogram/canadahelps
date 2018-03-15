import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import * as icons from "../../icons";

import './Icon.scss';

const defaultIcon = icons.MORE
const Icon = ({ 
  subdued,
  highlight,
  inverse,
  link,
  size,
  icon, 
  ...rest
}) => {
  const Svg = icons[icon] || defaultIcon
  const className = classNames('Icon', {
    [`Icon--${size}`]: true,
    'Icon--subdued': subdued,
    'Icon--highlight': highlight,
    'Icon--inverse': inverse,
    'Icon--link': link,
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
  size: PropTypes.oneOf(['nano', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  icon: PropTypes.oneOf(Object.keys(icons)),
}

export default Icon