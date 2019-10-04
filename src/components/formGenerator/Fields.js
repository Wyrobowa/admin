import React from 'react';
import PropTypes from 'prop-types';

// Components
import TextField from '../textField/TextField';

// Styles
import { FormGeneratorItem, FormGeneratorField } from './formGeneratorStyles';

const Fields = ({
  fields, handleInputChange, valueObject,
}) => (
  fields.map((field) => {
    const [property, nestedProperty] = field.id && field.id.split('.');

    return (
      <FormGeneratorItem key={nestedProperty || property}>
        <FormGeneratorField stretched={field.stretched}>
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
        </FormGeneratorField>
        <p>{field.description}</p>
      </FormGeneratorItem>
    );
  })
);

Fields.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  valueObject: PropTypes.object.isRequired,
};

export default Fields;
