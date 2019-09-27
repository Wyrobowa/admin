import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  TextFieldStyles, InputStyles, TextareaStyles, LabelStyles,
} from './textFieldStyles';

const TextField = ({
  id, fieldType, labelText, onChange, value, ...rest
}) => (
  <TextFieldStyles>
    {fieldType === 'input' && (
      <InputStyles
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        {...rest}
      />
    )}
    {fieldType === 'textarea' && (
      <TextareaStyles id={id} name={id} onChange={onChange} value={value} {...rest} />
    )}
    {labelText
    && <LabelStyles htmlFor={id}>{labelText}</LabelStyles>
    }
  </TextFieldStyles>
);

TextField.defaultProps = {
  value: '',
  fieldType: 'input',
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  fieldType: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default TextField;
