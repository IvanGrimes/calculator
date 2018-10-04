import React from 'react';
import PropTypes from 'prop-types';
import css from './Display.module.css';

const Display = ({ children }) => (
  <div className={css.container}>
    <div className={css.value}>
      {children}
    </div>
  </div>
);

Display.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]).isRequired,
};

export default Display;
