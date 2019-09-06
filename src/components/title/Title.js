import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleStyled = styled.h3`
  margin: 0;
  color: var(--cl-grey-80);
  
  ${({ type }) => type === 'primary' && `
    font-size: 30px;
    font-weight: 400;
  `};
  
  ${({ type }) => type === 'secondary' && `
    font-size: 25px;
    font-weight: 700;
  `};
  
  ${({ type }) => type === 'tertiary' && `
    font-size: 18px;
    color: var(--cl-grey-80);
    font-weight: 400;
  `};
`;

const Title = ({ children, heading, ...rest }) => (
  <TitleStyled {...rest} as={heading}>{children}</TitleStyled>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  heading: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};

export default Title;
