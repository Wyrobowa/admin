import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { ButtonStyled } from './buttonStyles';

const Button = ({
  children, isDisabled, onClick, model, type, ...rest
}) => (
  // eslint-disable-next-line react/button-has-type
  <ButtonStyled
    onClick={onClick}
    model={model}
    type={type || 'button'}
    disabled={isDisabled}
    {...rest}
  >
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
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

export default Button;
