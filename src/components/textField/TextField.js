import React from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

// Styles
import styles from './textField.scss';

const TextField = ({
  id, labelText, onChange, value, ...rest
}) => (
  <div styleName="text-field">
    <input
      id={id}
      name={id}
      styleName="text-field__input"
      value={value || ''}
      onChange={onChange}
      {...rest}
    />
    {labelText
    && <label htmlFor={id} styleName="text-field__label">{labelText}</label>
    }
  </div>
);

TextField.defaultProps = {
  value: '',
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default ReactCssModules(TextField, styles);
