import React from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

// Components
import Fields from './Fields';
import Skeleton from '../skeleton/Skeleton';
import Title from '../title/Title';

// Styles
import styles from './formGenerator.scss';

const FormGenerator = ({ formData, ...props }) => (
  <form styleName="form-generator">
    {formData.map(item => (
      <Skeleton key={item.id}>
        <Skeleton.Item type="row-top">
          <Title header="h3" type="secondary">
            {item.sectionTitle}
          </Title>
        </Skeleton.Item>
        <Skeleton.Item type="content">
          {item.fields
            ? <Fields fields={item.fields} {...props} />
            : <item.component {...item.props}>test</item.component>
          }
        </Skeleton.Item>
      </Skeleton>
    ))}
  </form>
);

FormGenerator.propTypes = {
  formData: PropTypes.array.isRequired,
};

export default ReactCssModules(FormGenerator, styles);
