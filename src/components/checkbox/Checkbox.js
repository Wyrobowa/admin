import React from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

// Styles
import styles from './checkbox.scss';

const Checkbox = ({
  id, labelText, onChange, ...rest
}) => (
  <div styleName="checkbox">
    <input
      id={id}
      name={id}
      styleName="checkbox__input"
      onChange={onChange}
      type="checkbox"
      {...rest}
    />
    {labelText
    && <label htmlFor={id} styleName="checkbox__label">{labelText}</label>
    }
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ReactCssModules(Checkbox, styles);
