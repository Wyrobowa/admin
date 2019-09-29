import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { MessageStyled } from './messageStyles';

const Message = ({ msg, type }) => (
  <MessageStyled type={type}>
    {msg}
  </MessageStyled>
);

Message.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Message;
