import React from 'react';
import ReactCssModules from 'react-cssmodules';
import PropTypes from 'prop-types';

// Components
import TextField from '../textField/TextField';

// Styles
import styles from './formGenerator.scss';

const Fields = ({
  fields, handleInputChange, valueObject,
}) => (
  fields.map((field) => {
    const [property, nestedProperty] = field.id.split('.');

    return (
      <div styleName="form-generator__item" key={nestedProperty || property}>
        <div styleName="form-generator__field">
          {field.component
            ? (
              <field.component
                {...field.props}
                labelText={field.labelText}
                id={nestedProperty ? `${property}.${nestedProperty}` : property}
              />
            )
            : (
              <TextField
                labelText={field.labelText}
                id={nestedProperty ? `${property}.${nestedProperty}` : property}
                onChange={handleInputChange}
                value={nestedProperty
                  ? valueObject[property][nestedProperty]
                  : valueObject[property]}
                type={field.inputType}
              />
            )
          }
        </div>
        <p>{field.description}</p>
      </div>
    );
  })
);

Fields.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  valueObject: PropTypes.object.isRequired,
};

export default ReactCssModules(Fields, styles);
