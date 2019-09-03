import React from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

import styles from './title.scss';

const Title = ({ children, header: HeaderTag, type }) => (
  <HeaderTag styleName={`title title--${type}`}>{children}</HeaderTag>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  header: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};

export default ReactCssModules(Title, styles);
