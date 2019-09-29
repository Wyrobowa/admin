import React from 'react';
import PropTypes from 'prop-types';

// SVG icons
import Close from './close.svg';
import Cog from './cog.svg';
import Error from './error.svg';
import Plus from './plus.svg';
import Search from './search.svg';
import Checked from './checked.svg';

const Icon = ({
  className, type, ...rest
}) => {
  switch (type) {
    case 'close':
      return (
        <Close
          className={className}
          {...rest}
        />
      );
    case 'search':
      return (
        <Search
          className={className}
          {...rest}
        />
      );
    case 'plus':
      return (
        <Plus
          className={className}
          {...rest}
        />
      );
    case 'cog':
      return (
        <Cog
          className={className}
          {...rest}
        />
      );
    case 'error':
      return (
        <Error
          className={className}
          {...rest}
        />
      );
    case 'checked':
      return (
        <Checked
          className={className}
          {...rest}
        />
      );
    default:
      return false;
  }
};

Icon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
