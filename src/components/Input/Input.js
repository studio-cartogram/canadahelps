import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import Link from 'gatsby-link';
import './Input.scss';

const Input = ({ placeholder, type }) => {
  const className = classNames('Input');
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input