import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({
  handleClick,
  className,
  children,
  twoThird,
  wide,
}) => {
  const classNames = [
    className,
    css.number,
    twoThird ? css.twoThird : '',
    wide ? css.wide : '',
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
  className: '',
  twoThird: false,
  wide: false,
};

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  twoThird: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
