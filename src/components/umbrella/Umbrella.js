import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import { UmbrellaStyles } from './umbrellaStyles';

const Umbrella = ({ active }) => {
  const [message] = useState({
    text: 'Super promo, use that code now!',
  });
  return active && <UmbrellaStyles active={active}>{message.text}</UmbrellaStyles>;
};

Umbrella.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Umbrella;
