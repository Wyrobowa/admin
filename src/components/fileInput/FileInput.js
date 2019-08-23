import React from 'react';
import ReactCssModules from 'react-cssmodules';
import PropTypes from 'prop-types';

// Styles
import styles from './fileInput.scss';

const FileInput = ({ labelText, id, onChange }) => {
  return (
    <div styleName="file-input">
      <input type="file" name={id} id={id} onChange={onChange} styleName="file-input__input" />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

FileInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ReactCssModules(FileInput, styles);
