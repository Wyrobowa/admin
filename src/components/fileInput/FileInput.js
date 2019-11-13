import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { FileInputStyled, Input } from './fileInputStyles';

const FileInput = ({
  labelText, id, onChange, multiple,
}) => (
  <FileInputStyled>
    <Input type="file" name={id} id={id} onChange={onChange} multiple={multiple} />
    <label htmlFor={id}>{labelText}</label>
  </FileInputStyled>
);

FileInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
};

FileInput.defaultProps = {
  multiple: false,
};

export default FileInput;
