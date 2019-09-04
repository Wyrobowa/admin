import React from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

// Styles
import styles from './checkbox.scss';

const Checkbox = ({
  id, labelText, isSwitch, onChange, ...rest
}) => (
  <div styleName={`checkbox ${isSwitch ? 'checkbox--switch' : ''}`}>
    <label htmlFor={id} styleName="checkbox__label">
      <input
        id={id}
        name={id}
        styleName="checkbox__input"
        onChange={onChange}
        type="checkbox"
        {...rest}
      />
      {(labelText && isSwitch)
        && labelText}
      {isSwitch
        && <span styleName="checkbox__indicator" />
      }
    </label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  isSwitch: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  labelText: null,
  isSwitch: null,
};

export default ReactCssModules(Checkbox, styles);
