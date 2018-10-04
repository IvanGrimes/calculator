import React from 'react';
import PropTypes from 'prop-types';
import css from './Display.module.css';

const Display = ({ next, total, operation }) => (
  <div className={css.container}>
    <div className={css.value}>
      {total === null && next === null && '0'}
      <div>
        {total && total.length > 20 ? parseFloat(total).toExponential() : total}
      </div>
      <div>
        {operation && operation}
      </div>
      <div>
        {next && next.length > 20 ? parseFloat(next).toExponential() : next}
      </div>
    </div>
  </div>
);

Display.propTypes = {
};

export default Display;
