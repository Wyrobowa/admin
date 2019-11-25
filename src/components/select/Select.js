import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './selectStyles';

const Select = ({
  id, labelText, list, optionTextField, onChange, selectValue, multiple,
}) => (
  <Styled.SelectStyled>
    <Styled.SelectInput
      id={id}
      name={id}
      onChange={onChange}
      value={selectValue}
      multiple={multiple}
    >
      <option value="">{` - ${labelText} - `}</option>
      {list.map(option => (
        <option
          key={option.slug}
          value={option._id}
        >
          {option[optionTextField]}
        </option>
      ))}
    </Styled.SelectInput>
    <Styled.Label htmlFor={id}>{labelText}</Styled.Label>
  </Styled.SelectStyled>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selectValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  optionTextField: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
};

Select.defaultProps = {
  selectValue: '',
  multiple: false,
};

export default Select;
