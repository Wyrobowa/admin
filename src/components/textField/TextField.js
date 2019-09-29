import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  TextFieldStyled, InputStyled, TextareaStyled, LabelStyled,
} from './textFieldStyles';

const TextField = ({
  id, fieldType, labelText, onChange, value, ...rest
}) => (
  <TextFieldStyled>
    {fieldType === 'input' && (
      <InputStyled
        id={id}
        name={id}
        value={value || ''}
        onChange={onChange}
        {...rest}
      />
    )}
    {fieldType === 'textarea' && (
      <TextareaStyled id={id} name={id} onChange={onChange} value={value || ''} {...rest} />
    )}
    {labelText
    && <LabelStyled htmlFor={id}>{labelText}</LabelStyled>
    }
  </TextFieldStyled>
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
