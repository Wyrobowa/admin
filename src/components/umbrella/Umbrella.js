import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

// Styles
import styles from './umbrella.scss';

const Umbrella = ({ active }) => {
  const [message] = useState({
    text: 'Super promo, use that code now!',
  });
  return active && <div styleName="umbrella">{message.text}</div>;
};

Umbrella.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default ReactCssModules(Umbrella, styles);
