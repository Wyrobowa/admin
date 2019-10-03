import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  CheckboxStyled, CheckboxLabel, CheckboxInput, CheckboxIndicator,
} from './checkboxStyles';

const Checkbox = ({
  id, labelText, isSwitch, onChange, checked, ...rest
}) => (
  <CheckboxStyled isSwitch={isSwitch}>
    <CheckboxLabel htmlFor={id}>
      <CheckboxInput
        id={id}
        name={id}
        isSwitch={isSwitch}
        onChange={onChange}
        type="checkbox"
        checked={checked}
        {...rest}
      />
      {(labelText && !isSwitch)
        && labelText}
      {isSwitch
        && <CheckboxIndicator isSwitch={isSwitch} />
      }
    </CheckboxLabel>
  </CheckboxStyled>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  isSwitch: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  labelText: null,
  isSwitch: null,
  checked: false,
};

export default Checkbox;
