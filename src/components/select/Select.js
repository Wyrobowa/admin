import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './selectStyles';

const Select = ({
  id, labelText, list, optionTextField, onChange, selectValue,
}) => (
  <Styled.SelectStyled>
    <Styled.SelectInput
      id={id}
      name={id}
      onChange={onChange}
      value={selectValue}
    >
      <option value="">{` - ${labelText} - `}</option>
      {list.map(option => (
        <option
          key={option._id}
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
  selectValue: PropTypes.string,
  optionTextField: PropTypes.string.isRequired,
};

Select.defaultProps = {
  selectValue: '',
};

export default Select;
