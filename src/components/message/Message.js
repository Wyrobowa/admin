import React from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

import style from './message.scss';

const Message = ({ msg, type }) => (
  <div styleName={`message message--${type}`}>
    {msg}
  </div>
);

Message.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ReactCssModules(Message, style);
