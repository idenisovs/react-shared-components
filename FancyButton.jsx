import React from 'react';
import PropTypes from 'prop-types';

import style from './FancyButton.scss';

export function FancyButton(props) {
  const { children }  = props;
  
  return (
    <button className={style.FancyButton}>
      {children}
    </button>
  );
}

FancyButton.propTypes = {
  children: PropTypes.node.isRequired,
}