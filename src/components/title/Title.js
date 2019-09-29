import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { TitleStyled } from './titleStyles';

const Title = ({ children, heading, ...rest }) => (
  <TitleStyled {...rest} as={heading}>{children}</TitleStyled>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  heading: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};

export default Title;
