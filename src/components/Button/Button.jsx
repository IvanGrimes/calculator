import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends Component {
  static defaultProps = {
    className: '',
    twoThird: false,
    wide: false,
    type: 'button',
  };

  static propTypes = {
    className: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    twoThird: PropTypes.bool,
    wide: PropTypes.bool,
    type: PropTypes.string,
  };

  state = {
    pressed: false,
  };

  handleMouseDown = () => {
    this.setState({
      pressed: true,
    });
  };

  handleMouseUp = () => {
    this.setState({
      pressed: false,
    });
  };

  handleClick = () => {
    const { handleClick, children } = this.props;

    handleClick(`${children}`);
  };

  render() {
    const {
      className,
      children,
      twoThird,
      wide,
      type,
    } = this.props;
    const { pressed } = this.state;
    const classNames = [
      className,
      css.number,
      twoThird ? css.twoThird : '',
      wide ? css.wide : '',
      pressed ? css.pressed : '',
    ];

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        className={classNames.join(' ').trim()}
        type={type}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        {children}
      </button>
    );
  }
}

export default Button;
