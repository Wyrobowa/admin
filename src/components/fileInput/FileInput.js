import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { FileInputStyled, Input } from './fileInputStyles';

const FileInput = ({ labelText, id, onChange }) => (
  <FileInputStyled>
    <Input type="file" name={id} id={id} onChange={onChange} />
    <label htmlFor={id}>{labelText}</label>
  </FileInputStyled>
);

FileInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FileInput;
