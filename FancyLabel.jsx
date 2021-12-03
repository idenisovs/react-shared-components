import React from 'react';
import PropTypes from 'prop-types';

export function FancyLabel(props) {
  const { children }  = props;

  return (
    <span>
      {children}
    </span>
  );
}

FancyLabel.propTypes = {
  children: PropTypes.node.isRequired,
}