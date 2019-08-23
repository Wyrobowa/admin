import React from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

// Styles
import styles from './button.scss';

const Button = ({
  children, isDisabled, onClick, model, type,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    onClick={onClick}
    styleName={`button ${`button--${model}`}`}
    type={type || 'button'}
    disabled={isDisabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  model: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  isDisabled: false,
  type: 'button',
  onClick: () => {},
};

export default ReactCssModules(Button, styles);
