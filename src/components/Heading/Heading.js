import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import Link from 'gatsby-link';
import './Heading.scss';

const Heading = ({ 
  text, 
  size, 
  subdued, 
  regular 
}) => {
  const className = classNames('Heading', {
    [`Heading--${size}`]: true,
    'Heading--subdued': subdued,
    'Heading--regular': regular,
  });
  return (
    <div
    className={className}
    >
    {text}
  </div>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xlarge', 'large', 'medium', 'small', 'micro', 'nano']),
};

export default Heading