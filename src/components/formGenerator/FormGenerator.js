import React from 'react';
import PropTypes from 'prop-types';

// Components
import Fields from './Fields';
import Skeleton from '../skeleton/Skeleton';
import Title from '../title/Title';

// Styles
import { FormGeneratorStyled } from './formGeneratorStyles';

const FormGenerator = ({ formData, children, ...props }) => (
  <FormGeneratorStyled>
    {formData.map(item => (
      <Skeleton key={item.id}>
        <Skeleton.Item type="row-top">
          <Title heading="h3" type="secondary">
            {item.sectionTitle}
          </Title>
        </Skeleton.Item>
        <Skeleton.Item type="content">
          {item.fields
            ? <Fields fields={item.fields} {...props} />
            : <item.component {...item.props}>test</item.component>
          }
        </Skeleton.Item>
        <>{children}</>
      </Skeleton>
    ))}
  </FormGeneratorStyled>
);

FormGenerator.propTypes = {
  formData: PropTypes.array.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

FormGenerator.defaultProps = {
  children: '',
};

export default FormGenerator;
