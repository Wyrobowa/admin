import React from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

// Components
import Skeleton from '../skeleton/Skeleton';
import Title from '../title/Title';
import TextField from '../textField/TextField';

// Styles
import styles from './formGenerator.scss';
import titleStyles from '../../containers/aparment/title.scss';

const FormGenerator = ({ formData, handleInputChange, valueObject }) => (
  <form styleName="form-generator">
    {formData.map(item => (
      <Skeleton key={item.id}>
        <Skeleton.Item type="row-top">
          <Title heading="h3" type="tertiary" styles={titleStyles}>
            {item.sectionTitle}
          </Title>
        </Skeleton.Item>
        <Skeleton.Item type="content">
          {item.fields
            ? (
              item.fields.map(field => (
                <div styleName="form-generator__item" key={field.id}>
                  <div styleName="form-generator__field">
                    <TextField
                      labelText={field.labelText}
                      id={field.id}
                      onChange={handleInputChange}
                      value={valueObject[field.id]}
                    />
                  </div>
                  <p>{field.description}</p>
                </div>
              ))
            )
            : <item.component {...item.props}>test</item.component>
          }
        </Skeleton.Item>
      </Skeleton>
    ))}
  </form>
);

FormGenerator.propTypes = {
  formData: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  valueObject: PropTypes.object.isRequired,
};

export default ReactCssModules(FormGenerator, styles);
