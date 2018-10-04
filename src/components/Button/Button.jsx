import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ handleClick, className, children, twoThird }) => {
  const classNames = [
    className,
    css.number,
    twoThird ? css.twoThird : '',
  ];

  return (
    <button
      className={classNames.join(' ').trim()}
      type="button"
      onClick={() => handleClick(`${children}`)}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  wide: false,
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  wide: PropTypes.bool,
};

export default Button;
