import React from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

import styles from './title.scss';

const Title = ({
  children, heading, type,
}) => {
  const styleName = `title title--${type}`;

  return (React.createElement(heading, { styleName }, children));
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  heading: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};

export default ReactCssModules(Title, styles);
