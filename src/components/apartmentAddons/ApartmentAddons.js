import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './apartmentAddonsStyles';
import Button from '../button/Button';

const ApartmentAddons = ({
  id, labelText, editAction, values,
}) => {
  const handleOnClick = () => {
    const addons = [...values, ''];

    editAction('addons', addons);
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    const addons = [...values];
    const arrayIndex = target.getAttribute('data-idx');
    addons[arrayIndex] = value;

    editAction(name, addons);
  };

  return (
    <Styled.TextFieldsWrapper>
      <Button model="quaternary" onClick={handleOnClick}>Add new addon</Button>
      {values.length > 0 && values.map((value, idx) => (
        <Styled.TextFieldStyles
          key={value}
          id={id}
          data-idx={idx}
          labelText={labelText}
          onChange={handleInputChange}
          value={value}
        />
      ))}
    </Styled.TextFieldsWrapper>
  );
};

ApartmentAddons.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  editAction: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
};

export default ApartmentAddons;
